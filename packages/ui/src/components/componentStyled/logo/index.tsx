'use client';
import { Logoimg } from '../../../../assets/index';

export const Logo = ({
	image,
	Title,
}: { image?: React.ReactNode; Title: string }) => {
	return (
		<div className='flex items-center space-x-2'>
			{/* Image container */}
			<div className='flex items-center justify-center w-8 h-8 rounded-sm'>
				{image}
			</div>
			{/* Title */}
			{Title && (
				<h1 className='text-lg font-semibold text-gray-800'>{Title}</h1>
			)}
		</div>
	);
};
