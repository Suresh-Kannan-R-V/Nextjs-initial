'use client';
import { Button } from '@nextui-org/button';
import { Loader } from 'assets';
import type { JSXElementConstructor, ReactElement } from 'react';

interface ButtonProps {
	id?: string;
	text?: string;
	width?: string | number;
	padding?: string;
	onPress?: () => void;
	icon?: React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	variant?: 'solid' | 'flat' | 'bordered' | 'light';
	size?: 'sm' | 'md' | 'lg';
	radius?: 'sm' | 'md' | 'lg' | 'full';
	color?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger';
	className?: string;
	disabled?: boolean;
	loading?: boolean;
	isExternal?: boolean;
	weight?: 'regular' | 'medium' | 'semibold' | 'bold';
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
	radius = 'md',
	color = 'primary',
	className,
	disabled = false,
	loading = false,
	weight = 'medium',
	fontsize,
}: ButtonProps) => {
	return (
		<div className='rounded-xl' id={id}>
			<Button
				onPress={onPress}
				radius={radius}
				size={size}
				variant={variant}
				color={color}
				className={`relative font-medium border-1 ${
					variant === 'light' &&
					'border-none hover:bg-background-50 focus:outline-none'
				} ${className}`}
				style={{
					width: width && `${width}rem`,
					padding: padding && padding,
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
