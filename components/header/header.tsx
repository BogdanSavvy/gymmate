import React from 'react';

import { Container } from '@/components/container';
import { Logo } from '@/components/header/logo';
import { MainNav } from '@/components/header/main-nav';
import { Button } from '@/components/ui/button';
import { Burger } from '@/components/header/burger';

export const Header = () => {
	return (
		<header className="fixed w-full z-50 bg-background backdrop-blur">
			<Container>
				<div className="h-20 flex flex-auto items-center justify-between">
					<Logo />
					<MainNav styles="hidden md:flex" />
					<div className="flex flex-row items-center gap-x-4">
						<Button variant="outline" className="bg-primary-green">
							Get now
						</Button>
					</div>
					<Burger />
				</div>
			</Container>
		</header>
	);
};
