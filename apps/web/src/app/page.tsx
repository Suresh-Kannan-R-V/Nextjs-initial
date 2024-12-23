'use client';
import {
	ButtonStyled,
	Inputfield,
	Logo,
	Selectfield,
	VideoCard,
} from '@core/ui/components';
import { Button } from '@nextui-org/button';
import { Dropdown } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { Logoimg, Thumbnailimg } from '../../../../packages/ui/assets';

type LabelData = {
	label: string;
	values: string[];
};

export default function Page() {
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const labelData: LabelData = {
		label: 'Animals',
		values: ['Dog', 'Cat', 'Bird'],
	};

	return (
		<div className='flex flex-col gap-10 justify-center items-center h-screen mx-auto'>
			<div className='flex gap-5 flex-row'>
				<Inputfield description='Brief Description of the Query' />
			</div>

			<div className='flex gap-5'>
				<Selectfield label={labelData.label} options={labelData.values} />
			</div>
			<div>
				<VideoCard SvgComponent={<Thumbnailimg />} videoTiming='05:21' />
			</div>
		</div>
	);
}
