'use client';
import {
	Autocomplete,
	AutocompleteItem,
	AutocompleteSection,
} from '@nextui-org/react';
interface SelectfieldProps {
	label: string;
	options: string[];
}

export const Selectfield = ({ label, options }: SelectfieldProps) => {
	return (
		<Autocomplete
			classNames={{
				listboxWrapper: 'border-red-500',
				base: 'w-[35rem] border-red',
				listbox: 'border-red-500',
			}}
			inputProps={{
				classNames: {
					input: 'ml-1',
					inputWrapper: 'h-[3.75rem] w-[35rem] bg-white border-[#555555]',
				},
			}}
			label={label}
			placeholder={options[0]}
			itemHeight={100}
			isClearable={false}
			isRequired={true}
		>
			<AutocompleteSection title={label}>
				{options.map((option) => (
					<AutocompleteItem key={option}>{option}</AutocompleteItem>
				))}
			</AutocompleteSection>
		</Autocomplete>
	);
};
