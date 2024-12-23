'use client';

import { Button } from '@nextui-org/react';
interface ButtonProps {
	id?: string;
	iconName: React.ReactNode;
	color?:
		| 'success'
		| 'primary'
		| 'secondary'
		| 'danger'
		| 'warning'
		| 'default';
	text?: string;
	isIconOnly?: boolean;
	isBackground?: boolean;
	isCirclular?: boolean;
	variant?:
		| 'light'
		| 'solid'
		| 'bordered'
		| 'shadow'
		| 'flat'
		| 'ghost'
		| 'faded';
	onPress?: () => void;
	size?: 'md' | 'sm' | 'lg';
}
export const IconButton: React.FC<ButtonProps> = (props) => {
	const {
		id,
		isIconOnly,
		variant,
		onPress,
		color,
		isCirclular,
		isBackground,
		iconName,
		text,
		size,
	} = props;
	return (
		<div className='flex gap-4 items-center' id={id}>
			<Button
				isIconOnly={isIconOnly}
				variant={variant}
				onPress={onPress}
				color={color}
				className={
					isBackground === false
						? 'bg-transparent border-none rounded-full'
						: isIconOnly && isCirclular
							? 'rounded-full '
							: isIconOnly
								? 'rounded-borderRadius10px border-foreground-500'
								: color === 'default'
									? 'border-foreground-500 rounded-borderRadius10px'
									: 'rounded-borderRadius10px'
				}
				size={size}
			>
				{iconName}
				{!isIconOnly && text && (
					<span className='body2 regular text-foreground-800 capitalize'>
						{text}
					</span>
				)}
			</Button>
		</div>
	);
};
