'use client';

import { Card, CardBody, Chip, Tab, Tabs } from '@nextui-org/react';
import type React from 'react';

interface TabBarProps {
	tabs: {
		id: string;
		label: string;
		content: string;
		count?: number;
	}[];
}

export const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
	return (
		<div className='flex w-full flex-col'>
			<Tabs
				classNames={{
					tabList: 'gap-6 w-full rounded-t p-0 border-b border-divider',
					cursor: 'w-full bg-primary',
					tab: 'max-w-fit px-0 h-12',
					tabContent: `
                    text-foreground-800 font-regular group-data-[selected=true]:text-primary group-data-[selected=true]:font-medium
                  `,
				}}
				color='primary'
				variant='underlined'
				items={tabs}
			>
				{(item) => (
					<Tab
						key={item.id}
						title={
							<div className='flex items-center space-x-2'>
								<span>{item.label}</span>
								{item.count !== undefined && item.count > 0 && (
									<Chip size='sm' color='danger'>
										{item.count}
									</Chip>
								)}
							</div>
						}
					>
						<Card>
							<CardBody>{item.content}</CardBody>
						</Card>
					</Tab>
				)}
			</Tabs>
		</div>
	);
};

TabBar.displayName = 'TabBar';
