<script context="module" lang="ts">
	import { client } from '../../components/SanityClient'
	
	export async function preload() {
		const query = "*[_type == 'poem' && featured]{_id, slug, name, content, background}";
		const featuredPoemArr = await client.fetch(query);
		const featuredPoem = featuredPoemArr[Math.floor(Math.random() * featuredPoemArr.length)]
		return { featuredPoem }
	}
</script>

<script lang="ts">
	type Slug = {
		_type: string,
		current: string,
	}

	export let featuredPoem: { slug: Slug, name: string, _id: string, content: Array<any>, background: Array<any> };

</script>

<style>

</style>

<svelte:head>
	<title>Poems</title>
</svelte:head>

<div id="content">
	<h1>{featuredPoem.name}</h1>
	{#each featuredPoem.content as { children }}
		{#each children as { text }}
			<p>{ text }</p>
		{/each}
	{/each}
</div>
<!-- TODO: 
		- Make poem render for desktop only
-->