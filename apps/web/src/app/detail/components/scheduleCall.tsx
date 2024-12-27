'use client';

import { ArrowTitle, ButtonStyled, Slotcard } from '@core/ui/components';

export default function SheduleCall() {
	const slotData = [
		{ id: 1, day: 'SAT', date: 'Today', no_of_slots: 3 },
		{ id: 1, day: 'MON', date: '13 NOV', no_of_slots: 5 },
		{ id: 1, day: 'TUE', date: '14 NOV', no_of_slots: 6 },
		{ id: 1, day: 'WED', date: '15 NOV', no_of_slots: 7 },
		{ id: 1, day: 'THU', date: '16 NOV', no_of_slots: 8 },
		{ id: 1, day: 'FRI', date: '17 NOV', no_of_slots: 9 },
		{ id: 1, day: 'SAT', date: '18 NOV', no_of_slots: 2 },
		{ id: 1, day: 'MON', date: '19 NOV', no_of_slots: 4 },
		{ id: 1, day: 'TUE', date: '20 NOV', no_of_slots: 8 },
	];
	const times = [
		{ id: 1, time: '9:00 AM' },
		{ id: 2, time: '09:20 AM' },
		{ id: 3, time: '12:00 pM' },
		{ id: 4, time: '12:20 pM' },
		{ id: 5, time: '4:00 pM' },
		{ id: 6, time: '5:00 pM' },
	];
	return (
		<div className='border-1 border-background-500 rounded-[0.625rem] p-6 shadow-[0_0.5rem_2rem_rgba(0,0,0,0.08)]'>
			<p className='font-medium text-body1 mb-3'>Schedule Call </p>
			<p className='font-regular text-body2 text-background-800 mb-5 '>
				Book 1:1 session to discuss more about your financial doubts
			</p>
			<ArrowTitle
				title='Available Slots'
				data={slotData.map((slot, index) => (
					<Slotcard
						key={slot.id}
						day={slot.day}
						date={slot.date}
						no_of_slots={slot.no_of_slots}
					/>
				))}
				count={4}
			/>
			<p className='mt-12 mb-4 font-regular text-body2'>Available slots</p>
			<div className='grid grid-cols-4 gap-3 '>
				{times.map((time, index) => (
					<div key={time.id} className='bg-slate-40/0 col-span-1'>
						<Slotcard is_time time={time.time} />
					</div>
				))}
			</div>
			<div className='flex justify-center mt-[3.125rem]'>
				<ButtonStyled
					variant='solid'
					text='Schedule Call For Today , 09:20 AM'
					width={27.563}
					radius='lg'
					size='lg'
					weight='medium'
					fontsize='body1'
				/>
			</div>
		</div>
	);
}
