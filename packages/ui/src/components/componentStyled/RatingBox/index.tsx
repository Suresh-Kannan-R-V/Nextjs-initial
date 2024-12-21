'use client';

import { Chip } from '@nextui-org/react';
import { StarIcon } from 'assets/star';
interface ButtonProps {
	value: GLfloat;
	iconSize?: number;
}
export const RatingChip: React.FC<ButtonProps> = (props) => {
	return (
		<div className='flex gap-4 items-center'>
			<Chip
				color={
					props?.value >= 4
						? 'success'
						: props?.value >= 3
							? 'warning'
							: 'danger'
				}
				endContent={<StarIcon size={props?.iconSize ?? 19} strokeWidth={0} />}
				size='sm'
				style={{ padding: '0px', borderRadius: '0.25rem' }}
			>
				<p className='text-sm'>{props?.value ?? 0}</p>
			</Chip>
		</div>
	);
};
