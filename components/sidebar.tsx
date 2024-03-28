'use client';

import React, { useContext } from 'react';

import { cn } from '@/lib/utils';
import { MainNav } from '@/components/header/main-nav';
import { MenuContext } from '@/providers/menu-provider';

export const Sidebar = () => {
	const [isActive] = useContext(MenuContext);

	return (
		<aside
			className={cn(
				'fixed -left-[400px] z-20 h-full w-[400px] px-4 pt-28 pb-8 bg-black transition-all',
				isActive && 'left-0',
			)}
		>
			<div className="flex flex-col justify-between h-full">
				<MainNav styles="h-full flex-col flex-auto gap-y-4" />
			</div>
		</aside>
	);
};
