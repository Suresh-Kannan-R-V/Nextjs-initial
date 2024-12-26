'use client';

import { Star } from 'assets';

interface ReviewStarProps {
	id?: string;
	value?: number;
}

const StarValue = ({
	value,
	starValue,
}: { value: number; starValue: number }) => {
	if (value >= starValue) {
		return 'full';
	}
	if (value >= starValue - 0.5) {
		return 'half';
	}
	return 'none';
};
export const ReviewStar = ({ id, value = 0 }: ReviewStarProps) => {
	return (
		<div className='flex gap-0' id={id}>
			{[...Array(5)].map((_, i) => {
				const starValue = i + 1;
				return <Star key={starValue} type={StarValue({ value, starValue })} />;
			})}
		</div>
	);
};
ReviewStar.displayName = 'ReviewStar';
