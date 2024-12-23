'use client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import '@syncfusion/ej2-react-inputs/styles/material.css';

export default function Page() {
	return (
		<div className='flex flex-col gap-0 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-0 flex-col'>
				<TextBoxComponent
					placeholder='Outlined'
					cssClass='e-outline'
					floatLabelType='Auto'
				/>
			</div>
		</div>
	);
}
