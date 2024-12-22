'use client';
import {
	BreadCrums,
	ButtonStyled,
	Logo,
	SpecializedInTag,
} from '@core/ui/components';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Logoimg, SpecializedInIcon } from '../../../../packages/ui/assets';

export default function Page() {
	return (
		<div className=' flex flex-col gap-0 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-5 justify-center items-center flex-col'>
				{/* <BreadCrums text="Explore RIA's" name='Nancy John Sarikha ' /> */}
				<SpecializedInTag
					specializedIn='Credit Management'
					icon={<SpecializedInIcon />}
				/>
			</div>
		</div>
	);
}
