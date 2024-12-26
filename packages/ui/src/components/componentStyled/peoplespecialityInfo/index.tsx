'use client';
import { Vector } from '@core/ui/assets';

interface props {
	icon: React.ReactNode;
	title: string[];
}

export const PepoleSpeciality: React.FC<props> = ({ icon, title }) => {
	const displayContent = title.slice(0, 2) ?? [];
	const remainingContent = title.length - displayContent.length;

	const content = displayContent?.map((data, index) => (
		<p key={data}>
			{data ?? 0} {index < displayContent.length - 1 && ','}
		</p>
	));

	return (
		<div className='flex  w-[fit-content] items-center    '>
			{icon}{' '}
			<span className='flex pl-2 text-body2 font-regular text-foreground-800 whitespace-nowrap'>
				{content?.length === 0 ? 'null' : content}{' '}
				{remainingContent !== 0 && (
					<p className='pl-1 text-body2 font-medium text-primary-900'>
						+{remainingContent} more
					</p>
				)}
			</span>
		</div>
	);
};
