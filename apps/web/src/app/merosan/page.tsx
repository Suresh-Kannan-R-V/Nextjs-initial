'use client';

import { FilterIcon, HeartIcon, SortIcon } from '@core/ui/assets';
import { IconButton, RatingChip } from '@core/ui/components';
import { useState } from 'react';

export default function Page() {
	const [like, setLike] = useState(true);

	return (
		<div className='flex flex-col min-h-screen bg-[#F7F9FF] mx-auto'>
			<RatingChip value={5} />
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
				text='filter'
			/>
			<IconButton
				iconName={<HeartIcon filled={like} />}
				isBackground={false}
				isIconOnly={true}
				onPress={() => {
					setLike(!like);
				}}
			/>
		</div>
	);
}
