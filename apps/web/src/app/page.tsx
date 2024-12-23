'use client';
import { ButtonStyled, Cards, Logo } from '@core/ui/components';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Logoimg } from '../../../../packages/ui/assets';

export default function Page() {
	const card1 = {
		id: '1',
		name: 'Daniel Jack',
		role: 'Credit Management',
		experience: '3 Years Experience',
		imgurl:
			'https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg',
	};

	return (
		<div className='flex flex-col gap-10 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-5 flex-row'>
				<ButtonStyled text='Light' variant='flat' />
				<ButtonStyled text='Outlined' variant='bordered' />
				<ButtonStyled text='Solid' variant='solid' />
				<ButtonStyled text='Start Icon' variant='flat' />
				<ButtonStyled text='Start Icon' variant='bordered' />
				<ButtonStyled text='Start Icon' variant='solid' />
				<ButtonStyled text='End Icon' variant='flat' />
				<ButtonStyled text='End Icon' variant='bordered' />
			</div>
			<div className='flex gap-5 flex-row'>
				<ButtonStyled variant='flat' />
				<ButtonStyled variant='bordered' />
				<ButtonStyled variant='solid' />
				<ButtonStyled text='Light' variant='flat' loading />
				<ButtonStyled text='Outlined' variant='bordered' loading />
				<ButtonStyled text='Solid' variant='solid' loading />
				<ButtonStyled text='Light' variant='flat' disabled />
				<ButtonStyled text='Outlined' variant='bordered' disabled />
				<ButtonStyled
					text='Solid'
					variant='solid'
					onClick={() => alert('hello')}
					disabled
				/>
				<ButtonStyled
					text='onClick'
					variant='solid'
					onClick={() => alert('Button Clicked')}
				/>
				<ButtonStyled
					text='onClick'
					variant='light'
					onClick={() => alert('Button Clicked')}
				/>

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
