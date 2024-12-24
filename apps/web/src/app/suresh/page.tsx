'use client';
import {
	ButtonStyled,
	RatingRange,
	ReviewCard,
	ReviewStar,
} from '@core/ui/components';

export default function Page() {
	return (
		<div className='flex flex-col gap-0 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-0 flex-col'>
				<ButtonStyled text='hello' variant='bordered' loading width={8} />
				<RatingRange value='5' range='20' />
				<ReviewStar value={2.5} />
				<ReviewCard
					rating={3.5}
					name='Courtney Henry'
					date='2024-12-20T10:00:00Z'
					comment=' Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua'
				/>
			</div>
		</div>
	);
}
