interface IconInterface {
	width?: number;
	height?: number;
	fill?: string;
}

export const Logoimg: React.FC<IconInterface> = () => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		width='41'
		height='32'
		viewBox='0 0 41 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clip-path='url(#clip0_251_6063)'>
			<path
				d='M13.4913 1.64062H30.7314L18.0565 20.4902H0.816406L13.4913 1.64062Z'
				fill='#5978FF'
			/>
			<path
				d='M14.2452 22.2361L9.33594 29.5371H27.3938L40.0687 10.6875H26.7409L18.9752 22.2361H14.2452Z'
				fill='#F8971F'
			/>
		</g>
		<defs>
			<clipPath id='clip0_251_6063'>
				<rect width='40.8889' height='32' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
