'use client';

import { ButtonComp } from '@core/ui/components';

export default function Page() {
	return (
		<div className='flex flex-col min-h-screen bg-[#F7F9FF] mx-auto'>
			<ButtonComp value={4.5} color='success' iconSize={18} />
		</div>
	);
}
