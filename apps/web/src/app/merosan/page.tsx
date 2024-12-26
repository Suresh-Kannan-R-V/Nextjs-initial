'use client';

import { FilterIcon, HeartIcon, SortIcon } from '@core/ui/assets';
import { ArrowTitle, IconButton, RatingChip } from '@core/ui/components';
import { useState } from 'react';

export default function Page() {
	const [like, setLike] = useState(true);
	const sampleData = [
		'sample 1',
		'sample 2',
		'sample 3',
		'sample 4',
		'sample 5',
		'sample 6',
		'sample 7',
		'sample 8',
		'sample 9',
		'sample 10',
		'sample 11',
		'sample 12',
		'sample 13',
		'sample 14',
		'sample 15',
	];

	return (
		<div className='flex flex-col min-h-screen bg-[#F7F9FF] gap-4'>
			<RatingChip value={4} />
			<RatingChip value={3} isIconStart />
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
			<ArrowTitle title='Available Slots' data={sampleData} count={3} />
		</div>
	);
}
