'use client';
import { RatingRange, ReviewStar } from '@core/ui/components';

export default function Page() {
	return (
		<div className='flex flex-col gap-0 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-0 flex-col'>
				<RatingRange value='5' range='20' />
				<RatingRange value='4' range='80' />
				<RatingRange value='3.5' range='60' />
				<RatingRange value='2' range='30' />
				<RatingRange value='1' range='70' />
				<RatingRange value='4.5' range='80' width='8rem' />
				<RatingRange value='5' range='20' startype='half' />
				<RatingRange value='4' range='80' startype='half' />
				<RatingRange value='3.5' range='60' startype='half' />
				<RatingRange value='2' range='30' startype='half' />
				<RatingRange value='1' range='70' startype='half' />
				<ReviewStar value={2.5} />
			</div>
		</div>
	);
}
