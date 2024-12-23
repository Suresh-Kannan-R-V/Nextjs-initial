'use client';

import { Card, CardBody, Image } from '@nextui-org/react';
import { Experience, Role } from 'assets';

interface CardItemProps {
	imgurl: string;
	name: string;
	role: string;
	experience: string;
}

export const Cards = ({ imgurl, name, role, experience }: CardItemProps) => {
	return (
		<Card className='w-full sm:max-w-xs lg:max-w-[270px] rounded-xl shadow-lg'>
			<CardBody className='overflow-visible p-4'>
				<Image
					alt={`${name}'s image`}
					className='object-cover rounded-t-xl rounded-b-none w-full h-[7.938rem]'
					src={imgurl}
					width={270}
				/>
				<h4 className='font-semibold mt-4 text-lg'>{name}</h4>
				<div className='flex items-center mt-2'>
					<Role />
					<h3 className='font-light ml-2 text-sm'>{role}</h3>
				</div>
				<div className='flex items-center mt-2 ml-1'>
					<Experience />
					<h3 className='font-light ml-2 text-sm'>{experience}</h3>
				</div>
			</CardBody>
		</Card>
	);
};
