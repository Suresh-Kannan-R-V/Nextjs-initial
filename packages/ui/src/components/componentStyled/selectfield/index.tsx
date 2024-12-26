'use client';
import {
	Autocomplete,
	AutocompleteItem,
	AutocompleteSection,
} from '@nextui-org/react';
import { Dropdown } from 'assets';
import { useState } from 'react';
interface SelectfieldProps {
	id: string;
	label: string;
	options: string[];
	placeholder: string;
	clearable: boolean;
	isRequired: boolean;
	onchange: (key: string) => void;
}
export const Selectfield = ({
	id,
	label,
	options,
	placeholder,
	clearable,
	isRequired,
	onchange,
}: SelectfieldProps) => {
	const [selectedValue, setSelectedValue] = useState<
		string | number | readonly string[] | undefined
	>('');

	const handleSelectionChange = (key: string | number | null) => {
		const values = String(key);
		setSelectedValue(values);
		onchange(values);
	};
	return (
		<div id={id}>
			<Autocomplete
				classNames={{
					base: 'w-[35rem] border-background-600 border-1 rounded-xl',
				}}
				inputProps={{
					classNames: {
						inputWrapper: 'h-[3.75rem] bg-50',

						label: 'font-regular text-h6',
						input: [
							'font-medium ',
							'text-h6',
							'placeholder:text-foreground-900',
						],
					},
				}}
				label={label}
				value={selectedValue}
				placeholder={placeholder}
				isClearable={clearable}
				isRequired={isRequired}
				onSelectionChange={handleSelectionChange}
				selectorIcon={<Dropdown />}
			>
				<AutocompleteSection title={label}>
					{options?.map((option) => (
						<AutocompleteItem key={option}>{option}</AutocompleteItem>
					))}
				</AutocompleteSection>
			</Autocomplete>
		</div>
	);
};
