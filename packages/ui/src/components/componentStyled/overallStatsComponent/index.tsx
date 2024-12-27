'use client';
interface overallStatsComponentProps {
	icon?: React.ReactNode;
	state?: string;
	value?: string;
	color?: string;
}
export const OverallStatsComponent = ({
	icon,
	state,
	value,
	color,
}: overallStatsComponentProps) => {
	return (
		<div className='flex gap-[0.875rem]'>
			<div className={`bg-${color} p-[0.625rem] rounded-borderRadius8px`}>
				{icon}
			</div>
			<div className='flex flex-col'>
				<p className='font-regular text-body2 text-background-800'>{state}</p>
				<p className='mt-[0.125rem] font-medium text-body1'>{value}</p>
			</div>
		</div>
	);
};
