import { routes } from '@/utils/routes';
import type { Metadata } from 'next';
import Link from 'next/link';

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
		<div className='grid min-h-[69vh] place-items-center px-4'>
			<div className='grid gap-3 text-center'>
				<p className='font-semibold text-slate-500 text-xl'>
					Oops! The page you&apos;re looking for couldn&apos;t be found.
				</p>
				<Link
					className='mx-auto my-6 grid max-w-fit place-items-center font-bold text-xl'
					href={routes.home}
				>
					Return Home
				</Link>
			</div>
		</div>
	);
}
