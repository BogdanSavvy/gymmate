import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { SectionTitle } from '@/components/ui/section-title';
import { SectionDescription } from '@/components/ui/section-description';
import { Button } from '@/components/ui/button';

export const Hero = () => {
	return (
		<section className="relative h-screen pt-52">
			<Container>
				<article className="max-w-md relative z-10 flex flex-col gap-y-4">
					<SectionTitle>Hero title</SectionTitle>
					<SectionDescription styles="flex-auto mb-10">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
						perferendis, dicta itaque obcaecati architecto accusamus fuga!
						Blanditiis numquam sed magnam dicta, tempora aspernatur asperiores,
						animi repellat voluptate dignissimos dolor provident?
					</SectionDescription>
					<Button styles="max-w-[200px]" variant="contained">
						<Link href="/">Try it now</Link>
					</Button>
				</article>
			</Container>

			{/* //todo: CHANGE BACKGROUND IMAGE */}
			<Image
				className="absolute w-full h-full object-cover"
				src="/images/sunset_ocean_tree.jpg"
				alt="Hero image"
				sizes="100vw"
				quality={100}
				fill
			/>
		</section>
	);
};
