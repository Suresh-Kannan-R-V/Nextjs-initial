'use client';
export const BreadCrums = ({
	text,
	name,
}: {
	text?: string;
	name?: string;
}) => {
	return (
		<div className='bg-white w-[17.063rem] font-[500] text-base flex items-center justify-center gap-1 text-[#02111A]'>
			<div className='font-[400] text-sm text-[#555555]'>{text}</div>/
			<div>{name}</div>
		</div>
	);
};
