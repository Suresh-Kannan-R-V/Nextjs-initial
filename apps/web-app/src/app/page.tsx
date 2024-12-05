import { Footer, Navbar } from '@core/ui/components';
import { Box, Button, IconButton, Typography } from '@mui/joy';
import { RiNotification3Line, RiUser3Line } from 'react-icons/ri';

export default function Page() {
	const endContent = (
		<>
			<IconButton variant='plain' color='neutral'>
				<RiNotification3Line size={20} />
			</IconButton>
			<IconButton variant='plain' color='neutral'>
				<RiUser3Line size={20} />
			</IconButton>
		</>
	);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<Navbar title='NextJS Project' endContent={endContent} />
			<Box
				component='main'
				sx={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					level='h1'
					sx={{
						mb: 3,
						fontWeight: 'lg',
					}}
				>
					Welcome to Crayond&apos;s Monorepo Boilerplate
				</Typography>

				<Typography
					sx={{
						mb: 4,
					}}
				>
					Start building your application with TurboRepo, Next.js, and MUI Joy
				</Typography>

				<Button>Get Started</Button>
			</Box>
			<Footer />
		</Box>
	);
}
