'use client';

import { Experience, Role } from '@core/ui/assets';
import { RatingChip } from '@core/ui/components';
import { Card, CardBody, Image } from '@nextui-org/react';

interface CardItemProps {
	imgurl: string;
	name: string;
	role: string;
	experience?: string;
	value: number;
	iconSize?: number;
	id?:string;
}

export const Cards = ({
	imgurl,
	name,
	role,
	experience,
	value,
	iconSize,
        id
}: CardItemProps) => {
	return (
		<Card className=' rounded-[0.75rem] border-none shadow-none' id={id}>
			<CardBody className=' p-2'>
				<Image
					alt={`${name}'s image`}
					className='object-cover rounded-t-[0.5rem] rounded-b-none w-[14rem] h-[7.938rem]'
					src={imgurl}
				/>
				<div className='p-2 mt-2'>
					<div className='flex justify-between'>
						<span className='text-body1 medium capitalize '>{name}</span>
						<RatingChip value={value} iconSize={iconSize} />
					</div>
					<div className='mt-4'>
						<div className='flex items-center space-x-2'>
							<Role />
							<h3 className='font-regular text-body2 text-foreground-800'>
								{role}
							</h3>
						</div>
						<div className='flex items-center ml-1 space-x-2 mt-2'>
							<Experience />
							<h3 className='font-regular text-body2 text-foreground-800'>
								{experience}
							</h3>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};
