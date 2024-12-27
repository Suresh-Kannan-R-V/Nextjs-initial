'use client';
import { NavButton } from '@components/componentStyled/navButton';
import { Bookingimg, Exploreimg, Messageimg, Walletimg } from 'assets';
import { usePathname } from 'next/navigation';

export const SideNavBar = ({ id }: { id?: string }) => {
	const pathname = usePathname();

	return (
		<div
			id={id}
			className='h-[91vh] px-0.5 pt-12 bg-navbar flex flex-col gap-6 sticky top-16'
		>
			<NavButton
				icon={<Exploreimg width={24} height={24} />}
				label='Explore'
				isActive={pathname === '/explore'}
				path='/explore'
			/>
			<NavButton
				icon={<Messageimg width={24} height={24} />}
				label='Messages'
				isActive={pathname === '/message'}
				path='/message'
			/>
			<NavButton
				icon={<Bookingimg width={24} height={24} />}
				label='Booking'
				isActive={pathname === '/booking'}
				path='/booking'
			/>
			<NavButton
				icon={<Walletimg width={24} height={24} />}
				label='Wallet'
				isActive={pathname === '/wallet'}
				path='/wallet'
			/>
		</div>
	);
};
