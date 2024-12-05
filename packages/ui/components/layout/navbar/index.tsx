'use client';

import { Box, Sheet, Typography } from '@mui/joy';
import { forwardRef } from 'react';
import { navbarStyle } from './style';

interface NavbarProps {
	title?: string;
	onMenuClick?: () => void;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
	const { title = 'Logo', onMenuClick, startContent, endContent } = props;

	return (
		<Sheet ref={ref} component='nav' sx={navbarStyle.root}>
			<Box sx={navbarStyle.container}>
				<Box sx={navbarStyle.leftSection}>
					<Typography component='h1' fontWeight='xl' sx={navbarStyle.title}>
						{title}
					</Typography>
					{startContent}
				</Box>

				<Box sx={navbarStyle.rightSection}>{endContent}</Box>
			</Box>
		</Sheet>
	);
});

Navbar.displayName = 'Navbar';
