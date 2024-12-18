'use client';

import { Link } from '@nextui-org/link';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

interface FooterProps {
	companyName?: string;
}

export const Footer = ({ companyName = 'Crayond Dev' }: FooterProps) => {
	return (
		<footer className='w-full border-t border-divider bg-background-50'>
			<div className='mx-auto max-w-7xl px-4 py-6'>
				<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
					{/* Copyright Section */}
					<div className='text-sm text-foreground/60'>
						© {new Date().getFullYear()} {companyName}. All rights reserved.
					</div>

					{/* Links Section */}
					<div className='flex gap-4'>
						<Link
							href='#'
							size='sm'
							className='text-foreground/60 hover:text-foreground'
						>
							Privacy Policy
						</Link>
						<Link
							href='#'
							size='sm'
							className='text-foreground/60 hover:text-foreground'
						>
							Terms of Service
						</Link>
					</div>

					{/* Social Links */}
					<div className='flex items-center gap-4'>
						<Link
							href='#'
							className='text-foreground/60 hover:text-foreground transition-colors'
							isExternal
						>
							<RiGithubFill className='text-xl' />
						</Link>
						<Link
							href='#'
							className='text-foreground/60 hover:text-foreground transition-colors'
							isExternal
						>
							<RiLinkedinFill className='text-xl' />
						</Link>
						<Link
							href='#'
							className='text-foreground/60 hover:text-foreground transition-colors'
							isExternal
						>
							<RiTwitterFill className='text-xl' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
