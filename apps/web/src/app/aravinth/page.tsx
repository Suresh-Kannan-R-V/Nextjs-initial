'use client';
import { Inputfield, Selectfield, VideoCard } from '@core/ui/components';
import { useState } from 'react';
import { Thumbnailimg } from '../../../../../packages/ui/assets';

type LabelData = {
	label: string;
	values: string[];
};

export default function Page() {
	const labelData: LabelData = {
		label: 'Animals',
		values: ['Dog', 'Cat', 'Bird'],
	};

	const [value, setvalue] = useState('');
	const [option, setoption] = useState('');
	const handleChange = (newValue: string) => {
		setvalue(newValue);
		console.log(newValue);
	};
	const handleselect = (newvalue: string) => {
		setoption(newvalue);
		console.log(newvalue);
	};

	return (
		<div className='flex flex-col gap-10 justify-center items-center h-screen mx-auto'>
			<div className='flex gap-5 flex-row'>
				<Inputfield
					id='textfield'
					description='Brief Description of the Query'
					isRequired={true}
					onchange={handleChange}
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
					onchange={handleselect}
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
