'use client';

// import type { RootState } from '@/store';
// import { decrement, increment } from '@/store/counter';
// import { useDispatch, useSelector } from 'react-redux';
import UserList from './components/userList';
export default function page() {
	// const count = useSelector((state: RootState) => state?.counter?.value);
	// const dispatch = useDispatch();
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-1 flex flex-col items-center justify-center bg-blue-100'>
				{/* <button
					type='button'
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					type='button'
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button> */}
				<UserList />
			</div>
		</div>
	);
}
