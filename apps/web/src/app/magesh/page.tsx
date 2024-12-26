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
	return (
		<div className='grid  grid-flow-row  grid-cols-4 w-[100%] h-[fit-content] gap-4 '>
			<AdvisorCard />
		</div>
	);
}
