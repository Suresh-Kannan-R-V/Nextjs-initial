'use client';

import { Box, Link, Sheet, Typography } from '@mui/joy';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import { footerStyle } from './style';

interface FooterProps {
	companyName?: string;
}

export const Footer = ({ companyName = 'Crayond Dev' }: FooterProps) => {
	return (
		<Sheet component='footer' sx={footerStyle.root}>
			<Box sx={footerStyle.container}>
				<Box sx={footerStyle.section}>
					<Typography level='body-sm'>
						© {new Date().getFullYear()} {companyName}. All rights reserved.
					</Typography>
				</Box>

				<Box sx={footerStyle.section}>
					<Link href='#' variant='plain' sx={footerStyle.link}>
						Privacy Policy
					</Link>
					<Link href='#' variant='plain' sx={footerStyle.link}>
						Terms of Service
					</Link>
				</Box>

				<Box sx={footerStyle.socialLinks}>
					<Link href='#' variant='plain' sx={footerStyle.iconLink}>
						<RiGithubFill size={20} />
					</Link>
					<Link href='#' variant='plain' sx={footerStyle.iconLink}>
						<RiLinkedinFill size={20} />
					</Link>
					<Link href='#' variant='plain' sx={footerStyle.iconLink}>
						<RiTwitterFill size={20} />
					</Link>
				</Box>
			</Box>
		</Sheet>
	);
};
