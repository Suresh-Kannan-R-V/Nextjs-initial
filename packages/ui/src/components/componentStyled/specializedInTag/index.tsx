'use client';
interface SpecializedInTagProps {
	icon?: React.ReactNode;
	specializedIn?: string;
}
export const SpecializedInTag = ({
	icon,
	specializedIn,
}: SpecializedInTagProps) => {
	return (
		<div className=' py-[0.625rem] px-[0.625rem] flex items-center rounded-tl-borderRadius8px rounded-bl-borderRadius8px gap-1 font-regular text-body2 text-secondary-900  bg-gradient-to-r from-secondary-200 to-secondary-100 '>
			{icon}
			<p>Specialized in</p>
			<p className='font-medium'>{specializedIn}</p>
		</div>
	);
};
