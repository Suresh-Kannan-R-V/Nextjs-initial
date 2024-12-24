'use client';
import { SearchIcon, Thumbnailimg } from '@core/ui/assets';
import { Inputfield, Selectfield, VideoCard } from '@core/ui/components';
import { useState } from 'react';

type LabelData = {
	label: string;
	values: string[];
};
import { Button } from '@nextui-org/button';
import { RiNotification3Line, RiUser3Line } from 'react-icons/ri';

// export default function Page() {
// 	const endContent = (
// 		<>
// 			<Button
// 				isIconOnly
// 				variant='light'
// 				className='text-foreground'
// 				radius='full'
// 			>
// 				<RiNotification3Line className='text-xl' />
// 			</Button>
// 			<Button
// 				isIconOnly
// 				variant='light'
// 				className='text-foreground'
// 				radius='full'
// 			>
// 				<RiUser3Line className='text-xl' />
// 			</Button>
// 		</>
// 	);

// 	return (
// 		<div className='flex flex-col min-h-screen'>
// 			<main className='flex-1 flex flex-col items-center justify-center'>
// 				<h1 className='mb-3 text-4xl font-bold text-foreground'>
// 					Welcome to Crayond&apos;s Monorepo Boilerplate
// 				</h1>

// 				<p className='mb-4 text-foreground/80 text-lg'>
// 					Start building your application with TurboRepo, Next.js, and NextUI
// 				</p>

// 				<Button color='primary' size='lg' className='font-semibold'>
// 					Get Started
// 				</Button>
// 			</main>
import { ButtonStyled } from '@core/ui/components';
import { StatusChip } from '@core/ui/components';
import { SearchBar } from '@core/ui/components';
import { TabBar } from '@core/ui/components';
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
			<div className='flex gap-4 py-3'>
				<StatusChip status='active' />
				<StatusChip status='in-call' />
				<StatusChip status='offline' />
				<SearchBar
					placeholder='Search ...'
					type='search'
					startContent={
						<SearchIcon className='text-gray-500 pointer-events-none' />
					}
					isClearable
				/>
			</div>
			<div className='flex gap-5 flex-row w-96'>
				<TabBar tabs={tabData} width={30} />
			</div>
		</div>
	);
}
