import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import * as colors from 'tailwindcss/colors';

export default {
	content: [
		'src/**/*.{ts,tsx}',
		'../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'../../node_modules/@core/ui/src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			animation: {
				popIn: 'appearance-in 300ms ease-out normal both',
				popOut: 'appearance-out 60ms ease-in normal both',
			},
			keyframes: {
				popIn: {
					'0%, 60%': {
						opacity: '0.75',
						/* Avoid blurriness */
						backfaceVisibility: 'hidden',
						transform: 'translateZ(0)  scale(0.95)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateZ(0) scale(1)',
					},
				},
				popOut: {
					'0%': {
						opacity: '1',
						transform: 'scale(1)',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0.85)',
					},
				},
				bounce: {
					'0%, 100%': {
						transform: 'translateY(-30%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
			fontFamily: {
				sans: ["'Manrope Variable', sans-serif"],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			prefix: 'core', // prefix for themes variables
			defaultTheme: 'light', // default theme from the themes object
			defaultExtendTheme: 'light', // default theme to extend on custom themes
			themes: {
				light: {
					layout: {
						boxShadow: {
							small: '0px 0px 5px 1px #efefef',
						},
					},
					colors: {
						default: {
							...colors.slate,
							DEFAULT: colors.slate[100],
							foreground: colors.slate[900],
						},
						content4: {
							...colors.slate,
							DEFAULT: colors.slate[200],
							foreground: colors.slate[900],
						},
						content3: {
							...colors.slate,
							DEFAULT: colors.slate[100],
							foreground: colors.slate[900],
						},
						background: {
							...colors.slate,
							DEFAULT: colors.white,
							foreground: colors.slate[900],
						},
						foreground: {
							...colors.slate,
							DEFAULT: colors.slate[900],
						},
						primary: {
							...colors.blue,
							foreground: '#fff',
							DEFAULT: colors.blue[600],
						},
						focus: {
							...colors.blue,
							foreground: '#fff',
							DEFAULT: colors.blue[600],
						},
						secondary: {
							...colors.orange,
							foreground: '#fff',
							DEFAULT: colors.orange[500],
						},
						success: {
							...colors.emerald,
							foreground: '#fff',
							DEFAULT: colors.emerald[600],
						},
						warning: {
							...colors.amber,
							foreground: '#fff',
							DEFAULT: colors.amber[500],
						},
						danger: {
							...colors.red,
							foreground: '#fff',
							DEFAULT: colors.red[500],
						},
					},
				},
				dark: {
					layout: {},
					colors: {},
				},
			},
		}),
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
	],
} satisfies Config;
