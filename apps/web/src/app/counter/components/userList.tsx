import { useStore } from '@/store/useStore';
import { addUser, deleteUser, updateUser } from '@/store/userSlice';
import type React from 'react';
import { useState } from 'react';

const UserList: React.FC = () => {
	const store = useStore((state) => state.users, {
		addUser,
		updateUser,
		deleteUser,
	});

	const [editingUser, setEditingUser] = useState<{
		id: number;
		name: string;
		email: string;
	} | null>(null);

	return (
		<div>
			<h2>User List</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const name = (e.target as any).name.value;
					const email = (e.target as any).email.value;
					store?.addUser({ id: Date.now(), name, email });
					(e.target as any).reset();
				}}
			>
				<input name='name' placeholder='Name' required />
				<input name='email' placeholder='Email' required />
				<button type='submit'>Add User</button>
			</form>
			<ul>
				{store.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.email})
						<button type='button' onClick={() => setEditingUser(user)}>
							Edit
						</button>
						<button type='button' onClick={() => store?.deleteUser(user.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
			{editingUser && (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const name = (e.target as any).name.value;
						const email = (e.target as any).email.value;
						store.updateUser({ id: editingUser.id, name, email });
						setEditingUser(null);
					}}
				>
					<input name='name' defaultValue={editingUser.name} required />
					<input name='email' defaultValue={editingUser.email} required />
					<button type='submit'>Update</button>
				</form>
			)}
		</div>
	);
};

export default UserList;
