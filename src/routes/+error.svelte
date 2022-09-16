<script lang="ts">
	import { dev } from '$app/environment';
	import { enhance } from '$app/forms';

	let slug = '';

	const allSources = import.meta.glob('./**/+page.{svelte,md}');

	const RE_PATH = /^\.(.*)\+page\.\w+$/;

	const allRoutes = [
		...new Set(Object.keys(allSources).map((fileName) => fileName.match(RE_PATH)?.[1]))
	];
</script>

<h1>
	Error
	{#if dev}
		(dev mode)
	{/if}
</h1>
<ul>
	{#each allRoutes as route}
		<li>
			<a href={route}>{route}</a>
		</li>
	{/each}
</ul>

<form method="post" action="/_dev" use:enhance>
	<input name="slug" bind:value={slug} />
	<button formaction="/_dev?/createFile">➕</button>
</form>
