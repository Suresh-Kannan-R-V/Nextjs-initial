'use client';

import { Chip } from '@nextui-org/react';
import type React from 'react';

interface StatusChipProps {
	id?: string;
	status: 'active' | 'in-call' | 'offline';
	variant?: 'solid';
	radius?: 'sm' | 'md';
}

export const StatusChip = ({
	id,
	status,
	variant = 'solid',
	radius = 'sm',
}: StatusChipProps) => {
	const statusStyles = {
		active: {
			bg: 'bg-status-statusColor-active',
			text: 'text-status-textColor-active ',
			label: 'Active',
		},
		'in-call': {
			bg: 'bg-status-statusColor-inCall',
			text: 'text-status-textColor-inCall',
			label: 'In another Call',
		},
		offline: {
			bg: 'bg-status-statusColor-offline',
			text: 'text-status-textColor-offline',
			label: 'Offline',
		},
	};
	const { bg, text, label } = statusStyles[status];
	return (
		<Chip
			id={id}
			radius={radius}
			variant={variant}
			className={`px-1 py-1 ${bg} ${text} text-xs font-medium leading-4 text-center`}
		>
			{label}
		</Chip>
	);
};

StatusChip.displayName = 'StatusChip';
