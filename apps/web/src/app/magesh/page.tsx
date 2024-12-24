'use client';
import { InfoCard, Navbar, Slotcard } from '@core/ui/components';
import { Tag } from '@core/ui/components';

export default function page() {
	const day = 'SAT';
	const date = 'Today';
	const no_of_slots = 3;
	const is_time = false;
	const time = '9:00 AM';

	const pressed = () => {};

	const infodate = '29 Nov 2024';
	const infotime = '09:20 AM';

	const name = 'Top Rated';

	return (
		<div className='grid'>
			<Slotcard
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
		</div>
	);
}
