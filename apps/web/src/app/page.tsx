'use client';
import { ButtonStyled, ConfirmationPopups, Logo } from '@core/ui/components';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Creditsimg } from '../../../../packages/ui/assets';

export default function Page() {
	return (
		<div className='bg-slate-400 flex flex-col gap-0 justify-center align-middle h-screen mx-auto'>
			<div className='flex justify-center align-middle'>
				<ConfirmationPopups
					icon={<Creditsimg />}
					heading='Credits will be deducted!'
					subheading='Minimium of 250 Credits will be deducted for 5 mins call'
					acceptButten={
						<ButtonStyled
							text='Cancel'
							onClick={() => alert('Cancled')}
							variant='bordered'
							size='md'
						/>
					}
					cancelButton={
						<ButtonStyled
							text='Ok, Proceed'
							onClick={() => alert('Proceded')}
							variant='solid'
							size='md'
						/>
					}
				/>
			</div>
		</div>
	);
}
