'use client';

import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const ScrollToTopButton = () => {
	const [showButton, setShowButton] = useState<boolean>(false);

	useEffect(() => {
		const handleChange = () => {
			if (window.scrollY >= 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		const scrollDistance = window.scrollY || document.documentElement.scrollTop;

		if (scrollDistance !== 0) {
			setShowButton(true);
		}

		window.addEventListener('scroll', handleChange, { passive: true });
	}, []);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={handleClick}
			className={cn(
				'p-2 hidden opacity-0 transition-all',
				showButton && 'block opacity-100',
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 32 32"
				className="fill-black dark:fill-white"
			>
				<g data-name="90-Arrow Up">
					<path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
					<path d="m15.29 10.29-8 8L8.7 19.7l7.3-7.29 7.29 7.29 1.41-1.41-8-8a1 1 0 0 0-1.41 0z" />
				</g>
			</svg>
		</Button>
	);
};
