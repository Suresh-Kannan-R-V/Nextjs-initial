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
	color?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger';
	disabled?: boolean;
	loading?: boolean;
	isExternal?: boolean;
	weight?: string;
	fontsize?: string;
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
	color = 'primary',
	disabled = false,
	loading = false,
	weight,
	fontsize,
}: ButtonProps) => {
	return (
		<div className='rounded-xl' id={id}>
			<Button
				onPress={onPress}
				radius='md'
				size={size}
				variant={variant}
				color={color}
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
				<span className={`font-${weight} text-${fontsize}`}>
					{!loading ? icon || text : <span className='invisible'>{text}</span>}
				</span>
			</Button>
		</div>
	);
};

ButtonStyled.displayName = 'ButtonStyled';
