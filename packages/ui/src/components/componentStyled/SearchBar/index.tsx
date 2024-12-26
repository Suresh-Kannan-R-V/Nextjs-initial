'use client';

import { Input } from '@nextui-org/input';
import { SearchIcon } from 'assets';

interface SearchIconProps {
	id?: string;
	label?: string;
	placeholder: string;
	defaultValue?: string;
	validate?: (value: string) => string | true | null | undefined;
	validationBehavior?: 'native' | 'aria';
	size?: 'sm' | 'md' | 'lg';
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	type:
		| 'text'
		| 'email'
		| 'url'
		| 'password'
		| 'tel'
		| 'search'
		| 'number'
		| 'date'
		| 'time'
		| 'datetime-local'
		| 'month'
		| 'week';
	startContent?: React.ReactNode;
	endContent?: React.ReactNode;
	isDisabled?: boolean;
	error?: boolean;
	loading?: boolean;
	isClearable?: boolean;
	isRequired?: boolean;
	isInvalid?: boolean;
	labelPlacement?: 'outside' | 'outside-left' | 'inside';
}
export const SearchBar = ({
	id,
	label,
	placeholder,
	defaultValue,
	validate,
	validationBehavior = 'native',
	size = 'md',
	type,
	radius = 'md',
	startContent,
	endContent,
	labelPlacement = 'outside',
	isDisabled = false,
	error = false,
	loading = false,
	isClearable = false,
	isRequired = false,
	isInvalid = false,
}: SearchIconProps) => {
	return (
		<Input
			id={id}
			classNames={{
				inputWrapper:
					'flex items-center bg-background px-4 py-2 border border-background-500 shadow-none w-[18.938rem] font-fontFamily',
				input:
					'text-red-700 placeholder:text-background-700 font-regular text-body2',
				label: 'mt-1 ml-1 text-xs font-semibold',
			}}
			validate={validate}
			placeholder={placeholder}
			defaultValue={defaultValue}
			size={size}
			radius={radius}
			type={type}
			validationBehavior={validationBehavior}
			label={label}
			isInvalid={error || isInvalid}
			isClearable={isClearable}
			labelPlacement={labelPlacement}
			isDisabled={loading || isDisabled}
			isRequired={isRequired}
			startContent={startContent}
			endContent={endContent}
		/>
	);
};

SearchBar.displayName = 'SearchBar';
