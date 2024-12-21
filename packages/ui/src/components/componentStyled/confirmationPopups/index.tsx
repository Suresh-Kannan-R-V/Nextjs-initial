'use client';
export const ConfirmationPopups = ({
	icon,
	heading,
	subheading,
	acceptButten,
	cancelButton,
}: {
	icon?: React.ReactNode;
	heading?: string;
	subheading?: string;
	acceptButten?: React.ReactNode;
	cancelButton?: React.ReactNode;
}) => {
	return (
		<div className='bg-white w-[25rem] h-[15.875rem] rounded-borderRadius16px flex flex-col items-center justify-center'>
			<div className=' flex flex-col items-center justify-around h-[14.375rem]'>
				<div>{icon}</div>
				<div className='flex flex-col items-center gap-2'>
					<div className='font-medium text-base '>{heading}</div>
					<div className='font-normal text-sm  text-center w-72 text-[#555555]'>
						{subheading}
					</div>
				</div>
				<div className='flex gap-3'>
					{acceptButten} {cancelButton}
				</div>
			</div>
		</div>
	);
};
