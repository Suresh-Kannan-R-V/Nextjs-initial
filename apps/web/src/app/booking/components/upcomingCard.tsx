'use client';
import { Bookingimg } from '@core/ui/assets';
import { ButtonStyled, Tag } from '@core/ui/components';
import { Card } from '@nextui-org/card';
import { format, formatDistanceToNow } from 'date-fns';
import React from 'react';

interface upComingCallDataProps {
	upComingCallData: {
		id: number;
		name: string;
		startTime: string;
		endTime: string;
		status: boolean;
		details: string;
		image: string;
	}[];
}

const TimeCalculation = ({
	status,
	date,
}: {
	status: boolean;
	date: string;
}) => {
	const relativeTime = formatDistanceToNow(new Date(date), { addSuffix: true });

	if (status) {
		return 'Advisor Requested for reschedule';
	}

	const timeDifferenceInMinutes =
		Math.abs(new Date().getTime() - new Date(date).getTime()) / 60000;

	if (timeDifferenceInMinutes < 59) {
		return `Upcoming ${relativeTime}`;
	}

	return relativeTime;
};

const formatDateAndTime = (startTime: string, endTime: string) => {
	const startDate = new Date(startTime);
	const endDate = new Date(endTime);

	const formattedDate = format(startDate, 'MMM dd, yyyy');
	const formattedStartTime = format(startDate, 'hh:mm a'); // 12-hour format
	const formattedEndTime = format(endDate, 'hh:mm a'); // 12-hour format

	return `${formattedDate} | ${formattedStartTime} - ${formattedEndTime}`;
};

export function UpcomingCalls({ upComingCallData }: upComingCallDataProps) {
	return (
		<>
			{upComingCallData.map((CallData) => (
				<Card
					key={CallData.id}
					className='bg-white min-h-[23.625rem] p-2 shadow-sm border-1'
				>
					<div className='bg-gradient-to-r from-[#5978FF3D] to-[#F8971F3D] rounded-t-borderRadius12px w-full h-20 relative'>
						<div className='w-20 h-full rounded-borderRadius12px absolute top-11 left-5'>
							<img
								src={CallData.image}
								alt='Profile'
								className='w-full object-cover h-full rounded-xl bg-background-300'
							/>
						</div>
						<div
							className={`${CallData.status ? 'text-red-500' : 'text-[#383E54]'}`}
						>
							<Tag
								name={TimeCalculation({
									status: CallData.status,
									date: CallData.startTime,
								})}
								textcolor={`${CallData.status && 'text-danger'}`}
								position='absolute'
								right='0.75'
								top='0.75'
								radius='sm'
							/>
						</div>
					</div>
					<div className='pt-12 px-6'>
						<div className='flex items-center gap-3 mt-3 mb-2'>
							<p className='text-body1 font-semibold text-foreground-foreground'>
								{CallData.name}
							</p>
						</div>
						<div className='flex gap-2'>
							<p className='text-body2 font-medium text-foreground-800'>
								{formatDateAndTime(CallData.startTime, CallData.endTime)}
							</p>
						</div>
						<div className='mt-3 bg-primary-50 rounded-borderRadius8px'>
							<div className='px-4 py-3 flex flex-col gap-2'>
								<div className='flex items-center'>
									<Bookingimg />
									<p className='pl-2 text-body2 font-medium text-foreground-900'>
										Call Details
									</p>
								</div>
								<p className='text-body2 font-regular text-background-800'>
									{CallData.details}
								</p>
							</div>
						</div>
						<div className='flex gap-4 justify-center mt-6'>
							<ButtonStyled
								variant='bordered'
								text='Cancel Call'
								width={11}
								weight='medium'
							/>
							<ButtonStyled
								variant='solid'
								text='Join Call'
								width={11}
								weight='medium'
							/>
						</div>
					</div>
				</Card>
			))}
		</>
	);
}
