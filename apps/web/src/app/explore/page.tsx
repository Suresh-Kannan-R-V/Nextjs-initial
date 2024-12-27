'use client';
import { FilterIcon, SearchIcon, SortIcon, Vector } from '@core/ui/assets';
import {
	AdvisorCard,
	IconButton,
	InfoCard,
	Navbar,
	PepoleSpeciality,
	SearchBar,
	SideNavBar,
	Slotcard,
	Tag,
} from '@core/ui/components';
import Header from './header';

const data = [
	{
		id: 1,
		name: 'Nancy John Sarikha',
		img: 'https://wallpapercave.com/wp/wp12350078.jpg',
		status: 'active',
		work_experience: 3,
		rating: 4.5,
		recommended: 'Top Rated',
		calls_attended: 24,
		skill_sets: ['Finance Management', 'Credit Advise', 'Leadership'],
		known_languages: ['Tamil', 'English'],
		is_discounted: true,
		discounted_credicts: 45,
		credicts: 35,
	},
	{
		id: 2,
		name: 'John',
		img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
		status: 'in-call',
		work_experience: 5,
		rating: 4.8,
		recommended: 'Highly Recommended',
		calls_attended: 42,
		skill_sets: ['Risk Management', 'Business Analysis', 'Communication'],
		known_languages: ['Hindi', 'English'],
		is_discounted: false,
		discounted_credicts: 0,
		credicts: 50,
	},
	{
		id: 3,
		name: 'Lara',
		status: 'active',
		img: 'https://www.leathercelebrities.com/images/uploads/20826/millie_bobby_brown_attends_the_stranger_things_2_premiere_(209).jpg',
		work_experience: 2,
		rating: 4.2,
		recommended: 'Recommended',
		calls_attended: 18,
		skill_sets: ['Customer Support', 'Problem Solving', 'Data Analysis'],
		known_languages: ['Malayalam', 'English'],
		is_discounted: true,
		discounted_credicts: 30,
		credicts: 25,
	},
	{
		id: 4,
		name: 'Mike',
		status: 'active',
		img: 'https://wallpapers.com/images/hd/4k-captain-america-3840-x-2160-background-fgo6gm0xbv7a12pt.jpg',
		work_experience: 4,
		rating: 4.7,
		recommended: 'Top Performer',
		calls_attended: 33,
		skill_sets: [
			'Project Management',
			'Strategy Planning',
			'Negotiation',
			'dfhsh',
		],
		known_languages: ['Kannada', 'English'],
		is_discounted: false,
		discounted_credicts: 0,
		credicts: 40,
	},
	{
		id: 5,
		name: 'Sophia',

		status: 'in-call',
		img: 'https://wallpapercave.com/wp/wp1852516.jpg',
		work_experience: 6,
		rating: 4.9,
		recommended: 'offline',
		calls_attended: 50,
		skill_sets: ['Marketing', 'Content Creation'],
		known_languages: ['Telugu', 'English'],
		is_discounted: true,
		discounted_credicts: 60,
		credicts: 50,
	},
];

export default function page() {
	return (
		<div className='my-7 flex  flex-col mx-8  '>
			<Header length={data.length} />

			<div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
				{data?.map((item) => (
					<AdvisorCard
						key={item?.id}
						id={item?.id}
						name={item?.name}
						status={item?.status}
						work_experience={item.work_experience}
						rating={item.rating}
						recommended={item.recommended}
						calls_attended={item.calls_attended}
						skill_sets={item.skill_sets}
						known_languages={item.known_languages}
						is_discounted={item.is_discounted}
						discounted_credicts={item.discounted_credicts}
						credicts={item.credicts}
						img={item?.img}
					/>
				))}
			</div>
		</div>
	);
}
