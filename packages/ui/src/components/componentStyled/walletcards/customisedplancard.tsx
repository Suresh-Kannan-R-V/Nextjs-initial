import { CustomPlanIcon } from '@core/ui/assets';
import { ButtonStyled } from '@core/ui/components';
import { Card } from '@nextui-org/react';

export const CustomisedPlanCard = () => {
	return (
		<Card className='border-primary-500'>
			<div className='flex flex-col justify-between h-full items-center bg-primary-50 px-9 py-6'>
				<span>
					<CustomPlanIcon />
				</span>
				<span className='text-center font-normal text-sm text-foreground-900'>
					Pay any amount and receive credits accordingly
				</span>
				<span>
					<ButtonStyled
						text='Customize Plan'
						variant='solid'
						width={13}
						weight='500'
						onPress={() => {
							alert('Customize Plan');
						}}
					/>
				</span>
			</div>
		</Card>
	);
};
