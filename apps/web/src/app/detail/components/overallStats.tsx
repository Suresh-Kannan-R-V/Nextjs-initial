'use client';

import { AttendedCallIcon, CallDurationIcon } from '@core/ui/assets';
import { OverallStatsComponent } from '@core/ui/components';
export default function OverallStats() {
	const name = 'Nancy';
	const OverallStats = [
		{
			id: 1,
			icon: <AttendedCallIcon />,
			color: 'content1-200',
			state: 'Calls Attended',
			value: '24',
		},
		{
			id: 2,
			icon: <CallDurationIcon />,
			color: 'content1-50',
			state: 'Total Call Duration',
			value: '150 Mins',
		},
	];
	return (
		<div className='border-1 border-background-500 rounded-[0.625rem] p-6 shadow-[0_0.5rem_2rem_rgba(0,0,0,0.08)]'>
			<p className='font-medium text-body1'>Overall Stats of {name}</p>
			<div className='mt-5 flex gap-[3.125rem]'>
				{OverallStats?.map((states, index) => (
					<OverallStatsComponent
						key={states.id}
						color={states.color}
						icon={states.icon}
						state={states.state}
						value={states.value}
					/>
				))}
			</div>
		</div>
	);
}
