'use client';
import { Card, CardHeader } from '@nextui-org/react';

// Define the structure of the data being passed

interface SlotcardProps {
	data: {
		day?: string;
		date?: string;
		no_of_slots?: number;
		is_time?: boolean;
		time?: string;
	};
}

export const Slotcard: React.FC<SlotcardProps> = ({ data }) => {
	return (
		<Card
			className={`
        ${data?.is_time ? 'w-[6.2rem] h-[3.6rem]' : 'w-[5.7rem] h-[6.7rem]'} 
        bg-[#FFFFFF] flex items-center justify-center rounded-xl border-1 shadow-none   m-2
      `}
		>
			<CardHeader className='flex flex-col space-y-1 text-[#555555] '>
				<p
					className={`uppercase font-${data.is_time ? 'bold' : 'medium'} text-xs`}
				>
					{!data?.is_time ? data?.day : data?.time}
				</p>
				{!data?.is_time && (
					<>
						<small className='text-black text-[0.9rem] text-base p-1'>
							{data?.date}
						</small>
						<h4 className='text-[#008545] text-xs pt-2'>
							{data?.no_of_slots} slots
						</h4>
					</>
				)}
			</CardHeader>
		</Card>
	);
};
