'use client';

import { ButtonStyled } from '../button';
interface ConfirmationPopupsProps {
	icon?: React.ReactNode;
	heading?: string;
	subheading?: string;
	acceptButtenText?: string;
	cancelButtonText?: string;
	onClickAcceptButten?: () => void;
	onClickCancelButton?: () => void;
}
export const ConfirmationPopups = ({
	icon,
	heading,
	subheading,
	acceptButtenText,
	cancelButtonText,
	onClickAcceptButten,
	onClickCancelButton,
}: ConfirmationPopupsProps) => {
	return (
		<div className='bg-background w-[25rem] h-[15.875rem] rounded-borderRadius16px flex flex-col items-center justify-center'>
			<div className=' flex flex-col items-center justify-around h-[14.375rem]'>
				<div>{icon}</div>
				<div className='flex flex-col items-center gap-2'>
					<div className='font-medium text-body1 '>{heading}</div>
					<div className='font-regular text-body2  text-center w-72 text-foreground-800'>
						{subheading}
					</div>
				</div>
				<div className='flex gap-3'>
					{
						<ButtonStyled
							text={cancelButtonText}
							onClick={onClickCancelButton}
							variant='bordered'
							size='md'
						/>
					}
					{
						<ButtonStyled
							text={acceptButtenText}
							onClick={onClickAcceptButten}
							variant='solid'
							size='md'
						/>
					}
				</div>
			</div>
		</div>
	);
};
