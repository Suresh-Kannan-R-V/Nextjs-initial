'use client';
import { Button, Card, CardBody } from '@nextui-org/react';
import { Play } from 'assets';
interface VideoCardProps {
	SvgComponent: React.ReactNode; // Accepts React components or JSX
	videoTiming: string | number; // Video duration
}

export function VideoCard({ SvgComponent, videoTiming }: VideoCardProps) {
	return (
		<Card className='max-w-md rounded-lg shadow-md relative'>
			<CardBody className='p-0'>
				{/* SVG as Background */}
				<div className='w-full h-48'>{SvgComponent}</div>

				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-white '>
					<div className='w-6 h-6 flex items-center justify-center bg-blue-500 rounded-full'>
						<Play />
					</div>
					Play Video
				</div>

				{/* Video Timing */}
				<span className='absolute bottom-2 right-2 bg-white bg-opacity-70 text-black text-xs font-bold px-2 py-1 rounded-md'>
					{videoTiming}
				</span>
			</CardBody>
		</Card>
	);
}
