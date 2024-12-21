'use client';

import { Chip } from '@nextui-org/react';
import type React from 'react';

interface StatusChipProps {
	status: 'active' | 'in-call' | 'offline';
}

export const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
	const statusStyles = {
		active: {
			bg: 'bg-[#CBF2E0]',
			text: 'text-[#008545]',
			label: 'Active',
		},
		'in-call': {
			bg: 'bg-[#FFDAD3]',
			text: 'text-[#DF3813]',
			label: 'In another Call',
		},
		offline: {
			bg: 'bg-[#E6E8E9]',
			text: 'text-[#4E585E]',
			label: 'Offline',
		},
	};

	const { bg, text, label } = statusStyles[status];

	return (
		<Chip
			radius='sm'
			className={`px-1 py-1 ${bg} ${text} text-xs font-medium leading-4 text-center`}
			variant='flat'
		>
			{label}
		</Chip>
	);
};

export default StatusChip;
