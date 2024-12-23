'use client';
import { Card, CardBody } from '@nextui-org/react';
interface namingdata {
	id?: string;
	name?: string;
}

export const Tag: React.FC<namingdata> = ({ name }) => {
	return (
		<Card className=' rounded-borderRadius8px shadow-none border-1  m-1  w-[fit-content]'>
			<CardBody className='flex justify-center'>
				<p className='text-footnote text-foreground-800'>{name}</p>
			</CardBody>
		</Card>
	);
};
