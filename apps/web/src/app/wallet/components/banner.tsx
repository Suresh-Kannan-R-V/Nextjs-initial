import { CoinsGroup } from '@core/ui/assets';
import { BannerObjets } from './bannerobjects';
interface BannerProps {
	totalcredits: number;
}
export default function Banner(props: BannerProps) {
	const { totalcredits } = props;
	return (
		<div className='h-32 bg-primary-900 flex justify-between rounded-t-xl items-center relative overflow-hidden'>
			<span className='text-foreground-50 flex flex-col mx-10 gap-3'>
				<span className='capitalise body2'>Your Wallet Available Balance</span>
				<span className='semibold text-xl text-foreground-50 capitalize'>
					{totalcredits} credits
				</span>
			</span>
			<span className='mr-9'>
				<CoinsGroup />
			</span>
			<span className='absolute -left-6 -top-5'>
				<BannerObjets />
			</span>
		</div>
	);
}
