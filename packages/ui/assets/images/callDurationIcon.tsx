'use client';

interface IconProps {
	width?: number;
	height?: number;
	fill?: string;
}

export const CallDurationIcon: React.FC<IconProps> = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-label='image'
		>
			<path
				d='M18.25 5.5V3.75H5.75V5.5C5.75 8.3435 7.651 10.7395 10.25 11.497V12.503C7.651 13.2605 5.75 15.6565 5.75 18.5V20.25H18.25V18.5C18.25 15.6565 16.349 13.2605 13.75 12.503V11.497C16.349 10.7395 18.25 8.3435 18.25 5.5Z'
				stroke='#E05C1C'
				stroke-width='1.5'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M4.75 3.75H19.25'
				stroke='#E05C1C'
				stroke-width='1.5'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M4.75 20.25H19.25'
				stroke='#E05C1C'
				stroke-width='1.5'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M15.4605 6C15.7635 6 16.0025 6.2685 15.96 6.5685C15.684 8.5085 14.016 10 12 10C9.98401 10 8.31601 8.5085 8.04001 6.5685C7.99751 6.2685 8.23651 6 8.53951 6H15.4605Z'
				fill='#E05C1C'
			/>
		</svg>
	);
};
