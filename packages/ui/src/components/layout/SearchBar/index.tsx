'use client';

import { Input } from '@nextui-org/react';
import type { FC, SVGProps } from 'react';

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			aria-hidden='true'
			fill='none'
			focusable='false'
			height='1em'
			role='presentation'
			viewBox='0 0 24 24'
			width='1em'
			{...props}
		>
			<path
				d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1'
			/>
			<path
				d='M22 22L20 20'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1'
			/>
		</svg>
	);
};

export const SearchBar: FC = () => {
	return (
		<div className='flex justify-center items-center w-full px-4 py-2'>
			<Input
				isClearable
				classNames={{
					inputWrapper:
						'flex items-center bg-white rounded-lg px-4 py-2 border border-background-500 ',
					input: 'text-gray-700 placeholder:text-background-800',
				}}
				placeholder='Search here'
				startContent={
					<SearchIcon className='text-gray-500 mr-2 pointer-events-none' />
				}
			/>
		</div>
	);
};

SearchBar.displayName = 'SearchBar';
