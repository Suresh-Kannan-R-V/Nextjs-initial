'use client';

import { Star } from 'assets';

interface RatingRangeProps {
	value?: number;
}

export const ReviewStar = ({ value = 0 }: RatingRangeProps) => {
	return (
		<div className='flex gap-0'>
			{[...Array(5)].map((_, i) => {
				const starValue = i + 1;
				if (value >= starValue) {
					return <Star key={starValue} type='full' />;
				} else if (value >= starValue - 0.5) {
					return <Star key={starValue} type='half' />;
				} else {
					return <Star key={starValue} type='none' />;
				}
			})}
		</div>
	);
};
