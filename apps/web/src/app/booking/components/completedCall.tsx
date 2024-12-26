'use client';
import { Deductedimg, NewTabImg } from '@core/ui/assets';
import { Card } from '@nextui-org/card';
import { format } from 'date-fns';

const TimeCalculation = (startTime: string, endTime: string) => {
	const start = new Date(startTime);
	const end = new Date(endTime);

	const timeDifferenceInMilliseconds = end.getTime() - start.getTime();
	const minutes = Math.floor(timeDifferenceInMilliseconds / 60000);
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	const formattedDate = format(start, 'dd MMM, yyyy');

	// Return formatted duration and date
	const duration =
		hours > 0
			? `${hours} hr ${remainingMinutes} min`
			: `${remainingMinutes} min`;

	return `${formattedDate} | ${duration}`;
};

interface completedCallsDataProps {
	completedCallsData: {
		id: number;
		name: string;
		startTime: string;
		endTime: string;
		image: string;
		Credits: string;
		Link: string;
	}[];
}

export function CompletedCalls({
	completedCallsData,
}: completedCallsDataProps) {
	return (
		<>
			{completedCallsData.map((CallsData) => (
				<Card
					key={CallsData.id}
					className='bg-white min-h-[19.625rem] p-2 shadow-sm border-1'
				>
					<div className='bg-gradient-to-r from-[#5978FF3D] to-[#F8971F3D] rounded-t-borderRadius12px w-full h-20 relative'>
						<div className='w-20 h-full rounded-borderRadius12px absolute top-11 left-5'>
							<img
								src={CallsData.image}
								alt='Profile'
								className='w-full object-cover h-full rounded-xl bg-background-300'
							/>
						</div>
					</div>
					<div className='pt-12 px-6'>
						<div className='flex items-center gap-3 mt-3 mb-2'>
							<p className='text-body1 font-semibold text-foreground-foreground'>
								{CallsData.name}
							</p>
						</div>
						<div className='flex gap-2'>
							<p className='text-body2 font-medium text-foreground-800'>
								{TimeCalculation(CallsData.startTime, CallsData.endTime)}
							</p>
						</div>
						<div className='mt-3'>
							<div className='flex items-center text-danger'>
								<Deductedimg />
								<p className='pl-2 text-body2 font-medium'>
									{CallsData.Credits} Credits Deducted
								</p>
							</div>
						</div>
						<div>
							<a
								href={CallsData.Link}
								target='_blank'
								rel='noreferrer'
								className='mt-4 h-12 bg-primary-50 rounded-borderRadius12px px-4 py-3 flex gap-2 text-primary-500'
							>
								<NewTabImg />
								<p className='text-body2'>
									Click here to View call actionables
								</p>
							</a>
						</div>
					</div>
				</Card>
			))}
		</>
	);
}
