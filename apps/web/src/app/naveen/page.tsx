import { SearchIcon } from '@core/ui/assets';
import { SearchBar, StatusChip, TabBar } from '@core/ui/components';

export default function Page() {
	const tabData = [
		{
			id: 'overview',
			label: 'Overview',
			content: 'hello world',
		},
		{
			id: 'reviews',
			label: 'Reviews & Ratings',
			content: 'Hii ',
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
				<TabBar tabs={tabData} width={30} />
			</div>
		</div>
	);
}
