import React from 'react';

import { Container } from '@/components/container';
import { Logo } from '@/components/header/logo';
import { MainNav } from '@/components/header/main-nav';

const Header = () => {
	return (
		<header className="fixed w-full z-50">
			<Container>
				<div className="h-20 flex flex-auto items-center justify-between">
					<Logo />
					<MainNav />
				</div>
			</Container>
		</header>
	);
};

export default Header;
