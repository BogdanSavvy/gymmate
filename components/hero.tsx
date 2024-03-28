import React from 'react';

import { Container } from '@/components/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export const Hero = () => {
	return (
		<section className="w-full h-full pb-28">
			<Container>
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-col gap-y-5">
						<div className="h-[50px] flex flex-row items-center self-start py-2 px-2 bg-slate-400 rounded-full">
							<Badge className="h-full px-4">New</Badge>
							<p className="px-2">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
						<article className="flex flex-col gap-y-8">
							<h1 className="font-semibold text-[130px] leading-none">
								GymMate App now available
							</h1>
							<p className="text-lg max-w-3xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
								asperiores, earum ipsa, ducimus blanditiis veritatis odit
								inventore ab magni in reprehenderit molestias eum ipsum. Soluta
								maxime cupiditate delectus veritatis voluptate.
							</p>
						</article>
						<Button className="self-start" size="lg">
							Get now
						</Button>
					</div>
					<div className="flex flex-col gap-y-3">
						<Card>
							<CardHeader>
								<CardTitle>title</CardTitle>
								<CardDescription>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Sapiente, consequuntur.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>title</CardTitle>
								<CardDescription>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Sapiente, consequuntur.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</Container>
		</section>
	);
};
