import { SearchIcon } from '@core/ui/assets';
import { SearchBar, StatusChip, TabBar } from '@core/ui/components';
import Overview from '../detail/components/overview';
import Review from '../detail/components/review';

export default function Page() {
	const overviewData = {
		about:
			'Hello! I’m Nancy, an experienced investment advisor with over 5 years in the financial industry, specializing in personalized investment strategies, wealth management, and financial planning. My goal is to help you make informed decisions that align with your financial goals and risk tolerance. I’m here to guide you through various investment opportunities, from stocks and mutual funds to tax-saving options and retirement planning. Whether you’re a beginner or an experienced investor, I’ll provide the insights and tools you need to grow your wealth confidently.',
		socialLinks: [
			{ platform: 'Facebook', url: 'https://facebook.com/nancy' },
			{ platform: 'LinkedIn', url: 'https://linkedin.com/in/nancy' },
			{ platform: 'Twitter', url: 'https://twitter.com/nancy' },
		],
	};
	const Reviewdata = {
		rating: 4.5,

		starDistribution: {
			5: 2,
			4: 2,
			3: 1,
			2: 1,
			1: 0,
		},
	};

	const tabData = [
		{
			id: 'overview',
			label: 'Overview',
			content: <Overview data={overviewData} />,
		},
		{
			id: 'reviews',
			label: 'Reviews & Ratings',
			content: <Review rating={Reviewdata} />,
			count: 5,
		},
	];

	return (
		<div className='flex flex-col gap-10 justify-center align-middle h-screen mx-auto'>
			<div className='flex gap-4 py-3'>
				<StatusChip status='active' />
				<StatusChip status='in-call' />
				<StatusChip status='offline' />
				<SearchBar
					placeholder='Search ...'
					type='search'
					startContent={
						<SearchIcon className='text-gray-500 pointer-events-none' />
					}
					isClearable
				/>
			</div>
			<div className='flex gap-5 flex-row w-96'>
				<TabBar tabs={tabData} width={60} />
			</div>
		</div>
	);
}
