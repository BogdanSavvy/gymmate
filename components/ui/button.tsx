'use client';

import React, { MouseEventHandler } from 'react';

import { cn } from '@/lib/utils';

export const Button = ({
	children,
	variant,
	type = 'button',
	styles,
	disabled = false,
	handleClick,
}: {
	children: React.ReactNode;
	variant: 'contained' | 'outlined' | 'icon';
	type?: 'button' | 'submit' | 'reset' | undefined;
	styles?: string;
	disabled?: boolean;
	handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
	switch (variant) {
		case 'contained':
			return (
				<button
					type={type}
					className={cn(
						'flex items-center justify-center text-white bg-black py-2 px-4 hover:text-black hover:bg-white transition-all disabled:opacity-50',
						styles,
					)}
					disabled={disabled}
					onClick={handleClick}
				>
					{children}
				</button>
			);
		case 'outlined':
			return (
				<button
					type={type}
					className={cn(
						'flex items-center justify-center border-2 text-black bg-transparent py-2 px-4 hover:text-white hover:bg-black transition-all disabled:opacity-50',
						styles,
					)}
					disabled={disabled}
					onClick={handleClick}
				>
					{children}
				</button>
			);

		case 'icon':
			return (
				<button
					type={type}
					className={cn(
						'flex items-center justify-center p-3 rounded-full bg-black transition-all disabled:opacity-50',
						styles,
					)}
					disabled={disabled}
					onClick={handleClick}
				>
					{children}
				</button>
			);
	}
};
