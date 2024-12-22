'use client';
import { BreadCrums, ButtonStyled, Logo } from '@core/ui/components';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Logoimg } from '../../../../packages/ui/assets';

export default function Page() {
	return (
		<div className='bg-slate-300 flex flex-col gap-0 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-5 justify-center'>
				<BreadCrums text="Explore RIA's" name='Nancy John Sarikha ' />
			</div>
		</div>
	);
}
