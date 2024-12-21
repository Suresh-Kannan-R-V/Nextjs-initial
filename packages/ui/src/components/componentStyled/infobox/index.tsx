'use client';
import { Card, CardBody } from '@nextui-org/react';
import { ButtonStyled } from '../button';

interface InfoProps {
	data: {
		date: string;
		time: string;
	};
}

export const InfoCard: React.FC<InfoProps> = ({ data }) => {
	return (
		<Card className='m-3 w-[38rem] shadow-none border-0 flex  bg-[#F7F9FF] px-2'>
			<CardBody className=' flex justify-between items-center flex-row h-[4.3rem]'>
				<p className='text-[#555555] font-medium '>
					Booking Date & Time details{' '}
					<span className='font-bold text-black text-md'>
						{data?.date},{data?.time}
					</span>
				</p>
				<p className='text-[#5978FF]'>Change slot</p>
			</CardBody>
		</Card>
	);
};
