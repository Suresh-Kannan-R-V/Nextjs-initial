'use client';
import { Button } from '@nextui-org/button';

interface ButtonProps {
	text?: string;
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
}

export const ButtonStyled = ({
	text,
	onClick,
	icon,
	startIcon,
	endIcon,
	variant = 'bordered',
	size = 'md',
	disabled = false,
	loading = false,
	weight,
}: ButtonProps) => {
	return (
		<div className='rounded-xl'>
			<Button
				onClick={onClick}
				radius='md'
				size={size}
				variant={variant}
				color='primary'
				className={`w-full border-1 ${variant === 'light' ? 'border-none hover:bg-[#fff] focus:outline-none' : ''}`}
				isIconOnly={!!icon}
				disabled={disabled}
				startContent={!icon && startIcon}
				endContent={!icon && endIcon}
				isLoading={loading}
				spinner={
					<svg
						role='img'
						aria-label='loader'
						className='animate-spin h-5 w-5 text-current'
						fill='none'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							className='opacity-25'
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
				<span className={`font-${weight}`}>{icon || text}</span>
			</Button>
		</div>
	);
};
