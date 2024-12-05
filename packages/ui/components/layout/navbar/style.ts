import type { SxProps } from '@mui/joy/styles/types';

interface NavbarStyleProps {
	root: SxProps;
	container: SxProps;
	leftSection: SxProps;
	rightSection: SxProps;
	menuButton: SxProps;
	title: SxProps;
}

// Updated styles
export const navbarStyle: NavbarStyleProps = {
	root: {
		position: 'sticky',
		top: 0,
		width: '100%',
		display: 'flex',
		backgroundColor: 'background.surface',
		borderBottom: '1px solid',
		borderColor: 'divider',
		zIndex: 1000,
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		padding: '0.5rem 1rem',
	},
	leftSection: {
		display: 'flex',
		alignItems: 'center',
		gap: 2,
	},
	rightSection: {
		display: 'flex',
		alignItems: 'center',
		gap: 1,
	},
	menuButton: {
		display: {
			xs: 'inline-flex',
			sm: 'none',
		},
	},
	title: {
		display: 'flex',
		alignItems: 'center',
	},
};
