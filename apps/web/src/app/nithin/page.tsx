'use client';
import { Cards } from '@core/ui/components';

export default function Page() {
	const card1 = {
		id: '1',
		name: 'Daniel jack',
		role: 'Credential Manager',
		experience: '3 years Experience',
		imgurl:
			'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
		value: 4,
		iconSize: 16,
	};
	return (
		<div>
			<Cards
				key={card1.id}
				name={card1.name}
				role={card1.role}
				experience={card1.experience}
				imgurl={card1.imgurl}
				value={card1.value}
				iconSize={card1.iconSize}
			/>
		</div>
	);
}
