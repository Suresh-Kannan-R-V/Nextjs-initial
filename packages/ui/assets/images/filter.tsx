import type React from 'react';

interface SvgIconProps {
	width?: number | string;
	height?: number | string;
	fill?: string;
	isfilled?: boolean;
	size?: number;
}

export const FilterIcon = ({
	width,
	height,
	size,
	fill = '#555555',
	isfilled = true,
}: SvgIconProps) => {
	return (
		<svg
			width={size ?? width ?? '16'}
			height={size ?? height ?? '16'}
			viewBox='0 0 12 12'
			fill={isfilled ? fill : 'none'}
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Filter</title>
			<path
				d='M0.833333 0C0.378802 0 0 0.378802 0 0.833333V1.86328C0 2.62883 0.351826 3.35295 0.953125 3.82682L4.33333 6.49023V11.5C4.33338 11.5918 4.35871 11.6819 4.40654 11.7602C4.45437 11.8386 4.52286 11.9023 4.6045 11.9443C4.68613 11.9864 4.77777 12.0051 4.86935 11.9985C4.96094 11.9919 5.04894 11.9602 5.1237 11.9069L7.45703 10.2402C7.52184 10.194 7.57468 10.133 7.61114 10.0622C7.6476 9.9914 7.66664 9.91295 7.66667 9.83333V6.48958L11.0469 3.82682C11.6482 3.35295 12 2.62883 12 1.86328V0.833333C12 0.378802 11.6212 0 11.1667 0H0.833333ZM1 1H11V1.86328C11 2.32306 10.7898 2.75623 10.4284 3.04102L7.0957 5.66667H4.9043L1.57161 3.04102C1.21025 2.75623 1 2.32306 1 1.86328V1ZM5.33333 6.66667H6.66667V9.57617L5.33333 10.5286V6.66667Z'
				fill={fill}
				strokeWidth={1}
			/>
		</svg>
	);
};
