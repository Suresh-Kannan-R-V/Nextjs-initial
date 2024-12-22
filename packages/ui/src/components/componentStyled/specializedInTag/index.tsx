'use client';
export const SpecializedInTag = ({
	icon,
	specializedIn,
}: { icon?: React.ReactNode; specializedIn?: string }) => {
	return (
		<div className='w-[18.813rem] h-10 px-[0.625rem] flex items-center rounded-tl-lg rounded-bl-lg gap-1 font-[400] text-sm  bg-gradient-to-r from-[#F8971F1F] to-[#F8F8F83D]'>
			<div>{icon}</div>
			<div>Specialized in</div>
			<div className='font-[500]'>{specializedIn}</div>
		</div>
	);
};
