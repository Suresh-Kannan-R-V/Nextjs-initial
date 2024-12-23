'use client';
import { Button } from '@nextui-org/button';

interface ButtonProps {
	text?: string;
	width?: string;
	sidePadding?: string;
	onClick?: () => void;
	icon?: React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	variant?: 'solid' | 'flat' | 'bordered' | 'light' | 'faded';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	loading?: boolean;
	isExternal?: boolean;
	weight?: string;
	fontsize?: string;
}

export const ButtonStyled = ({
	text,
	width,
	sidePadding,
	onClick,
	icon,
	startIcon,
	endIcon,
	variant = 'bordered',
	size = 'md',
	disabled = false,
	loading = false,
	weight,
	fontsize,
}: ButtonProps) => {
	return (
		<div className='rounded-xl'>
			<Button
				onClick={onClick}
				radius='md'
				size={size}
				variant={variant}
				color='primary'
				className={`${width ? `w-[${width}]` : 'w-full'} relative font-medium border-1 ${
					variant === 'light'
						? 'border-none hover:bg-[#fff] focus:outline-none'
						: ''
				}`}
				isIconOnly={!!icon}
				disabled={disabled}
				startContent={!icon && startIcon}
				endContent={!icon && endIcon}
				isLoading={loading}
				spinner={
					<svg
						role='img'
						aria-label='loader'
						className='animate-spin h-5 w-5 absolute left-[35%]'
						fill='none'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							className='opacity-50'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'
						/>
						<path
							className='opacity-75'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
							fill='currentColor'
						/>
					</svg>
				}
			>
				<span className={`font-${weight} text-${fontsize}`}>
					{!loading ? icon || text : <span className='invisible'>{text}</span>}
				</span>
			</Button>
		</div>
	);
};
