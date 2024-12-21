'use client';

import { IconButton, RatingChip } from '@core/ui/components';
import { useState } from 'react';
import {
	FilterIcon,
	HeartIcon,
	SortIcon,
} from '../../../../packages/ui/assets';

export default function Page() {
	const [like, setLike] = useState(true);
	return (
		<div className='flex flex-col min-h-screen bg-[#F7F9FF] mx-auto'>
			<RatingChip value={4.5} iconSize={18} />
			<IconButton
				isIconOnly={true}
				iconName={<SortIcon />}
				variant='bordered'
				color='default'
				text='filter'
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
