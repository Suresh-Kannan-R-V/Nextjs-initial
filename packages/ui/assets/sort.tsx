import type React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	fill?: string;
	filled?: boolean;
	size?: number;
	height?: number;
	width?: number;
	stroke?: string;
	strokeWidth?: number;
}

export const SortIcon: React.FC<IconProps> = ({
	fill,
	filled = false,
	size,
	height,
	width,
	stroke,
	strokeWidth,
	...props
}) => {
	return (
		<svg
			width={size ?? width ?? 16}
			height={size ?? height ?? 16}
			viewBox='0 0 16 16'
			fill={filled ? fill : 'none'}
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Filter</title>
			<path
				d='M7.21073 12.1041C7.02005 11.9169 6.70956 11.9093 6.52301 12.1061L5.0934 13.5093V4.88889C5.0934 4.61453 4.87641 4.40556 4.60377 4.40556C4.33113 4.40556 4.11415 4.61453 4.11415 4.88889V13.5093L2.68243 12.1041C2.49168 11.9168 2.18104 11.9093 1.99451 12.1063C1.80457 12.2952 1.79762 12.6031 1.99892 12.7869L4.26097 15.0071C4.35728 15.1016 4.48572 15.15 4.60377 15.15C4.72183 15.15 4.85026 15.1016 4.94658 15.0071L7.21073 12.7848C7.40649 12.5927 7.40649 12.2962 7.21073 12.1041ZM14.0032 3.21517L11.739 0.992947C11.5483 0.805793 11.2379 0.798235 11.0513 0.995017L8.78927 3.21517C8.59702 3.40386 8.58925 3.71366 8.79159 3.8982C8.98247 4.08315 9.2912 4.08986 9.47699 3.89387L10.9066 2.49073V11.1111C10.9066 11.3855 11.1236 11.5944 11.3962 11.5944C11.6689 11.5944 11.8858 11.3855 11.8858 11.1111V2.49073L13.3176 3.89594C13.4139 3.99047 13.5423 4.03889 13.6604 4.03889C13.7784 4.03889 13.9069 3.99047 14.0032 3.89594C14.1989 3.70381 14.1989 3.4073 14.0032 3.21517Z'
				fill={fill ?? '#555555'}
				stroke={stroke ?? '#555555'}
				strokeWidth={strokeWidth ?? 1}
			/>
		</svg>
	);
};
