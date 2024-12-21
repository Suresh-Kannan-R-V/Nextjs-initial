import { Providers } from '@/context';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ButtonStyled, InfoCard, Navbar, Slotcard } from '@core/ui/components';
import { Button } from '@nextui-org/button';
import { RiNotification3Line, RiUser3Line } from 'react-icons/ri';
import { Tag } from '../../../../packages/ui/src/components';

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
const slotData = {
	day: 'SAT',
	date: 'Today',
	no_of_slots: 3,
	is_time: false,
	time: '9:00 AM',
};

const InfoData = {
	date: '29 Nov 2024',
	time: '09:20 AM',
};
const namingData = {
	name: 'Top Rated',
};

export const metadata: Metadata = {
	title: 'Boilerplate Next JS',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const endContent = (
		<>
			{/* </ButtonStyled> */}
			<Button
				isIconOnly
				variant='light'
				className='text-foreground'
				radius='full'
			>
				<RiUser3Line className='text-xl' />
			</Button>
		</>
	);
	return (
		<html lang='en'>
			<body
				className={`${manrope.className} font-semibold text-foreground-900`}
			>
				{/* <Navbar title='NextJS Project' endContent={endContent} /> */}
				<Slotcard data={slotData} />
				<InfoCard data={InfoData} />
				<Tag data={namingData} />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
