'use client';
import { Card, CardBody } from '@nextui-org/react';
interface namingdata {
	data: {
		name?: string;
	};
}

export const Tag: React.FC<namingdata> = ({ data }) => {
	return (
		<Card className='w-[fit-content] rounded-[0.4rem] shadow-none border-1 h-[2rem] '>
			<CardBody className='flex justify-center'>
				<p className='text-xs text-[#383E54]  '>{data?.name}</p>
			</CardBody>
		</Card>
	);
};
