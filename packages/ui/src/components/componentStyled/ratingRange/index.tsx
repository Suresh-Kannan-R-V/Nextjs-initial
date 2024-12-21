'use client';

import { Star } from 'assets';

interface RatingRangeProps {
	value?: string;
	range?: string;
	width?: string;
	startype?: 'full' | 'half';
}

export const RatingRange = ({
	value,
	range = '1',
	width = '26.313rem',
	startype = 'full',
}: RatingRangeProps) => {
	return (
		<>
			<div className='h-[1.25rem] flex justify-start' style={{ width }}>
				<div className='flex'>
					<p className='font-normal text-[#333333] text-sm min-w-2'>{value}</p>
					<div className='mt-0.5 mx-1.5'>
						{startype === 'full' ? <Star /> : <Star type='half' />}
					</div>
				</div>
				<div className='bg-[#E0E0E0] mt-[0.438rem] w-[24.25rem] h-[0.375rem] rounded'>
					<div
						className='bg-[#008545] max-w-[100%] min-w-1.5 h-full rounded'
						style={{ width: `${range}%` }}
					>
						{' '}
					</div>
				</div>
			</div>
		</>
	);
};
