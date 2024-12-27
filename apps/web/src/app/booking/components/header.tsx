import { FilterIcon, SearchIcon, SortIcon } from '@core/ui/assets';
import { IconButton, SearchBar } from '@core/ui/components';
import React from 'react';

export function Header() {
	return (
		<>
			<div className='w-full min-h-10 flex justify-between items-center mb-4'>
				<h1 className='text-body1 font-semibold text-background-900'>
					My Bookings
				</h1>
				<div className='w-auto h-auto gap-3 flex'>
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
						text='Filters'
					/>
				</div>
			</div>
		</>
	);
}
