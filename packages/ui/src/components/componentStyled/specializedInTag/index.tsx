'use client';
export const SpecializedInTag = ({
	icon,
	specializedIn,
}: { icon?: React.ReactNode; specializedIn?: string }) => {
	return (
		<div className='w-[18.813rem] h-10 px-[0.625rem] flex items-center rounded-tl-borderRadius8px rounded-bl-borderRadius8px gap-1 font-regular text-body2  bg-gradient-to-r from-[#F8971F1F] to-[#F8F8F83D]'>
			{icon}
			<p>Specialized in</p>
			<p className='font-medium'>{specializedIn}</p>
		</div>
	);
};
