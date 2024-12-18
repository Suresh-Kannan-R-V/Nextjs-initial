import { routes } from '@/utils/routes';
import { Link } from '@nextui-org/link';
import type { Metadata } from 'next';
import NextLink from 'next/link';

export const metadata: Metadata = {
	title: '404 Page | NOT FOUND',
	description: "Oops! The page you're looking for couldn't be found",
	openGraph: {
		title: '404 Page | NOT FOUND',
		description: '',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
	},
};

export default function NotFound() {
	return (
		<div className='min-h-[69vh] grid place-items-center px-4'>
			<div className='grid gap-12 text-center'>
				<h4 className='text-xl md:text-2xl font-bold text-foreground/60'>
					Oops! The page you&apos;re looking for couldn&apos;t be found.
				</h4>

				<Link
					as={NextLink}
					href={routes.home}
					className='mx-auto text-xl font-bold'
					color='primary'
					underline='hover'
				>
					Return Home
				</Link>
			</div>
		</div>
	);
}
