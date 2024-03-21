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
	handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
	switch (variant) {
		case 'contained':
			return (
				<button
					type={type}
					className={cn(
						'flex items-center justify-center font-semibold text-custom-white bg-dark-gray py-3 px-4 hover:text-dark-gray hover:bg-custom-white transition-all disabled:opacity-40 disabled:pointer-events-none',
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
						'flex items-center justify-center border-2 border-dark-gray font-semibold text-dark-gray bg-transparent py-3 px-4 hover:text-custom-white hover:bg-dark-gray hover:border-transparent transition-all disabled:opacity-40 disabled:pointer-events-none',
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
						'flex items-center justify-center p-3 rounded-full bg-dark-gray transition-all hover:bg-black disabled:opacity-40',
						styles,
					)}
					disabled={disabled}
					onClick={handleClick}
				>
					{children}
				</button>
			);
		default:
			break;
	}
};
