'use client';

import { BreadCrums } from '@core/ui/components';
import Profile from './components/profile';

export default function page() {
	const breadCrumsData = [
		{ id: 1, text: "Explore RIA's", name: 'Nancy John Sarikha', path: '/' },
	];
	return (
		<div className='m-6'>
			<div className='mb-4'>
				{breadCrumsData.map((crumb, index) => (
					<BreadCrums
						key={crumb.id}
						name={crumb.name}
						path={crumb.path}
						text={crumb.text}
					/>
				))}
			</div>
			<div className='grid grid-cols-5 gap-5'>
				<div className='col-span-3 rounded-borderRadius12px border-1 border-foreground-500 '>
					<Profile />
					overview / Reviews & Ratings
				</div>
				<div className='bg-red-300 col-span-2'>
					<div>Overall Stats of Nancy</div>
					<div>Schedule Call</div>
				</div>
			</div>
		</div>
	);
}
