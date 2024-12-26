'use client';
interface IconProps {
	height?: number;
	width?: number;
	fill?: string;
}
export const NewTabImg = ({ height = 16, width = 18, fill }: IconProps) => (
	<svg
		role='img'
		aria-label='image'
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M9.16663 4.1665H5.20829C3.94496 4.1665 2.91663 5.19484 2.91663 6.45817V14.7915C2.91663 16.0548 3.94496 17.0832 5.20829 17.0832H13.5416C14.805 17.0832 15.8333 16.0548 15.8333 14.7915V10.8332'
			stroke='#5978FF'
			stroke-width='1.5'
			stroke-miterlimit='10'
			stroke-linecap='round'
		/>
		<path
			d='M10 9.99984L17.0833 2.9165'
			stroke='#5978FF'
			stroke-width='1.5'
			stroke-miterlimit='10'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<path
			d='M11.6666 2.9165H17.0833V8.33317'
			stroke='#5978FF'
			stroke-width='1.5'
			stroke-miterlimit='10'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
