'use client';
import { Card, CardBody } from '@nextui-org/react';
import { color } from 'framer-motion';

interface NamingData {
	id?: string;
	name?: string;
	position?: 'absolute' | 'relative' | 'fixed';
	radius?: 'none' | 'sm' | 'md' | 'lg';
	zIndex?: number;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	textcolor?: string;
}

export const Tag: React.FC<NamingData> = ({
	name,
	position,
	zIndex = 99,
	top,
	left,
	right,
	bottom,
	radius = 'sm',
	textcolor,
}) => {
	return (
		<Card
			className={`shadow-none border-none m-1 w-[fit-content] ${position || 'relative'}`}
			style={{
				zIndex,
				top: `${top}rem` || undefined,
				left: `${left}rem` || undefined,
				right: `${right}rem` || undefined,
				bottom: `${bottom}rem` || undefined,
				borderRadius: '0.325rem',
			}}
			radius={radius}
		>
			<CardBody className='flex justify-center w-[fit-content] px-2 py-1'>
				<p
					className={`text-footnote font-medium text-default-100 ${textcolor} `}
				>
					{name}
				</p>
			</CardBody>
		</Card>
	);
};
