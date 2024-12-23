import { Button } from '@nextui-org/button';
import { RiNotification3Line, RiUser3Line } from 'react-icons/ri';

export default function Page() {
	const endContent = (
		<>
			<Button
				isIconOnly
				variant='light'
				className='text-foreground'
				radius='full'
			>
				<RiNotification3Line className='text-xl' />
			</Button>
			<Button
				isIconOnly
				variant='light'
				className='text-foreground'
				radius='full'
			>
				<RiUser3Line className='text-xl' />
			</Button>
		</>
	);

	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1 flex flex-col items-center justify-center'>
				<h1 className='mb-3 text-4xl font-bold text-foreground'>
					Welcome to Crayond&apos;s Monorepo Boilerplate
				</h1>

				<p className='mb-4 text-foreground/80 text-lg'>
					Start building your application with TurboRepo, Next.js, and NextUI
				</p>

				<Button color='primary' size='lg' className='font-semibold'>
					Get Started
				</Button>
			</main>
		</div>
	);
}
