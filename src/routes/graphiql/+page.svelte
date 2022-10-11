<script lang="ts">
	let text: string = `
type Customer {
  id: ID!
  name: String!
}
`;

	$: formatted = text;
</script>

<h1>Graph<em>i</em>QL</h1>

<textarea bind:value={text} rows="20" cols="80" />

<div>
	{formatted}
</div>
