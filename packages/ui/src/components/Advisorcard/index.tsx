'use client';
import { Tag } from '@components/componentStyled/namingtag';
import { HeartIcon } from '@core/ui/assets';
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

	const handlePress = () => {
		serIsliked(!isliked);
	};

	return (
		<Card
			className='w-[24rem] h-[31.81rem]'
			isPressable
			shadow='sm'
			onPress={() => console.log('item pressed')}
		>
			<CardBody className='overflow-visible p-2 relative'>
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
					top='0.9rem'
					left='0.9rem'
				/>
				<div>
					<HeartIcon onClick={handlePress} filled={isliked} />
				</div>
			</CardBody>
		</Card>
	);
};
