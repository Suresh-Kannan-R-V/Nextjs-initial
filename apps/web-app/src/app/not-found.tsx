import { routes } from '@/utils/routes';
import { Box, Link as JoyLink, Typography } from '@mui/joy';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '404 Page | NOT FOUND',
	description: "Oops! The page you're looking for couldn't be found",
	openGraph: {
		title: '404 Page | NOT FOUND',
		description: '',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
	},
};

export default function NotFound() {
	return (
		<Box
			sx={{
				minHeight: '69vh',
				display: 'grid',
				placeItems: 'center',
				px: 4,
			}}
		>
			<Box
				sx={{
					display: 'grid',
					gap: 3,
					textAlign: 'center',
				}}
			>
				<Typography
					level='h4'
					sx={{
						fontWeight: 'lg',
						color: 'neutral.500',
					}}
				>
					Oops! The page you&apos;re looking for couldn&apos;t be found.
				</Typography>

				<JoyLink
					component={Link}
					href={routes.home}
					sx={{
						mx: 'auto',
						my: 6,
						fontWeight: 'lg',
						fontSize: 'xl',
					}}
				>
					Return Home
				</JoyLink>
			</Box>
		</Box>
	);
}
