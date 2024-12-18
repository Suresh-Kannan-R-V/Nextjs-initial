'use client';

import { forwardRef } from 'react';

interface NavbarProps {
	title?: string;
	onMenuClick?: () => void;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
	const { title = 'Logo', onMenuClick, startContent, endContent } = props;

	return (
		<nav
			ref={ref}
			className='w-full h-16 border-b border-divider bg-background-50 sticky top-0 z-40'
		>
			<div className='mx-auto h-full max-w-7xl px-4'>
				<div className='flex h-full items-center justify-between'>
					{/* Left Section */}
					<div className='flex items-center gap-4'>
						<h1 className='text-xl font-bold text-foreground'>{title}</h1>
						{startContent}
					</div>

					{/* Right Section */}
					<div className='flex items-center gap-4'>{endContent}</div>
				</div>
			</div>
		</nav>
	);
});

Navbar.displayName = 'Navbar';
