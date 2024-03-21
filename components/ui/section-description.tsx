import React from 'react';

import { cn } from '@/lib/utils';

export const SectionDescription = ({
	children,
	styles,
}: {
	children: React.ReactNode;
	styles?: string;
}) => {
	return (
		<p className={cn('text-lg leading-normal text-gray', styles)}>
			{children}
		</p>
	);
};
