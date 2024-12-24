interface IconInterface {
	width?: number;
	height?: number;
	fill?: string;
}

export const RightArrow: React.FC<IconInterface> = () => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		width='12'
		height='12'
		viewBox='0 0 12 12'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M3 6.0046C3 6.12448 3.04976 6.23924 3.13828 6.32309L8.21113 11.1236C8.39252 11.2951 8.68284 11.2917 8.85988 11.1158C9.03669 10.9401 9.03302 10.6583 8.85185 10.4868L4.11542 6.00482L8.86171 1.51326C9.04311 1.34156 9.04632 1.05977 8.86974 0.884287C8.69293 0.708361 8.40238 0.704802 8.22099 0.876503L3.13828 5.68611C3.04976 5.76996 3 5.88472 3 6.0046Z'
			fill='#121214'
			stroke='#121214'
			stroke-width='0.75'
		/>
	</svg>
);
