'use client';

import { Creditsimg, LayerIcon } from '@core/ui/assets';
import { IconButton } from '@core/ui/components';
import Banner from './(components)/banner';
import CardList from './(components)/cardlist';
import TopTitle from './(components)/topTitle';
// import Image from 'next/image';
// import walletpng from '@core/ui/assets/wallet.png';
export default function page() {
	const response = {
		totalcredits: 500,
		cardData: [
			{
				offer: 'Offer name 1',
				price: 50,
				credits: 1000,
				iscustomized: false,
				title: 'Basic',
				description: 'Unlock access to advisor calls by purchasing credits.',
			},
			{
				price: 60,
				credits: 1200,
				iscustomized: false,
				title: 'Standard',
				description: 'Includes premium advisor calls with extra features.',
			},
			{
				offer: 'Offer name 3',
				price: 80,
				credits: 1500,
				iscustomized: false,
				title: 'Premium',
				description: 'Unlock unlimited advisor calls with exclusive benefits.',
			},
			{
				offer: 'Offer name 4',
				price: 100,
				credits: 2000,
				iscustomized: false,
				title: 'Advanced',
				description: 'Access all features with additional customization.',
			},
			{
				price: 120,
				credits: 2500,
				iscustomized: false,
				title: 'Elite',
				description: 'All-inclusive package with priority support.',
			},
			{
				iscustomized: true,
			},
		],
	};
	return (
		<div className='flex justify-center'>
			<span className='flex flex-col w-[70vw] mt-6'>
				<TopTitle />
				<span className='flex flex-col border border-forground-500 rounded-xl '>
					<Banner totalcredits={response?.totalcredits} />
					<div className=' flex flex-col px-6 pt-8 pb-5'>
						<span className='pb-4 font-medium text-base text-foreground-900 capitalize'>
							plans for you {`(${response?.cardData?.length})`}
						</span>
						<span className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
							{response?.cardData?.map((item, index) => (
								<CardList
									key={index}
									offer={item?.offer}
									price={item?.price}
									credits={item?.credits}
									iscustomized={item?.iscustomized}
									title={item?.title}
									description={item?.description}
									icon={
										<IconButton
											iconName={<LayerIcon />}
											isIconOnly
											isCustomized
										/>
									}
								/>
							))}
						</span>
					</div>
				</span>
			</span>
		</div>
	);
}
