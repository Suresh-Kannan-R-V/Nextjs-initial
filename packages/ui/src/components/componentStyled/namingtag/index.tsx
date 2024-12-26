'use client';
import { Card, CardBody } from '@nextui-org/react';

interface NamingData {
	id?: string;
	name?: string;
	position?: 'absolute' | 'relative' | 'fixed';
	zIndex?: number;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
}

export const Tag: React.FC<NamingData> = ({
	name,
	position,
	zIndex = 99,
	top,
	left,
	right,
	bottom,
}) => {
	return (
		<Card
			className={`rounded-[0.25rem] shadow-none border-none m-1 w-[fit-content] ${position || 'relative'}`}
			style={{
				zIndex,
				top: `${top}rem` || undefined,
				left: `${left}rem` || undefined,
				right: `${right}rem` || undefined,
				bottom: `${bottom}rem` || undefined,
			}}
		>
			<CardBody className='flex justify-center w-[fit-content] px-2 py-1'>
				<p className='text-footnote text-foreground-800'>{name}</p>
			</CardBody>
		</Card>
	);
};
