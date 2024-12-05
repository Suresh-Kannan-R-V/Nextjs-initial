import { extendTheme } from '@mui/joy/styles';
import { Manrope, Source_Code_Pro } from 'next/font/google';

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope',
});

const sourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	adjustFontFallback: false, // prevent NextJS from adding its own fallback font
	fallback: [
		// the default theme's fallback for monospace fonts
		'ui-monospace',
		'SFMono-Regular',
		'Menlo',
		'Monaco',
		'Consolas',
		'Liberation Mono',
		'Courier New',
		'monospace',
	],
	display: 'swap',
});

const theme = extendTheme({
	fontFamily: {
		body: manrope.style.fontFamily,
		display: manrope.style.fontFamily,
		code: sourceCodePro.style.fontFamily,
	},
	components: {
		JoyButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.color === 'primary' && {
						backgroundColor: '#4338ca',
					}),
				}),
			},
		},
	},
});

export default theme;
