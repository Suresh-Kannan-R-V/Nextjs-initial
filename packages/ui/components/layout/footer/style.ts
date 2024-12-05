import type { SxProps } from '@mui/joy/styles/types';

interface FooterStyleProps {
	root: SxProps;
	container: SxProps;
	section: SxProps;
	link: SxProps;
	socialLinks: SxProps;
	iconLink: SxProps;
}

export const footerStyle: FooterStyleProps = {
	root: {
		width: '100%',
		backgroundColor: 'background.surface',
		borderTop: '1px solid',
		borderColor: 'divider',
		py: 2,
	},
	container: {
		display: 'flex',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		px: 2,
		gap: 2,
	},
	section: {
		display: 'flex',
		alignItems: 'center',
		gap: 2,
	},
	link: {
		color: 'neutral.500',
		'&:hover': {
			color: 'primary.500',
		},
	},
	socialLinks: {
		display: 'flex',
		alignItems: 'center',
		gap: 2,
	},
	iconLink: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'neutral.500',
		'&:hover': {
			color: 'primary.500',
		},
	},
};
