'use client';
import {
	ButtonStyled,
	RatingChip,
	SpecializedInTag,
	StatusChip,
	Tag,
} from '@components/componentStyled';
import { PepoleSpeciality } from '@components/componentStyled/peoplespecialityInfo';

import {
	HeartIcon,
	LanguageIcon,
	SpecializedInIcon,
	Vector,
} from '@core/ui/assets';
import { Card, CardBody, Image } from '@nextui-org/react';
import { useState } from 'react';

export const AdvisorCard = () => {
	const [isliked, serIsliked] = useState(false);
	const list = [
		{
			title: 'Banana',
			img: '/images/fruit-7.jpeg',
			price: '$7.50',
		},
	];
	const data = ['Finance Management', 'Credit Advise', 'sdfsdf', 'dsfs'];
	const data1 = ['Tamil', 'english'];

	const handlePress = () => {
		serIsliked(!isliked);
	};
	// w-[24rem] h-[31.81rem]
	return (
		<Card
			className=' border-1  h-[fit-content]  '
			isPressable
			style={{}}
			shadow='none'
			onPress={() => console.log('item pressed')}
		>
			<CardBody className='  p-2 relative      '>
				<Image
					alt=''
					className='w-full object-cover h-[200px] rounded-t-borderRadius10px rounded-b-none'
					radius='lg'
					shadow='sm'
					src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
					width='100%'
				/>
				<Tag
					name='Top Rated'
					position='absolute'
					zIndex={20}
					top='0.9'
					left='0.9'
				/>
				<div className='flex items-center justify-between mt-3'>
					<SpecializedInTag
						icon={<SpecializedInIcon />}
						specializedIn='Credit Management'
					/>
					<HeartIcon onClick={handlePress} filled={isliked} />
				</div>
				<div className='flex items-center gap-3 mt-3 mb-2'>
					<p className='text-body1 font-medium text-foreground-foreground'>
						Nancy John Sarikha
					</p>
					<StatusChip status='active' radius='sm' />
				</div>
				<div className='flex'>
					<p className='text-body2 font-medium  text-foreground-800 '>
						3 Years Experience <span className='px-1'>|</span> 24 Calls Attended
					</p>
				</div>
				<hr className='mt-4 mb-3' />
				<div className='flex flex-col gap-2 mt-2  '>
					<PepoleSpeciality
						icon={<Vector width={10.69} height={15.75} fill='555555' />}
						title={data}
					/>
					<PepoleSpeciality
						icon={<LanguageIcon width={10.69} height={15.75} fill='#555555' />}
						title={data1}
					/>
				</div>
				<div className='flex flex-row justify-between mt-3 px-2 py-4 bg-primary-50 rounded-borderRadius8px'>
					<div>
						<p className='line-through text-footnote text-foreground-800'>
							45 credicts
						</p>
						<p className='text-body1 text-primary-500'>35 Credicts /Min</p>
					</div>
					<div className='flex gap-3'>
						<ButtonStyled
							variant='bordered'
							text='Chat'
							padding='1'
							radius='md'
							width={5.625}
							weight='medium'
						/>
						<ButtonStyled
							variant='solid'
							text='call'
							radius='md'
							width={5.625}
							weight='medium'
						/>
					</div>
				</div>
				<RatingChip
					position='absolute'
					top={280}
					right={20}
					zIndex={20}
					value={4.5}
				/>
			</CardBody>
		</Card>
	);
};
