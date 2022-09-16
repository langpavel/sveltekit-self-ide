import { mkdir, writeFile } from 'node:fs/promises';
import { error, redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

const template = `<script lang="ts">
</script>

<div>
New Component!
</div>

<style>
</style>
`;

export const actions: Actions = {
	createFile: async (event) => {
		const data = await event.request.formData();
		const slug = ((data.get('slug') as string) ?? '').replace(/\/$/, '');
		const slashSlug = slug[0] === '/' ? slug : `/${slug}`;
		// const slashSlug = slashSlugStart.endsWith('/') ? slashSlugStart : `${slug}/`;
		try {
			const fullPath = new URL(`..${slashSlug}`, import.meta.url);
			await mkdir(fullPath, { recursive: true });
			console.log(`[DEV]: Directory created: ${fullPath}`);
			const filePath = new URL('+page.svelte', fullPath + '/');
			await writeFile(filePath, template, 'utf-8');
			console.log(`[DEV]: File written: ${filePath}`);
		} catch (err) {
			throw error(400, (err as Error).message);
		}
		const redirectURL = new URL(slashSlug, event.url);
		console.log(`Redirecting: ${redirectURL}`);
		throw redirect(303, redirectURL.toString());
	}
};
