'use client';
import { ButtonStyled, Logo } from '@core/ui/components';
import { Button, Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { forwardRef, useEffect, useState } from 'react';
import { Logoimg } from '../../../../assets/index';

interface NavbarProps {
	title?: string;
	onMenuClick?: () => void;
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
	const { onMenuClick, startContent, endContent } = props;
	const pathname = usePathname(); // Current route path
	const [activeHash, setActiveHash] = useState<string>('');

	// Update activeHash based on the current hash in the URL
	useEffect(() => {
		const updateHash = () => setActiveHash(window.location.hash || '');
		updateHash(); // Set the initial hash
		window.addEventListener('hashchange', updateHash);
		return () => window.removeEventListener('hashchange', updateHash);
	}, []);

	return (
		<nav
			ref={ref}
			className='w-full h-16 border-b border-divider bg-white sticky top-0 z-40'
		>
			<div className='mx-10 h-full max-w-8xl md:mx-2 lg:mx-10'>
				<div className='flex h-full items-center justify-between'>
					{/* Left Section */}
					<div className='flex items-center gap-4'>
						<Logo image={<Logoimg />} Title='Fynro' />
					</div>

					{/* Right Section */}
					<div className='flex items-center gap-4'>
						<div className='flex flex-row justify-between w-[63rem] h-auto'>
							<div className='w-6/12 flex flex-row justify-between'>
								<Link
									href='#home'
									className={`no-underline text-base ${activeHash === '#home' ? 'text-[#F8971F]' : 'text-[#555555]'} `}
								>
									Home
								</Link>
								<Link
									href='#explore-advisors'
									className={`no-underline text-base ${activeHash === '#explore-advisors' ? 'text-[#F8971F]' : 'text-[#555555]'}`}
								>
									Explore Advisors
								</Link>
								<Link
									href='#blogs'
									className={`no-underline text-base ${activeHash === '#blogs' ? 'text-[#F8971F]' : 'text-[#555555]'}`}
								>
									Blogs
								</Link>
								<Link
									href='#white-papers'
									className={`no-underline text-base ${activeHash === '#white-papers' ? 'text-[#F8971F]' : 'text-[#555555]'}`}
								>
									White papers
								</Link>
							</div>
							<div className='flex gap-3'>
								<ButtonStyled
									text='Login'
									onClick={() => alert('Login')}
									variant='bordered'
								/>

								<ButtonStyled
									text='Get Started'
									onClick={() => alert('Get Started')}
									variant='solid'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
});

Navbar.displayName = 'Navbar';
