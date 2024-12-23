'use client';
import { Card, CardBody } from '@nextui-org/react';
import { ButtonStyled } from '../button';

interface InfoProps {
	infodate?: string;
	infotime?: string;
	onClick: () => void;
}
//w-[38rem] h-[3.8rem]
export const InfoCard: React.FC<InfoProps> = ({ infodate, infotime }) => {
	return (
		// w-[38rem]  is taken 100% of the their width now i have given 38 rem due to i dont have parent elemet  and 38 is for sample
		<Card className='m-3  shadow-none grid border-0   bg-primary-50 px-2'>
			<CardBody className=' flex justify-between items-center flex-row '>
				<p className='text-foreground-800 font-regular  text-fontSize-body2 '>
					<span className='font-medium text-foreground-foreground text-fontSize-body2 '>
						Booking Date & Time details {infodate},{infotime}
					</span>
				</p>
				<ButtonStyled
					text='change slot'
					variant={'light'}
					weight={'medium'}
					fontsize={'body1'}
				/>
			</CardBody>
		</Card>
	);
};
