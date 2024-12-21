'use client';

import { Input } from '@nextui-org/react';
import type { FC, SVGProps } from 'react';

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Search Icon</title>
			<path
				d='M6.49219 1.5166C3.7411 1.5166 1.5 3.75771 1.5 6.50879C1.5 9.25987 3.7411 11.501 6.49219 11.501C7.36864 11.501 8.19222 11.272 8.90918 10.873C9.20933 11.7083 9.83274 12.5692 10.5625 13.3203C11.4491 14.2329 12.4547 15 13.5 15C13.9147 15 14.3154 14.8799 14.5977 14.5977C14.8799 14.3154 15 13.9147 15 13.5C15 12.4484 14.2152 11.4504 13.2969 10.5684C12.5393 9.84073 11.6804 9.22106 10.8633 8.91504C11.2584 8.20069 11.4844 7.3807 11.4844 6.50879C11.4844 3.75771 9.24327 1.5166 6.49219 1.5166ZM6.49219 2.5166C8.70283 2.5166 10.4844 4.29815 10.4844 6.50879C10.4844 8.71943 8.70283 10.501 6.49219 10.501C4.28154 10.501 2.5 8.71943 2.5 6.50879C2.5 4.29815 4.28154 2.5166 6.49219 2.5166ZM10.2607 9.77148C10.8529 9.93777 11.8296 10.5458 12.6045 11.29C13.4272 12.0802 14 13.0516 14 13.5C14 13.7353 13.9459 13.8354 13.8906 13.8906C13.8354 13.9459 13.7353 14 13.5 14C13.0453 14 12.0705 13.4384 11.2793 12.624C10.53 11.8528 9.92435 10.875 9.76953 10.2646C9.9444 10.1118 10.1086 9.94695 10.2607 9.77148Z'
				fill='#555555'
			/>
		</svg>
	);
};

export const SearchBar: React.FC = () => {
	return (
		<Input
			classNames={{
				inputWrapper:
					'flex items-center bg-background rounded-xl px-4 py-2 border border-background-500 shadow-none w-[18.938rem] font-fontFamily',
				input:
					'text-red-700 placeholder:text-background-800 font-regular text-body2',
			}}
			placeholder='Search here'
			startContent={
				<SearchIcon className='text-gray-500 pointer-events-none' />
			}
		/>
	);
};

SearchBar.displayName = 'SearchBar';
