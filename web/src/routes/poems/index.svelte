<script context="module" lang="ts">
	import { client } from '../../components/SanityClient'
	
	export async function preload() {
		const query = "*[_type == 'poem']{_id, slug, name}";
		const poems = await client.fetch(query);
		return { poems }
	}
</script>

<script lang="ts">
	type Slug = {
		_type: string,
		current: string,
	}

	export let poems: { slug: Slug, name: string, _id: string}[] = [];

	// $: console.log(poems)
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Poems</title>
</svelte:head>

<h1>Poems</h1>

{#if poems}
	<ul>
		{#each poems as poem}
			{#if poem.slug}
				<li><a rel="prefetch" href="poems/{poem.slug.current}">{poem.name}</a></li>
			{/if}
		{/each}
	</ul>
{/if}