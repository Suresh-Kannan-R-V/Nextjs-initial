'use client';

import { store } from '@/store';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Provider as ReduxToolKitProvider } from 'react-redux';
import { IsClientCtxProvider } from './isClient';

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<IsClientCtxProvider>
			<NuqsAdapter>
				<NextUIProvider navigate={router.push}>
					<IsClientCtxProvider>
						<ReduxToolKitProvider store={store}>
							{children}
						</ReduxToolKitProvider>
					</IsClientCtxProvider>
				</NextUIProvider>
			</NuqsAdapter>
		</IsClientCtxProvider>
	);
}
