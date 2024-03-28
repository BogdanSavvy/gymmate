'use client';

import React, { createContext, useState } from 'react';

export type MenuContextType = [
	isActive: boolean,
	changeActiveState: () => void,
];

export const MenuContext = createContext<MenuContextType>(null!);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const changeActiveState = () => {
		setIsActive(!isActive);
	};

	return (
		<MenuContext.Provider value={[isActive, changeActiveState]}>
			{children}
		</MenuContext.Provider>
	);
};
