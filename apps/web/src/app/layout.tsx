import { Providers } from '@/context';
import { ButtonStyled, Navbar, SideNavBar } from '@core/ui/components';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Logoimg } from '@core/ui/assets';

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope',
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#7c3aed',
};

export const metadata: Metadata = {
	title: 'Boilerplate Next JS',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${manrope.className} font-semibold text-foreground-900`}
			>
				<Navbar />
				<div className=' flex flex-row'>
					<SideNavBar />

					<div className='flex-1'>
						<Providers>{children}</Providers>
					</div>
				</div>
			</body>
		</html>
	);
}
