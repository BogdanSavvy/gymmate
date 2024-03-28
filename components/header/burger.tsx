'use client';

import React, { useContext } from 'react';

import { MenuContext } from '@/providers/menu-provider';
import { cn } from '@/lib/utils';

export const Burger = () => {
	const [isActive, changeActiveState] = useContext(MenuContext);

	return (
		<button
			onClick={changeActiveState}
			className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm p-2 bg-transparent md:hidden"
		>
			<div className="space-y-2">
				<span
					className={cn(
						'block h-1 w-5 origin-center rounded-full bg-slate-500 transition-transform ease-in-out',
						isActive && 'translate-y-1.5 rotate-45',
					)}
				></span>
				<span
					className={cn(
						'block h-1 w-3 origin-center rounded-full bg-[#22c55e] transition-transform ease-in-out',
						isActive && 'w-5 -translate-y-1.5 -rotate-45',
					)}
				></span>
			</div>
		</button>
	);
};
