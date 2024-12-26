'use client';
import { FilterIcon, SearchIcon, SortIcon } from '@core/ui/assets';
import {
	ButtonStyled,
	IconButton,
	RatingRange,
	ReviewCard,
	ReviewStar,
	SearchBar,
} from '@core/ui/components';

export default function Page() {
	return (
		<div className='min-h-screen bg-background-50 max-w-full p-5'>
			<main className='flex flex-col items-center justify-center'>
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
			</main>
		</div>
	);
}
