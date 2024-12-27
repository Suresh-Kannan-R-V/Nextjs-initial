'use client';

import { Chip, Tab, Tabs } from '@nextui-org/react';

interface TabBarProps {
	id?: string;
	tabs: {
		id: string;
		label: string;
		content: React.ReactNode;
		count?: number;
	}[];
	width?: number;
	color?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger';
	variant?: 'solid' | 'underlined' | 'bordered' | 'light';
}

export const TabBar = ({
	id,
	tabs,
	width,
	color = 'secondary',
	variant = 'underlined',
}: TabBarProps) => {
	return (
		<div
			id={id}
			className='flex flex-col'
			style={{ width: width ? `${width}rem` : 'auto' }}
		>
			<Tabs
				classNames={{
					tabList: 'gap-6 w-full rounded-t p-0 border-b border-divider',
					cursor: 'w-full bg-primary',
					tab: 'max-w-fit px-0 h-12',
					tabContent: `text-foreground-800 font-regular group-data-[selected=true]:text-primary group-data-[selected=true]:font-medium
				    `,
				}}
				color={color}
				variant={variant}
				items={tabs}
			>
				{tabs?.map((tab, index) => (
					<Tab
						key={tab?.id}
						title={
							<div className='flex items-center space-x-2'>
								<span>{tab.label}</span>
								{tab.count !== undefined && tab.count > 0 && (
									<Chip size='sm' color='danger'>
										{tab?.count}
									</Chip>
								)}
							</div>
						}
					>
						<div>
							<div>{tab?.content}</div>
						</div>
					</Tab>
				))}
			</Tabs>
		</div>
	);
};

TabBar.displayName = 'TabBar';
