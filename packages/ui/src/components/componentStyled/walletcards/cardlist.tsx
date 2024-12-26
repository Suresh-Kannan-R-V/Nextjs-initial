import { CustomPlanIcon } from '@core/ui/assets';
import { ButtonStyled } from '@core/ui/components';
import { Card } from '@nextui-org/react';
interface cardProps {
	icon?: React.ReactNode;
	title?: string;
	description?: string;
	credits?: number;
	offer?: string;
	price?: number;
	iscustomized?: boolean;
}
export function CardList(props: cardProps) {
	const { iscustomized, price, offer, credits, description, title, icon } =
		props;
	return (
		<>
			<Card>
				<div className='flex flex-col justify-between h-full'>
					<span className='flex flex-col p-5 justify-between h-full'>
						<span className='flex flex-col justify-between'>
							<span className='pb-4'>{icon}</span>
							<span className='font-medium text-sm text-foreground-900 capitalize'>
								{title}
							</span>
							<span className='font-normal text-sm text-foreground-800 pt-2'>
								{description}
							</span>
						</span>
						<span className='flex flex-row gap-2 pt-4'>
							{credits && (
								<span className='min-w-24 py-1 px-[6px] font-medium text-xs capitalise flex items-center justify-center bg-primary-200 rounded-xl text-primary-800'>
									{credits} Credits
								</span>
							)}
							{offer && (
								<span className='min-w-24 py-1 px-[6px] font-medium text-xs capitalise flex items-center justify-center rounded-xl bg-success-200 text-success-900'>
									{offer}
								</span>
							)}
						</span>
					</span>
					<span>
						<span className='flex flex-row justify-between bg-primary-50 p-5 items-center'>
							<span className='font-medium text-base text-foreground-900 uppercase'>
								inr {price}
							</span>
							<span className='font-medium text-base text-primary-500 capitalize cursor-pointer'>
								buy plan
							</span>
						</span>
					</span>
				</div>
			</Card>
		</>
	);
}
