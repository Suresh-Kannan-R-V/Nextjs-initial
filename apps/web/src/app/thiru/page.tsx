'use client';
import { BreadCrums } from '@core/ui/components';

export default function Page() {
	const breadCrumsData = [
		{ text: "Explore RIA's", name: 'Nancy John Sarikha', path: '/' },
		{ text: 'View Project', name: 'John Doe', path: '/magesh' },
		{ text: 'Edit Profile', name: 'Jane Smith', path: '/suresh' },
	];

	return (
		<div className='h-screen flex  items-center justify-center gap-4'>
			{breadCrumsData.map((crumb, index) => (
				<BreadCrums
					key={index}
					text={crumb.text}
					name={crumb.name}
					path={crumb.path}
				/>
			))}
		</div>
	);
}
