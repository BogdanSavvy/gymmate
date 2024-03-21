import React from 'react';

import { Container } from '@/components/container';
import { Logo } from '@/components/header/logo';
import { MainNav } from '@/components/header/main-nav';
import { Actions } from './actions';

export const Header = () => {
	return (
		<header className="fixed w-full z-50 bg-custom-white">
			<Container>
				<div className="h-20 flex flex-auto items-center justify-between">
					<Logo />
					<MainNav />
					<Actions />
				</div>
			</Container>
		</header>
	);
};

