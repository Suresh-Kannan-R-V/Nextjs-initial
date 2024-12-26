'use client';

import { Chip } from '@nextui-org/react';
import { StarIcon } from 'assets/images/star';
interface ButtonProps {
	id?: string;
	value: GLfloat;
	iconSize?: number;
	position?: string;
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
	zIndex?: number;
	isIconStart?: boolean;
}
export const RatingChip: React.FC<ButtonProps> = (props) => {
	const {
		id,
		value,
		iconSize,
		position,
		top,
		left,
		right,
		bottom,
		zIndex,
		isIconStart,
	} = props;

	return (
		<div
			className={`flex gap-4 items-center ${position}`}
			id={id}
			style={{
				zIndex: zIndex || undefined,
				top: top || undefined,
				left: left || undefined,
				right: right || undefined,
				bottom: bottom || undefined,
			}}
		>
			<Chip
				color={
					value >= 4 ? 'success' : props?.value >= 3 ? 'warning' : 'danger'
				}
				size='sm'
				className='rounded'
			>
				<div className='flex gap-1 items-center justify-center'>
					{isIconStart && <StarIcon size={iconSize ?? 16} strokeWidth={0} />}
					<p className='medium footnote'>
						{value >= 5
							? 5
							: value <= 0
								? 0
								: Number.parseFloat(value.toFixed(1))}
					</p>
					{!isIconStart && <StarIcon size={iconSize ?? 16} strokeWidth={0} />}
				</div>
			</Chip>
		</div>
	);
};
