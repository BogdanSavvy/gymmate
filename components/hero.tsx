import React from 'react';
import Image from 'next/image';

import { Container } from '@/components/container';
import { SectionTitle } from '@/components/ui/section-title';
import { SectionDescription } from '@/components/ui/section-description';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Hero = () => {
	return (
		<section className="relative h-screen pt-52">
			<Container>
				<article className="relative z-10 flex flex-col gap-y-2">
					<SectionTitle>Hero title</SectionTitle>
					<SectionDescription>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
						perferendis, dicta itaque obcaecati architecto accusamus fuga!
						Blanditiis numquam sed magnam dicta, tempora aspernatur asperiores,
						animi repellat voluptate dignissimos dolor provident?
					</SectionDescription>
					<Link href={'/'} />
				</article>
			</Container>
			<Image
				className="absolute w-full h-full object-cover"
				src="/images/sunset_ocean_tree.jpg"
				alt="Hero image"
				fill
				sizes="100vw"
			/>
		</section>
	);
};
