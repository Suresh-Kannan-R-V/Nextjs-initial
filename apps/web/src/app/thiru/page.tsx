'use client';

import { SpecializedInTag } from '@core/ui/components';
import { BreadCrums } from '@core/ui/components';
import { ButtonStyled, ConfirmationPopups } from '@core/ui/components';
import { SpecializedInIcon } from '../../../../../packages/ui/assets';
import { Creditsimg } from '../../../../../packages/ui/assets';

export default function page() {
	const breadCrumsData = [
		{ text: "Explore RIA's", name: 'Nancy John Sarikha', path: '/' },
		{ text: 'View Project', name: 'John Doe', path: '/magesh' },
		{ text: 'Edit Profile', name: 'Jane Smith', path: '/suresh' },
	];
	return (
		<div className='bg-slate-400 flex flex-col h-screen justify-around items-center '>
			<div className='bg-white p-4'>
				<SpecializedInTag
					specializedIn='Credit Management'
					icon={<SpecializedInIcon />}
				/>
			</div>
			<ConfirmationPopups
				icon={<Creditsimg />}
				heading='Credits will be deducted!'
				subheading='Minimium of 250 Credits will be deducted for 5 mins call'
				acceptButtenText='Ok, Proceed'
				cancelButtonText='Cancel'
				onClickAcceptButten={() => alert('proceded')}
				onClickCancelButton={() => alert('canceld')}
			/>
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
