'use client';

import { Star } from 'assets';

interface RatingRangeProps {
	id?: string;
	value?: 0 | 1 | 2 | 3 | 4 | 5;
	range?: number;
	width?: string;
	startype?: 'full' | 'half';
}

export const RatingRange = ({
	id,
	value,
	range = 1,
	width = '26.313rem',
	startype = 'full',
}: RatingRangeProps) => {
	return (
		<>
			<div className='h-[1.25rem] flex justify-start' style={{ width }} id={id}>
				<div className='flex'>
					<p className='font-normal text-background-900 text-sm min-w-2'>
						{value}
					</p>
					<div className='mt-0.5 mx-1.5'>
						{startype === 'full' ? <Star /> : <Star type='half' />}
					</div>
				</div>
				<div className='bg-background-200 mt-[0.438rem] w-[24.25rem] h-[0.375rem] rounded'>
					<div
						className='bg-success-900 max-w-[100%] min-w-1.5 h-full rounded-borderRadius4px'
						style={{ width: `${range}%` }}
					>
						{' '}
					</div>
				</div>
			</div>
		</>
	);
};
