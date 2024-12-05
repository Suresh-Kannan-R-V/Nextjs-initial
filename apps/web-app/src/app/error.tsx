'use client';

import { Alert, Box, Button, Typography } from '@mui/joy';
import { useEffect } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import { IoRefreshOutline } from 'react-icons/io5';

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error('Error:', error);
	}, [error]);

	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 4,
				p: 4,
				bgcolor: 'background.surface',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 2,
					maxWidth: 500,
					textAlign: 'center',
				}}
			>
				<BiErrorCircle
					size={60}
					style={{
						color: 'var(--joy-palette-danger-500)',
						animation: 'pulse 2s infinite',
					}}
				/>

				<Typography
					level='h1'
					color='danger'
					sx={{
						fontWeight: 800,
						fontSize: { xs: '2rem', md: '3rem' },
						animation: 'slideDown 0.5s ease-out',
						'@keyframes slideDown': {
							from: { transform: 'translateY(-20px)', opacity: 0 },
							to: { transform: 'translateY(0)', opacity: 1 },
						},
					}}
				>
					Something went wrong!
				</Typography>

				<Typography
					level='body-lg'
					color='neutral'
					sx={{
						opacity: 0.8,
						animation: 'fadeIn 0.5s ease-out 0.2s both',
						'@keyframes fadeIn': {
							from: { opacity: 0 },
							to: { opacity: 0.8 },
						},
					}}
				>
					We apologize for the inconvenience. Our team has been notified and is
					working on the issue.
				</Typography>

				<Button
					variant='solid'
					color='primary'
					size='lg'
					startDecorator={<IoRefreshOutline size={20} />}
					onClick={() => reset()}
					sx={{
						mt: 2,
						px: 4,
						py: 1,
						borderRadius: 'xl',
						fontSize: 'lg',
						fontWeight: 600,
						transition: 'all 0.2s',
						'&:hover': {
							transform: 'translateY(-2px)',
							boxShadow: 'md',
						},
						animation: 'bounceIn 0.5s ease-out 0.4s both',
						'@keyframes bounceIn': {
							from: { transform: 'scale(0.8)', opacity: 0 },
							to: { transform: 'scale(1)', opacity: 1 },
						},
					}}
				>
					Try again
				</Button>
			</Box>

			{process.env.NODE_ENV === 'development' && (
				<Alert
					variant='soft'
					color='neutral'
					startDecorator={<HiOutlineExclamationTriangle size={20} />}
					sx={{
						maxWidth: '800px',
						mt: 4,
						animation: 'slideUp 0.5s ease-out 0.6s both',
						'@keyframes slideUp': {
							from: { transform: 'translateY(20px)', opacity: 0 },
							to: { transform: 'translateY(0)', opacity: 1 },
						},
					}}
				>
					<Typography
						level='body-sm'
						fontFamily='code'
						sx={{
							textAlign: 'left',
							whiteSpace: 'pre-wrap',
							wordBreak: 'break-word',
						}}
					>
						{error.message}
					</Typography>
				</Alert>
			)}

			<style jsx global>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
		</Box>
	);
}
