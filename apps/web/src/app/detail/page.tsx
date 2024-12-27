'use client';

import { BreadCrums, TabBar } from '@core/ui/components';
import OverallStats from './components/overallStats';
import Overview from './components/overview';
import Profile from './components/profile';
import Review from './components/review';
import SheduleCall from './components/scheduleCall';
import Page from './components/similarprofiles';

export default function page() {
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

	const breadCrumsData = [
		{ id: 1, text: "Explore RIA's", name: 'Nancy John Sarikha', path: '/' },
	];
	return (
		<div className='m-6'>
			<div className='mb-4'>
				{breadCrumsData.map((crumb, index) => (
					<BreadCrums
						key={crumb.id}
						name={crumb.name}
						path={crumb.path}
						text={crumb.text}
					/>
				))}
			</div>
			<div className='grid grid-cols-5 gap-5 mb-7'>
				<div className='col-span-3 rounded-borderRadius12px border-1 border-foreground-500 '>
					<Profile />
					<div className='ml-6'>overview / Reviews & Ratings</div>

					<div className='ml-6'>
						<TabBar tabs={tabData} width={49} />
					</div>
				</div>
				<div className='col-span-2 flex flex-col gap-4'>
					<OverallStats />
					<SheduleCall />
				</div>
			</div>
			<div className='mt-6'>
				<div>
					<Page />
				</div>
			</div>
		</div>
	);
}
