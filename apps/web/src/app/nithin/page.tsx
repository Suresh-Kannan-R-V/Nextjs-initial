'use client';
import { ArrowTitle, Cards } from '@core/ui/components';

export default function Page() {
	const card1 = [
		{
			id: '1',
			name: 'Daniel jack',
			role: 'Credential Manager',
			experience: '3 years Experience',
			imgurl:
				'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
			value: 4,
			iconSize: 16,
		},
		{
			id: '2',
			name: 'Daniel jack',
			role: 'Credential Manager',
			experience: '3 years Experience',
			imgurl:
				'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
			value: 4,
			iconSize: 16,
		},
		{
			id: '3',
			name: 'Daniel jack',
			role: 'Credential Manager',
			experience: '3 years Experience',
			imgurl:
				'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
			value: 4,
			iconSize: 16,
		},
		{
			id: '4',
			name: 'Daniel jack',
			role: 'Credential Manager',
			experience: '3 years Experience',
			imgurl:
				'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
			value: 4,
			iconSize: 16,
		},
		{
			id: '5',
			name: 'Daniel jack',
			role: 'Credential Manager',
			experience: '3 years Experience',
			imgurl:
				'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
			value: 4,
			iconSize: 16,
		},
		{
			id: '6',
			name: 'Daniel jack',
			role: 'Credential Manager',
			experience: '3 years Experience',
			imgurl:
				'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
			value: 4,
			iconSize: 16,
		},
	];

	return (
		<div>
			<ArrowTitle
				title='Available Slots'
				data={card1.map((Data) => (
					<Cards
						key={Data.id}
						name={Data.name}
						role={Data.role}
						experience={Data.experience}
						imgurl={Data.imgurl}
						value={Data.value}
						iconSize={Data.iconSize}
					/>
				))}
				count={3}
			/>

			{/* Render each card dynamically using map */}
		</div>
	);
}
