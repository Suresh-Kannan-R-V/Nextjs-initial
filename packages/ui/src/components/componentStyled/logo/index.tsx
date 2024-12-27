'use client';

export const Logo = ({
	id,
	image,
	Title,
}: { id?: string; image?: React.ReactNode; Title: string }) => {
	return (
		<div className='flex items-center space-x-2' id={id}>
			{/* Image container */}
			<div className='flex items-center justify-center w-8 h-8 rounded-sm'>
				{image}
			</div>
			{/* Title */}
			{Title && (
				<h1 className='text-lg font-semibold text-background-900'>{Title}</h1>
			)}
		</div>
	);
};
Logo.displayName = 'Logo';
