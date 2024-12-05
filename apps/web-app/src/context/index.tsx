'use client';

import { IsClientCtxProvider } from './isClient';
import ThemeRegistry from './themeRegistry';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<IsClientCtxProvider>
			<ThemeRegistry>{children}</ThemeRegistry>
		</IsClientCtxProvider>
	);
}
