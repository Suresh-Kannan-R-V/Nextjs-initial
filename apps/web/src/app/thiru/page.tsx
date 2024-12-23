'use client';
import { ButtonStyled, ConfirmationPopups } from '@core/ui/components';
import { Creditsimg } from '../../../../../packages/ui/assets';

export default function page() {
	return (
		<div className='h-screen bg-slate-400 flex items-center justify-center'>
			<ConfirmationPopups
				icon={<Creditsimg />}
				heading='Credits will be deducted!'
				subheading='Minimium of 250 Credits will be deducted for 5 mins call'
				acceptButtenText='Ok, Proceed'
				cancelButtonText='Cancel'
				onClickAcceptButten={() => alert('proceded')}
				onClickCancelButton={() => alert('canceld')}
			/>
		</div>
	);
}
