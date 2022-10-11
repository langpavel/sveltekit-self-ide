<script lang="ts">
	import Editor from './Editor.svelte';

	let value = `interface Node {
	id: ID!
}

type Customer implements Node {
	id: ID!
	name: String!
}
`;
</script>

<h2>Editor</h2>

<textarea bind:value rows="8" cols="80" />

<pre>{value}</pre>

<div class="editor-containter">
	<Editor bind:value language="graphql" />
</div>

<style lang="scss">
	.editor-containter {
		height: 50vh;
		width: 50vw;
	}
</style>
