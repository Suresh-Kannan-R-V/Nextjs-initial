'use client';
import {
	HeartIcon,
	LanguageIcon,
	MailIcon,
	SpecializedInIcon,
	Vector,
} from '@core/ui/assets';
import {
	ButtonStyled,
	IconButton,
	PepoleSpeciality,
	RatingChip,
	SpecializedInTag,
} from '@core/ui/components';
import { Image } from '@nextui-org/image';
import { useState } from 'react';
export default function Profile() {
	const [like, setLike] = useState(true);
	const name = 'Nancy John Sarikha';
	const isActive = true;
	const year = 5;
	const skillData = [
		{
			id: 1,
			icon: <MailIcon width={10.69} height={15.75} fill='555555' />,
			data: [`${year} Years Experience`],
		},
		{
			id: 2,
			icon: <Vector width={10.69} height={15.75} fill='555555' />,
			data: ['Finance Management', 'Credit Advise', 'sdfsdf', 'dsfs'],
		},
		{
			id: 3,
			icon: <LanguageIcon width={10.69} height={15.75} fill='#555555' />,
			data: ['Tamil', 'english'],
		},
	];
	return (
		<div>
			<div className='bg-gradient-to-r from-content1 to-content1-100 h-[8.75rem] pl-6 pt-10 rounded-tr-borderRadius12px rounded-tl-borderRadius12px'>
				<div className='relative'>
					<Image
						alt='NextUI hero Image'
						src='https://theshadehome.com/new-design/assets/images/service-window-blind.webp'
						width={170}
						height={150}
						className='object-cover'
					/>
					<div className='absolute bottom-3 left-3 z-10'>
						<RatingChip value={4.5} />
					</div>
				</div>
			</div>
			<div className='pr-6 pt-6 pb-[0.5rem] flex justify-end'>
				<IconButton
					iconName={<HeartIcon filled={like} />}
					isBackground={false}
					isIconOnly={true}
					onPress={() => {
						setLike(!like);
					}}
				/>
			</div>
			<div className='pl-6 pb-4 grid grid-cols-12 '>
				<div className='col-span-5'>
					<SpecializedInTag
						specializedIn='Credit Management'
						icon={<SpecializedInIcon />}
					/>
				</div>
			</div>
			<div className='flex font-medium gap-[0.625rem] '>
				<p className='pl-6 text-lg '>{name}</p>
				<div className='bg-[#CBF2E0] rounded-borderRadius4px text-footnote flex px-[0.375rem] py-1 items-center text-success-900'>
					{isActive ? 'Active' : 'Inactive'}
				</div>
			</div>
			<div className=' mx-6 my-[0.375rem] flex justify-between'>
				<div>
					{skillData?.map((skill, index) => (
						<div key={skill.id} className='flex flex-col my-[0.375rem]'>
							<PepoleSpeciality icon={skill.icon} title={skill.data} />
						</div>
					))}
				</div>
				<div className='gap-6 flex flex-col'>
					<div className='flex items-center gap-2 justify-end'>
						<p className='font-regular text-body1 text-foreground-800 decoration-foreground-800 decoration-1  line-through'>
							45 credits
						</p>
						<p className='font-medium  text-[1.125rem] text-foreground '>
							35 Credits/Min
						</p>
					</div>
					<div className='flex gap-3'>
						<ButtonStyled
							variant='bordered'
							text='Chat'
							padding='0.75'
							radius='md'
							width={5}
							weight='medium'
							size='lg'
							fontsize='lg'
						/>
						<ButtonStyled
							variant='solid'
							text='Call Now'
							padding='0.75'
							radius='md'
							width={10}
							weight='medium'
							size='lg'
							fontsize='lg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
