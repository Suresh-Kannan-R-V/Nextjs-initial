import type { Config } from 'tailwindcss';

export default {
	content: ['src/**/*.{ts,tsx}'],
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
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} satisfies Config;
