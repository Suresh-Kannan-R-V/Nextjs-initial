'use client';
import { Card, CardHeader } from '@nextui-org/react';

// Define the structure of the data being passed

interface SlotcardProps {
	id?: string;
	day?: string;
	date?: string;
	no_of_slots?: number;
	is_time?: boolean;
	time?: string;
}
//"w-[6.2rem] h-[3.6rem]" : "w-[5.7rem] h-[6.7rem]"

export const Slotcard: React.FC<SlotcardProps> = ({
	day,
	date,
	no_of_slots,
	is_time,
	time,
}) => {
	return (
		<Card
			className={`
        ${is_time ? 'grid' : 'grid'} 
        bg-background-50 flex items-center justify-center rounded-borderRadius12px border-1 shadow-none   m-2
      `}
		>
			<CardHeader className='flex flex-col space-y-1 text-foreground-800 '>
				<p
					className={`uppercase font-${is_time ? 'fontWeight-bold' : 'fontWeight-medium'} text-footnote`}
				>
					{!is_time ? day : time}
				</p>
				{!is_time && (
					<>
						<small className='text-foreground-foreground text-body1  p-1'>
							{date}
						</small>
						<h4 className='text-success text-footnote pt-2'>
							{no_of_slots} slots
						</h4>
					</>
				)}
			</CardHeader>
		</Card>
	);
};
