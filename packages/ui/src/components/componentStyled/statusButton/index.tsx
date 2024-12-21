'use client';

import { Chip } from '@nextui-org/react';
import type React from 'react';

interface StatusChipProps {
	status: 'active' | 'in-call' | 'offline';
	variant?: 'flat' | 'solid' | 'bordered';
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

export const StatusChip: React.FC<StatusChipProps> = ({
	status,
	variant = 'flat',
	radius = 'sm',
}) => {
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
			radius={radius}
			variant={variant}
			className={`px-1 py-1 ${bg} ${text} text-xs font-medium leading-4 text-center`}
		>
			{label}
		</Chip>
	);
};

StatusChip.displayName = 'StatusChip';
