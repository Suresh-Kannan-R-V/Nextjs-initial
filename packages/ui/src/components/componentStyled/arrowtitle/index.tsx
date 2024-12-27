'use client';
import { ForwardArrowIcon, ReverseArrowIcon } from 'assets';
import { useState } from 'react';
import { IconButton } from '../iconButton';

interface ArrowTitleProps {
	title: string;
	data: Array<React.ReactNode>;
	count: number;
}

export const ArrowTitle: React.FC<ArrowTitleProps> = (props) => {
	const { title, data = [], count } = props;
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(count);

	const handleNext = () => {
		if (end < data.length) {
			setStart(start + count);
			setEnd(end + count);
		}
	};

	const handlePrev = () => {
		if (start > 0) {
			setStart(start - count);
			setEnd(end - count);
		}
	};

	return (
		<div>
			<span className='flex items-center justify-between'>
				<span className='regular text-body2 font-popIns text-foreground-900'>
					{title}
				</span>
				<span className='flex gap-1'>
					<span>
						<ReverseArrowIcon isdisabled={start === 0} onClick={handlePrev} />
					</span>
					<span>
						<ForwardArrowIcon
							isdisabled={end >= data?.length}
							onClick={handleNext}
						/>
					</span>
				</span>
			</span>
			<div className='data-list flex justify-around'>
				{data?.slice(start, end)?.map((item, index) => (
					<div key={index} className='data-item'>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};
