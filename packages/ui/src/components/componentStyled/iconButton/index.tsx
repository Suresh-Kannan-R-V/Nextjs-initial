'use client';

import { Button } from '@nextui-org/react';
interface ButtonProps {
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
	variant?:
		| 'light'
		| 'solid'
		| 'bordered'
		| 'shadow'
		| 'flat'
		| 'ghost'
		| 'faded';
	// |'nobackground';
	onPress?: () => void;
	size?: string;
}
// putt radius for i t
export const IconButton: React.FC<ButtonProps> = (props) => {
	return (
		<div className='flex gap-4 items-center'>
			<Button
				isIconOnly={props?.isIconOnly}
				variant={props?.variant}
				onPress={props?.onPress}
				style={
					props?.isBackground === false
						? {
								background: 'none',
								border: 'none',
								borderRadius: '50%',
							}
						: props?.color === 'default'
							? {
									borderColor: '#EBEBEB',
									color: 'white',
									borderRadius: '0.625rem',
								}
							: { borderRadius: '0.625rem' }
				}
				size={props?.size === 'md' ? 'md' : props?.size === 'sm' ? 'sm' : 'lg'}
			>
				{props?.iconName}
				{!props?.isIconOnly && props?.text && (
					<span className='text-sm font-semibold text-gray-600 font-normal capitalize'>
						{props?.text}
					</span>
				)}
			</Button>
		</div>
	);
};
