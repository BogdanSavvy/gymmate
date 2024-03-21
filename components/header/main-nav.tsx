'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type Route = {
	href: string;
	label: string;
	isActive: boolean;
};

export const MainNav = ({ styles }: { styles?: string }) => {
	const path = usePathname();

	const routes: Route[] = [
		{
			label: 'Home',
			href: '/',
			isActive: path === '/' ? true : false,
		},
		{
			label: 'About',
			href: '/about',
			isActive: path === '/about' ? true : false,
		},
	];

	return (
		<nav className="flex flex-col">
			<ul className={cn('flex flex-row gap-x-2', styles)}>
				{routes.map((route: Route) => (
					<li key={route.href}>
						<Link
							className={cn(
								'text-gray uppercase',
								route.isActive && 'text-dark-gray font-semibold',
							)}
							href={route.href}
						>
							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
