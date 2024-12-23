'use client';
import { ButtonStyled, Cards } from '@core/ui/components';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Logoimg } from '../../../../packages/ui/assets';

export default function Page() {
	const card1 = {
		id: '1',
		name: 'name1',
		role: 'role1',
		experience: 'experience1',
		imgurl:
			'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
	};

	return (
		<div className='flex flex-col gap-10 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-5 flex-row'>
				<div>
					<Cards
						key={card1.id}
						name={card1.name}
						role={card1.role}
						experience={card1.experience}
						imgurl={card1.imgurl}
					/>
				</div>
			</div>
		</div>
	);
}
