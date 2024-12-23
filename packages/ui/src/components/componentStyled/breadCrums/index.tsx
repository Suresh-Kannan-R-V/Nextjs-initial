'use client';
import { useRouter } from 'next/navigation';

export const BreadCrums = ({
	text,
	name,
}: {
	text?: string;
	name?: string;
}) => {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleBack();
		}
	};

	return (
		<div
			className='bg-background h-[fit-content] font-medium text-body1 flex items-center justify-center gap-1 text-[#02111A] cursor-pointer'
			onClick={handleBack}
			onKeyDown={handleKeyDown}
		>
			<div className='font-[400] text-sm text-foreground-800'>{text}</div>/
			<div>{name}</div>
		</div>
	);
};
