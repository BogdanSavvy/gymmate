import React from 'react';

import { MainNav } from '@/components/header/main-nav';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const Sidebar = ({ isOpen = false }: { isOpen?: boolean }) => {
	return (
		<aside
			className={cn(
				'fixed -left-[400px] z-20 h-full w-[400px] px-4 pt-28 pb-8 bg-black transition-all',
				isOpen && 'left-0',
			)}
		>
			<div className="flex flex-col justify-between h-full">
				<MainNav styles="h-full flex-col flex-auto gap-y-4" />
				<Button
					styles="self-end flex-0 w-[48px] h-[48] bg-custom-white"
					variant="icon"
				>
					Back
				</Button>
			</div>
		</aside>
	);
};
