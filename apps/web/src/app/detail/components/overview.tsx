import { Facebook, Linkedin, Thumbnailimg, Twitter } from '@core/ui/assets';
import { VideoCard } from '@core/ui/components';

type VideoData = {
	id: string;
	image: JSX.Element;
	videoTiming: number;
	description: string;
};
interface SocialLink {
	platform: string;
	url: string;
}
interface OverviewData {
	about: string;
	socialLinks: SocialLink[];
}

const videoData: VideoData[] = [
	{
		id: 'image1',
		image: <Thumbnailimg />,
		videoTiming: 321,
		description:
			'A Quick intro about me and my experience on finance background',
	},
	{
		id: 'image2',
		image: <Thumbnailimg />,
		videoTiming: 215,
		description: 'Journey on credit and  finance manage',
	},
];
export default function Overview({ data }: { data: OverviewData }) {
	return (
		<>
			<div>
				<p className='text-body1 text-foreground-900 font-bold'>Gallery</p>
				<div className='flex gap-6'>
					{videoData.map((video, index) => (
						<VideoCard
							key={video.id}
							id={video.id}
							SvgComponent={video.image}
							videoTiming={video.videoTiming}
							description={video.description}
						/>
					))}
				</div>
				<div className='mt-7 mb-3 text-body1 font-bold'>About me</div>
				<div className='text-body1 font-regular text-foreground-800 leading-7'>
					{data.about}
				</div>
				<div className='flex gap-3 mt-7 mb-10'>
					{data.socialLinks.map((link) => {
						const IconComponent =
							link.platform === 'Facebook'
								? Facebook
								: link.platform === 'Twitter'
									? Twitter
									: Linkedin;
						return (
							<a
								key={link.platform}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={`Visit Nancy's ${link.platform} profile`}
							>
								<IconComponent />
							</a>
						);
					})}
				</div>
			</div>
		</>
	);
}
