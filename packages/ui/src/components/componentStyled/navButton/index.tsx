'use client';

import { Link } from '@nextui-org/link';
import React from 'react';

interface NavButtonProps {
	isActive?: boolean;
	icon?: React.ReactNode;
	label?: string;
	path?: string;
}

export const NavButton = ({
	isActive = false,
	icon,
	label,
	path,
}: NavButtonProps) => {
	return (
		<Link
			className='w-20 h-20 flex flex-col items-center cursor-pointer'
			href={path}
		>
			<div
				className={`w-[3.375rem] h-[3.375rem] flex justify-center items-center rounded-2xl ${isActive ? 'text-primary-500 bg-primary-100' : 'text-default-100'}`}
			>
				{React.cloneElement(icon as React.ReactElement, {
					fill: isActive ? '#5978FF' : '#383E54',
				})}
			</div>
			<p
				className={`text-footnote font-medium ${isActive ? 'text-primary-500' : 'text-default-100'}`}
			>
				{label}
			</p>
		</Link>
	);
};
