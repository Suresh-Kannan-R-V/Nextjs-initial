'use client';
import { Button } from '@nextui-org/button';
import { Loader } from 'assets';

interface ButtonProps {
	id?: string;
	text?: string;
	width?: number;
	padding?: string;
	onPress?: () => void;
	icon?: React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	variant: 'solid' | 'flat' | 'bordered' | 'light';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	loading?: boolean;
	isExternal?: boolean;
}

export const ButtonStyled = ({
	id,
	text,
	width,
	padding,
	onPress,
	icon,
	startIcon,
	endIcon,
	variant = 'bordered',
	size = 'md',
	disabled = false,
	loading = false,
}: ButtonProps) => {
	return (
		<div className='rounded-xl' id={id}>
			<Button
				onPress={onPress}
				radius='md'
				size={size}
				variant={variant}
				color='primary'
				className={`relative font-medium border-1 ${
					variant === 'light'
						? 'border-none hover:bg-background-50 focus:outline-none'
						: ''
				}`}
				style={{
					width: width ? `${width}rem` : 'auto',
					padding: padding ? `${padding}` : 'auto',
				}}
				isIconOnly={!!icon}
				disabled={disabled}
				startContent={!icon && startIcon}
				endContent={!icon && endIcon}
				isLoading={loading}
				spinner={<Loader />}
			>
				{!loading ? icon || text : <span className='invisible'>{text}</span>}
			</Button>
		</div>
	);
};
