'use client';
import image1 from '@core/ui/asserts/download.jpeg';
import {
	FilterIcon,
	SearchIcon,
	SortIcon,
	Thumbnailimg,
} from '@core/ui/assets';
import {
	ButtonStyled,
	IconButton,
	Logo,
	RatingRange,
	ReviewCard,
	ReviewStar,
	SearchBar,
	TabBar,
	Tag,
} from '@core/ui/components';
import { Card, Chip } from '@nextui-org/react';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';

const Timecalsulation = ({
	status,
	date,
}: { status: boolean; date: string }) => {
	const relativeTime = formatDistanceToNow(new Date(date), { addSuffix: true });
	const numericValue = formatDistanceToNow(new Date(date));
	if (status) {
		return 'Advisor Requested for reschedule';
	}

	if (numericValue < '59') {
		return `Upcoming ${relativeTime}`;
	}
	return relativeTime;
};

export default function Page() {
	const [switchpage, setswitchpage] = React.useState('Upcoming_Calls');

	const handleButtons = (page: string) => {
		setswitchpage(page);
	};

	const status = false;
	const date = '2024-12-26T02:50:00Z';

	// const component = {
	// 	Upcoming_Calls: <Upcommi />,
	// 	completer: <Completeed />,
	// };
	return (
		<div className='min-h-screen bg-background-50 max-w-full p-5'>
			<main>
				<div className='w-full min-h-10 flex justify-between items-center'>
					<h1 className='text-body1 font-semibold text-background-900'>
						My Bookings
					</h1>
					<div className=' w-auto h-auto gap-3 flex'>
						<SearchBar
							placeholder='Search'
							type='search'
							startContent={<SearchIcon />}
						/>
						<IconButton
							isIconOnly={true}
							iconName={<SortIcon fill='warning' />}
							variant='bordered'
						/>
						<IconButton
							isIconOnly={false}
							iconName={<FilterIcon />}
							variant='bordered'
							color='default'
							text='filters'
						/>
					</div>
				</div>
				<div className=' w-full min-h-10 flex items-center gap-2'>
					<ButtonStyled
						radius='full'
						text='Upcoming Calls'
						color='default'
						onPress={() => handleButtons('Upcoming_Calls')}
						className={`${switchpage === 'Upcoming_Calls' && 'bg-secondary-50 text-secondary-900 border-secondary-500'}`}
					/>
					<ButtonStyled
						radius='full'
						text='Completed Calls'
						color='default'
						onPress={() => handleButtons('Completed_Calls')}
						className={`${switchpage === 'Completed_Calls' && 'bg-secondary-50 text-secondary-900 border-secondary-500'}`}
					/>
				</div>
				<div className='bg-red-500 w-auto h-full mt-3 p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{switchpage === 'Upcoming_Calls' ? (
						<>
							<Card className='bg-white min-h-[23.625rem] grid2-item p-2 '>
								<div className='bg-gradient-to-r from-[#5978FF3D] to-[#F8971F3D] rounded-t-borderRadius12px w-full h-20 relative'>
									<div className='w-20 h-full rounded-borderRadius12px absolute bg-black top-11 left-5'>
										<Logo image={<Thumbnailimg />} />
									</div>
									<div
										className={`${status ? 'text-red-500' : 'text-[#383E54]'} `}
									>
										{/* <Chip
											radius='sm'
											className='text-footnote font-medium bg-white absolute top-3 right-3'
											>
											{Timecalsulation({ status, date })}
											</Chip> */}
										<Tag
											name={Timecalsulation({ status, date })}
											position='absolute'
											right='0.75rem'
											top='0.75rem'
										/>
									</div>
								</div>
							</Card>
						</>
					) : null}
				</div>
			</main>
		</div>
	);
}
