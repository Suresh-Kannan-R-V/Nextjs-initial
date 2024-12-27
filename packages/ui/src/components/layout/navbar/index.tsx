'use client';
import { ButtonStyled, Logo } from '@core/ui/components';
import { Button, Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { forwardRef, useEffect, useState } from 'react';
import { Logoimg } from '../../../../assets/index';

interface NavbarProps {
	id?: string;
	title?: string;
}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
	const { id, title } = props;
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
			className='w-full h-16 border-b border-background-500 bg-white sticky top-0 z-40'
			id={id}
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
									className={`no-underline text-base ${activeHash === '#home' ? 'text-secondary-500' : 'text-foreground-800'} `}
								>
									Home
								</Link>
								<Link
									href='#explore-advisors'
									className={`no-underline text-base ${activeHash === '#explore-advisors' ? 'text-secondary-500' : 'text-foreground-800'}`}
								>
									Explore Advisors
								</Link>
								<Link
									href='#blogs'
									className={`no-underline text-base ${activeHash === '#blogs' ? 'text-secondary-500' : 'text-foreground-800'}`}
								>
									Blogs
								</Link>
								<Link
									href='#white-papers'
									className={`no-underline text-base ${activeHash === '#white-papers' ? 'text-secondary-500' : 'text-foreground-800'}`}
								>
									White papers
								</Link>
							</div>
							<div className='flex gap-3'>
								<ButtonStyled
									text='Login'
									onPress={() => alert('Login')}
									variant='bordered'
								/>

								<ButtonStyled
									text='Get Started'
									onPress={() => alert('Get Started')}
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
