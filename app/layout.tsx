import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { ThemeProvider } from '@/providers/theme-provider';

const poppins = Poppins({
	display: 'swap',
	weight: ['400', '500', '600'],
	subsets: ['latin'],
});

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
			<body className={poppins.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="h-full flex flex-col">
						<Header />
						{/* <Sidebar /> */}
						<main className="flex-auto">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
