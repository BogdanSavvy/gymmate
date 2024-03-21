import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'GymMate',
	description: 'Your Personal Trainer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="h-full flex flex-col">
					<Header />
					<main className="flex-auto">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
