'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { IsClientCtxProvider } from './isClient';

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<IsClientCtxProvider>
			<NuqsAdapter>
				<NextUIProvider navigate={router.push}>
					<IsClientCtxProvider>{children}</IsClientCtxProvider>
				</NextUIProvider>
			</NuqsAdapter>
		</IsClientCtxProvider>
	);
}
