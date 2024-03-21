import React from 'react';
import { Button } from '../ui/button';

export const Actions = () => {
	return (
		<div className="flex flex-row gap-x-4">
			<Button styles="max-w-[200px]" variant="outlined">
				Login
			</Button>
			<Button styles="max-w-[200px]" variant="contained">
				Register
			</Button>
		</div>
	);
};
