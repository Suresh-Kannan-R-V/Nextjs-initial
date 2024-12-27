'use client';

import {
	FilterIcon,
	HeartIcon,
	LanguageIcon,
	SearchIcon,
	SortIcon,
	SpecializedInIcon,
	Vector,
} from '@core/ui/assets';
import {
	IconButton,
	RatingChip,
	SearchBar,
	SpecializedInTag,
	StatusChip,
	Tag,
} from '@core/ui/components';
interface props {
	length: number;
}

const Header: React.FC<props> = ({ length = 0 }) => {
	return (
		<div className='mb-7 grid grid-cols-1  w-full  place-content-between md:grid-cols-2 lg:grid-cols-2 '>
			<p className='font-bold text-body1 text-foreground-foreground'>
				Explore Advisor's ({length})
			</p>

			<div className=' flex gap-3  md:ml-0  lg:ml-60 col-span-1'>
				<span>
					<SearchBar
						placeholder='Search'
						type='search'
						startContent={<SearchIcon />}
					/>
				</span>
				<span>
					<IconButton
						isIconOnly={true}
						iconName={<SortIcon fill='warning' />}
						variant='bordered'
					/>
				</span>
				<span>
					<IconButton
						isIconOnly={false}
						iconName={<FilterIcon />}
						variant='bordered'
						color='default'
						text='filters'
					/>
				</span>
			</div>
		</div>
	);
};

export default Header;
