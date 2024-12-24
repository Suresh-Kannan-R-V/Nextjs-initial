'use client';
import { RightArrow } from 'assets';
import { useRouter } from 'next/navigation';
interface BreadCrumsProps {
	text?: string;
	name?: string;
	path?: string;
}
export const BreadCrums = ({ text, name, path }: BreadCrumsProps) => {
	const router = useRouter();

	const handleNavigate = () => {
		if (path) {
			router.push(path);
		} else {
			router.back();
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleNavigate();
		}
	};

	return (
		<div
			className='bg-background h-[fit-content] font-medium text-body1 flex items-center justify-center gap-1 text-background-900 cursor-pointer'
			onClick={handleNavigate}
			onKeyDown={handleKeyDown}
		>
			<div className=' p-[0.375rem] rounded-borderRadius24px border-[0.047rem] border-foreground-500 mr-1'>
				<RightArrow />
			</div>
			<div className='font-regular text-sm text-foreground-800'>{text}</div>/
			<div>{name}</div>
		</div>
	);
};
