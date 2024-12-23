'use client';

import { SpecializedInTag } from '@core/ui/components';
import { SpecializedInIcon } from '../../../../../packages/ui/assets';

export default function Page() {
	return (
		<div className='flex h-screen justify-center items-center '>
			{/* <BreadCrums text="Explore RIA's" name='Nancy John Sarikha ' /> */}
			<SpecializedInTag
				specializedIn='Credit Management'
				icon={<SpecializedInIcon />}
			/>
		</div>
	);
}
