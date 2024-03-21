import React from 'react';

import { cn } from '@/lib/utils';

export const SectionTitle = ({
	children,
	styles,
}: {
	children: React.ReactNode;
	styles?: string;
}) => {
	return (
		<h2
			className={cn(
				'text-4xl font-bold text-black leading-relaxed tracking-wide z-10',
				styles,
			)}
		>
			{children}
		</h2>
	);
};
