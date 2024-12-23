'use client';

import { Avatar } from '@nextui-org/avatar';
import { Card } from '@nextui-org/card';
import { formatDistanceToNow } from 'date-fns';
import { ReviewStar } from '../reviewStar';

interface ReviewCardProps {
	id?: string;
	image?: string;
	name?: string;
	rating?: number;
	date?: string;
	comment?: string;
}

export const ReviewCard = ({
	id,
	image,
	name,
	rating,
	date,
	comment,
}: ReviewCardProps) => {
	const relativeTime = date
		? formatDistanceToNow(new Date(date), { addSuffix: true })
		: '';

	return (
		<Card
			id={id}
			className='h-[7.563rem] w-[42.25rem] shadow-none rounded-none border-b-1 bg-background-50 text-background-500'
		>
			<div className='w-full h-24 flex flex-col gap-2'>
				<div className='h-[2.75rem] flex'>
					<Avatar src={image} className='text-background-600 w-[2.75rem]' />
					<div className=' w-full ml-2 gap-1 flex flex-col'>
						<h3 className='h-5 font-medium text-body2 text-background-900'>
							{name}
						</h3>
						<div className='flex justify-between h-5'>
							<ReviewStar value={rating} />
							<p className='text-body2 font-regular text-background-700'>
								{relativeTime}
							</p>
						</div>
					</div>
				</div>
				<p className='text-body2 font-regular text-background-700'>{comment}</p>
			</div>
		</Card>
	);
};
