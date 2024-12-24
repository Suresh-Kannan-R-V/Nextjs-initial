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
import { Logoimg, Thumbnailimg } from '../../../../../packages/ui/assets';

type LabelData = {
	label: string;
	values: string[];
};

export default function Page() {
	const labelData: LabelData = {
		label: 'Animals',
		values: ['Dog', 'Cat', 'Bird'],
	};

	return (
		<div className='flex flex-col gap-10 justify-center items-center h-screen mx-auto'>
			<div className='flex gap-5 flex-row'>
				<Inputfield
					id='textfield'
					description='Brief Description of the Query'
					isRequired={true}
				/>
			</div>

			<div className='flex gap-5'>
				<Selectfield
					id='selectfield'
					label={labelData.label}
					options={labelData.values}
					placeholder='hii'
					clearable={false}
					isRequired={true}
				/>
			</div>
			<div>
				<VideoCard
					id='videocard'
					SvgComponent={<Thumbnailimg />}
					videoTiming={321}
				/>
			</div>
		</div>
	);
}
