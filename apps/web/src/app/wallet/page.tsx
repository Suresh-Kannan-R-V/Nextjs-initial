'use client';

import { CoinsGroup, HeartIcon } from '@core/ui/assets';
import { IconButton } from '@core/ui/components';
import CardList from './cardlist';
// import Image from 'next/image';
// import walletpng from '@core/ui/assets/wallet.png';
export default function page() {
	return (
		<div className='flex justify-center'>
			<span className='flex flex-col w-[80vw] mt-6'>
				<div className='flex justify-between h-4 mb-5'>
					<span className='semibold body1 text-foreground-900 capitalize'>
						wallet
					</span>
					<span className='medium body2 text-primary-500 cursor-pointer capitalize'>
						view terms & conditions
					</span>
				</div>
				<span className='flex flex-col border border-forground-500 rounded-xl '>
					<div className='h-32 bg-primary-900 flex justify-between rounded-t-xl items-center'>
						<span className='text-foreground-50 flex flex-col mx-10 gap-3'>
							<span className='capitalise body2'>
								Your Wallet Available Balance
							</span>
							<span className='semibold text-xl text-foreground-50 capitalize'>
								500 credits
							</span>
						</span>
						<span className='mr-9'>
							<CoinsGroup />
						</span>
						{/* <span> */}
						{/* image */}
						{/* <Image src={walletpng} alt='Wallet' width={40} height={40} /> */}
						{/* </span> */}
					</div>
					<div>
						<span>plans for you </span>
						<span>
							<CardList
								offer='offer name'
								price={50}
								credits={1000}
								iscustomized={false}
								title='Basic'
								icon={
									<IconButton
										iconName={<HeartIcon fill='warning' />}
										color='warning'
										isIconOnly
										variant='faded'
									/>
								}
								description='Unlock access to advisor calls by purchasing credits.'
							/>
						</span>
					</div>
				</span>
			</span>
		</div>
	);
}
