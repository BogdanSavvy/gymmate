import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';

const SignUpPage = () => {
	return (
		<Container>
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-semibold text-center">Sign Up</h1>
				<div>
					<form>
						<input type="text" name="email" />
						<input type="password" name="password" />
						<Button type="submit" variant="contained">
							Register
						</Button>
						<Link href="/sign-in">if you have a account go to sign in</Link>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default SignUpPage;
