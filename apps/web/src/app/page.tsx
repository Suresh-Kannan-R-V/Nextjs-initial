'use client';
import { ButtonStyled } from '@core/ui/components';
import { StatusChip } from '@core/ui/components';
import { SearchBar } from '@core/ui/components';
import { TabBar } from '@core/ui/components';
import { Button } from '@nextui-org/button';
import { Table } from '@nextui-org/react';
import Link from 'next/link';

export default function Page() {
	const tabData = [
		{
			id: 'overview',
			label: 'Overview',
			content: 'Hello world',
		},
		{
			id: 'reviews',
			label: 'Reviews & Ratings',
			content: 'Hii ',
			count: 5,
		},
	];

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
			</div>
			<div className='flex gap-4 py-3'>
				<StatusChip status='active' />
				<StatusChip status='in-call' />
				<StatusChip status='offline' />
				<SearchBar />
			</div>
			<div className='flex gap-5 flex-row w-96'>
				<TabBar tabs={tabData} />
			</div>
		</div>
	);
}
