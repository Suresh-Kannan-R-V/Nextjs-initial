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
			colors: {
				status: {
					statusColor: {
						active: '#CBF2E0',
						inCall: '#FFDAD3',
						offline: '#E6E8E9',
					},
					textColor: {
						active: '#008545',
						inCall: '#DF3813',
						offline: '#4E585E',
					},
				},
				navbar: {
					...colors.slate,
					foreground: '#fff',
					DEFAULT: '#F7F7F7',
				},
			},
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
				ssans: ["'Manrope Variable', sans-serif"],
			},
			fontWeight: {
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
			},
			fontSize: {
				h1: ['4.375rem', { lineHeight: '4.375rem', letterSpacing: '0%' }],
				h2: ['3.875rem', { lineHeight: '3.875rem', letterSpacing: '0%' }],
				h3: ['3.375rem', { lineHeight: '3.375rem', letterSpacing: '0%' }],
				h4: ['2.625rem', { lineHeight: '2.625rem', letterSpacing: '0%' }],
				h5: ['2rem', { lineHeight: '2rem', letterSpacing: '0%' }],
				h6: ['1.625rem', { lineHeight: '1.625rem', letterSpacing: '0%' }],
				body1: ['1rem', { lineHeight: '1.375rem', letterSpacing: '0%' }],
				body2: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0%' }],
				footnote: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0%' }],
			},
			borderRadius: {
				borderRadius4px: '0.25rem',
				borderRadius7px: '0.45rem',

				borderRadius8px: '0.5rem',
				borderRadius10px: '0.625rem',
				borderRadius12px: '0.75rem',
				borderRadius16px: '1rem',
				borderRadius20px: '1.25rem',
				borderRadius24px: '1.5rem',
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
							'900': '#121214',
							'800': '#555555',
							'700': '#8D8D8D',
							'600': '#D9D9D9',
							'500': '#EBEBEB',
							'400': '#F5F5F5',
							'300': '#F9FAFB',
							'200': '#E0E0E0',
							'100': '#FAF7F7',
							'50': '#FFFFFF',
							DEFAULT: '#FFFFFF',
							foreground: '#121214',
						},
						foreground: {
							...colors.slate,
							'900': '#121214',
							'800': '#555555',
							'700': '#8D8D8D',
							'600': '#D9D9D9',
							'500': '#EBEBEB',
							'400': '#F5F5F5',
							'300': '#F9FAFB',
							'200': '#E0E0E0',
							'100': '#FAF7F7',
							'50': '#FFFFFF',
							DEFAULT: '#121214',
							foreground: '#121214',
						},
						primary: {
							...colors.blue,
							'50': '#F7F9FF',
							'200': '#DFF0F7',
							'500': '#5978FF',
							'800': '#077FB2',
							'900': '#0D1226',
							foreground: '#fff',
							DEFAULT: '#5978FF',
						},
						focus: {
							...colors.blue,
							foreground: '#fff',
							DEFAULT: colors.blue[600],
						},
						secondary: {
							...colors.orange,
							'50': '#FFF4E5',
							'100': '#F8F8F83D',
							'200': '#F8971F1F',
							'500': '#F8971F',
							'900': '#402708',
							foreground: '#fff',
							DEFAULT: '#F8971F',
						},
						success: {
							...colors.emerald,
							foreground: '#fff',
							'100': '#CBF2E0',
							'900': '#008545',
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
