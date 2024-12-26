'use client';
import { HeartIcon, SpecializedInIcon } from '@core/ui/assets';
import { BreadCrums, IconButton, SpecializedInTag } from '@core/ui/components';
import { Image } from '@nextui-org/image';
import { useState } from 'react';
export default function page() {
	const [like, setLike] = useState(true);
	const breadCrumsData = [
		{ id: 1, text: "Explore RIA's", name: 'Nancy John Sarikha', path: '/' },
	];
	const name = 'Nancy John Sarikha';
	const isActive = true;
	return (
		<div className='m-6'>
			{breadCrumsData.map((crumb, index) => (
				<BreadCrums
					key={crumb.id}
					name={crumb.name}
					path={crumb.path}
					text={crumb.text}
				/>
			))}
			<div className=' rounded-borderRadius12px border-1 border-foreground-500'>
				<div className='bg-gradient-to-r from-blue-200 to-orange-100 h-[8.75rem] pl-6 pt-10 rounded-tr-borderRadius12px rounded-tl-borderRadius12px'>
					<Image
						alt='NextUI hero Image'
						src='https://theshadehome.com/new-design/assets/images/service-window-blind.webp'
						width={170}
						height={150}
					/>
				</div>
				<div className='p-6 pb-[1.375rem] flex justify-end'>
					<IconButton
						iconName={<HeartIcon filled={like} />}
						isBackground={false}
						isIconOnly={true}
						onPress={() => {
							setLike(!like);
						}}
					/>
				</div>
				<div className='pl-6 pb-4 w-[24.313rem]'>
					<SpecializedInTag
						specializedIn='Credit Management'
						icon={<SpecializedInIcon />}
					/>
				</div>
				<div className='flex font-medium gap-[0.625rem] '>
					<p className='pl-6 text-lg '>{name}</p>
					<div className='bg-[#CBF2E0] rounded-borderRadius4px text-footnote flex px-[0.375rem] py-1 items-center text-success-900'>
						{isActive ? 'Active' : 'Inactive'}
					</div>
				</div>
				<div className='bg-slate-100 mx-6 flex justify-between'>
					<div>hi</div>
					<div className='flex item'>
						<p className='font-regular text-body1 text-foreground-800 decoration-foreground-800 decoration-1  line-through'>
							45 credits
						</p>
						<p className='font-medium text-[1.125rem] text-foreground '>
							35 Credits/Min
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
