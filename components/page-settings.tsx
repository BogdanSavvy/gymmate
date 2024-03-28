import React from 'react';

import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';

export const PageSettings = () => {
	return (
		<div className="fixed flex flex-col gap-y-2 bottom-10 right-5 ">
			<ThemeToggle />
			<ScrollToTopButton />
		</div>
	);
};
