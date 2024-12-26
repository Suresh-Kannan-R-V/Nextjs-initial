'use client';
import { Vector } from '@core/ui/assets';
import {
	AdvisorCard,
	InfoCard,
	Navbar,
	PepoleSpeciality,
	Slotcard,
	Tag,
} from '@core/ui/components';

export default function page() {
	const day = 'SAT';
	const date = 'Today';
	const no_of_slots = 3;
	const is_time = true;
	const time = '9:00 AM';

	const pressed = () => {};

	const infodate = '29 Nov 2024';
	const infotime = '09:20 AM';

	const name = 'Top Rated';
	const data = ['Finance Management', 'Credit Advise', 'sdfsdf', 'dsfs'];

	return (
		<div className='grid m-4'>
			{/* <Slotcard
				day={day}
				date={date}
				no_of_slots={no_of_slots}
				is_time={is_time}
				time={time}
			/>
			<InfoCard
				infodate={infodate}
				infotime={infotime}
				onClick={() => pressed}
			/>
			<Tag name={name} />
			<PepoleSpeciality  icon={<Vector  width={10.69} height={15.75} fill=''/>} title={data}/> */}
			<AdvisorCard />
		</div>
	);
}
