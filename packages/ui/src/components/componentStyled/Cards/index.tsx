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
		<Card className=' rounded-[0.75rem] border-none'>
			<CardBody className=' p-2'>
				<Image
					alt={`${name}'s image`}
					className='object-cover rounded-t-[0.5rem] rounded-b-none w-[14rem] h-[7.938rem]'
					src={imgurl}
				/>
				<div className='p-2 mt-2'>
					<h4 className='font-medium text-body1-900'>{name}</h4>
					<div className='mt-4'>
						<div className='flex items-center space-x-2'>
							<Role />
							<h3 className='font-regular text-body2-800'>{role}</h3>
						</div>
						<div className='flex items-center ml-1 space-x-2 mt-2'>
							<Experience />
							<h3 className='font-regular text-body2-800'>{experience}</h3>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};
