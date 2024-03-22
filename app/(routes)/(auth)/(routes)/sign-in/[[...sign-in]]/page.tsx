import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';

const SignInPage = () => {
	return (
		<Container>
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-semibold text-center">Sign In</h1>
				<div>
					<form>
						<input type="text" name="email" />
						<input type="password" name="password" />
						<Button type="submit" variant="contained">
							Login
						</Button>
						<Link href="/sign-up">if you have no account go to signin</Link>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default SignInPage;
