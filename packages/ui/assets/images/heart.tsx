import type React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	fill?: string;
	filled?: boolean;
	size?: number;
	height?: number;
	width?: number;
	strokeWidth?: number;
}

export const HeartIcon = ({
	fill = '#000',
	filled,
	size,
	height,
	width,
	strokeWidth,
	...props
}: IconProps) => {
	return (
		<svg
			fill={filled ? '#DF3813' : '#C0C0C0'}
			height={size || height || 24}
			viewBox='0 0 24 24'
			width={size || width || 24}
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Heart</title>
			<path
				d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
				stroke={filled ? '#DF3813' : '#C0C0C0'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth ?? 1.5}
			/>
		</svg>
	);
};
