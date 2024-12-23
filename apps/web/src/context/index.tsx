'use client';

import { store } from '@/store';
import { NextUIProvider } from '@nextui-org/react';
import { registerLicense } from '@syncfusion/ej2-base';
import { useRouter } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Provider as ReduxToolKitProvider } from 'react-redux';
import { IsClientCtxProvider } from './isClient';

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	registerLicense(
		'Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf0x0R3xbf1x1ZFZMZV9bRHBPMyBoS35RckRhW3xedHRVQmhfVUZy',
	);

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
