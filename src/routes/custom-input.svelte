<script lang="ts">
	export let name: undefined | string;
	export let value: string;
</script>

<input {name} type="text" bind:value />
