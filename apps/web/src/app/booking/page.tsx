'use client';

import { Bookingimg, FilterIcon, SearchIcon, SortIcon } from '@core/ui/assets';
import { ButtonStyled, IconButton, SearchBar, Tag } from '@core/ui/components';
import Image from 'next/image';
import React from 'react';
import { CompletedCalls, Header, UpcomingCalls } from './components';

export default function Page() {
	const [switchPage, setSwitchPage] = React.useState('Upcoming_Calls');

	const upComingCallData = [
		{
			id: 1,
			name: 'Nancy John Sarikha',
			startTime: '2024-12-26T01:00:00Z',
			endTime: '2024-12-26T02:00:00Z',
			status: false,
			details: 'Discussion Regarding Portfolio Management',
			image: 'https://nextui.org/images/album-cover.png',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			status: true,
			details: 'Market Analysis Discussion',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			status: true,
			details: 'Market Analysis Discussion',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			status: true,
			details: 'Market Analysis Discussion',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			status: true,
			details: 'Market Analysis Discussion',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			status: true,
			details: 'Market Analysis Discussion',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			status: true,
			details: 'Market Analysis Discussion',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			status: true,
			details: 'Market Analysis Discussion',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
		},
	];
	const completedCallsData = [
		{
			id: 1,
			name: 'Nancy John Sarikha',
			startTime: '2024-12-26T01:00:00Z',
			endTime: '2024-12-26T02:00:00Z',
			image: 'https://nextui.org/images/album-cover.png',
			Credits: '50',
			Link: 'https://nextui.org/images',
		},
		{
			id: 2,
			name: 'John Doe',
			startTime: '2024-12-28T11:00:00Z',
			endTime: '2024-12-28T11:30:00Z',
			image:
				'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
			Credits: '100',
			Link: 'https://nextui.org/images',
		},
	];

	const handleButtons = (page: string) => {
		setSwitchPage(page);
	};

	const component = {
		Upcoming_Calls: <UpcomingCalls upComingCallData={upComingCallData} />,
		Completed_Calls: <CompletedCalls completedCallsData={completedCallsData} />,
	};

	return (
		<div className='min-h-screen bg-background-50 max-w-full p-5'>
			<main>
				<Header />
				<div className='w-full min-h-10 flex items-center gap-2'>
					<ButtonStyled
						radius='full'
						text='Upcoming Calls'
						color='default'
						onPress={() => handleButtons('Upcoming_Calls')}
						className={`${
							switchPage === 'Upcoming_Calls' &&
							'bg-secondary-50 text-secondary-900 border-secondary-500'
						}`}
					/>
					<ButtonStyled
						radius='full'
						text='Completed Calls'
						color='default'
						onPress={() => handleButtons('Completed_Calls')}
						className={`${
							switchPage === 'Completed_Calls' &&
							'bg-secondary-50 text-secondary-900 border-secondary-500'
						}`}
					/>
				</div>
				<div className='w-auto h-full mt-3 p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{switchPage === 'Upcoming_Calls'
						? component.Upcoming_Calls
						: component.Completed_Calls}
				</div>
			</main>
		</div>
	);
}
