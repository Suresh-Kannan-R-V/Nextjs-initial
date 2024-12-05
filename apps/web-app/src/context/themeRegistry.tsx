'use client';
import theme from '@/lib/theme';
import NextAppDirEmotionCacheProvider from '@/lib/theme/emotionCache';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import type * as React from 'react';

export default function ThemeRegistry({
	children,
}: { children: React.ReactNode }) {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'app' }}>
			<CssVarsProvider theme={theme}>
				<CssBaseline />
				{children}
			</CssVarsProvider>
		</NextAppDirEmotionCacheProvider>
	);
}
