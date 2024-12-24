'use client';
import { Button, Card, CardBody } from '@nextui-org/react';
import { Play } from 'assets';
import { useState } from 'react';
import { Videopopup } from '../videopopup';
interface VideoCardProps {
	id: string;
	SvgComponent: React.ReactNode;
	videoTiming: number;
}
const formatToMinutesSeconds = (totalSeconds: number): string => {
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export function VideoCard({ id, SvgComponent, videoTiming }: VideoCardProps) {
	const [showPopup, setShowPopup] = useState(false);

	const handleClick = (e?: React.MouseEvent<HTMLDivElement>) => {
		console.log('Video card clicked');
		setShowPopup(true);
	};
	return (
		<>
			<div className=' rounded-2xl  relative' id={id}>
				<div className='p-0'>
					<div>{SvgComponent}</div>
					<div
						onClick={handleClick}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								handleClick();
							}
						}}
						className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-white text-regular'
					>
						<div className='w-6 h-6 flex items-center justify-center bg-blue-500 rounded-full'>
							<Play />
						</div>
						Play Video
					</div>
					<span className='absolute bottom-2 right-2 bg-white bg-opacity-70 text-black text-xs font-bold px-2 py-1 rounded-md'>
						{formatToMinutesSeconds(videoTiming)}
					</span>
				</div>
			</div>
			{showPopup && (
				<Videopopup
					SvgComponent={SvgComponent}
					onclose={() => setShowPopup(false)}
				/>
			)}
		</>
	);
}
