'use client';
import { Textarea } from '@nextui-org/input';
import { useState } from 'react';
interface TextareaProps {
	id: string;
	description: string;
	isRequired: boolean;
	onchange: (value: string) => void;
}
export const Inputfield = ({
	id,
	description,
	isRequired,
	onchange,
}: TextareaProps) => {
	const [value, setValue] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newvalue = e.target.value;
		setValue(newvalue);
		onchange(newvalue);
	};
	return (
		<div id={id}>
			<Textarea
				classNames={{
					inputWrapper: 'bg-50 border-background-600 border-1',
					input: [
						'font-medium ',
						'text-h6 ',
						'text-600',
						'placeholder:text-foreground-800',
					],
				}}
				id={id}
				placeholder={description}
				minRows={10}
				className='w-[35rem]'
				style={{
					height: '6.5rem',
					fontSize: '1rem',
					padding: '5px',
				}}
				disableAutosize={true}
				isRequired={isRequired}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};
