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
				size='sm'
				style={{ borderRadius: '0.25rem', width: '55px' }}
			>
				<div className='flex gap-1 items-center justify-center'>
					<p className='text-sm font-medium text-xs'>
						{props?.value >= 5 ? 5 : Number.parseFloat(props?.value.toFixed(1))}
					</p>
					<StarIcon size={props?.iconSize ?? 16} strokeWidth={0} />
				</div>
			</Chip>
		</div>
	);
};
