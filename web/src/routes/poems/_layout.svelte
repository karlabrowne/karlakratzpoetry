<script context="module" lang="ts">
	import { client } from '../../components/SanityClient'
	
	export async function preload() {
		const poemQuery = "*[_type == 'poem']{_id, slug, name, categories}"
		const catQuery = "*[_type == 'category']{_id, title}"
		const poems = await client.fetch(poemQuery)
		const categories = await client.fetch(catQuery)
		return { poems, categories }
	}
</script>

<script lang="ts">
	type Slug = {
		_type: string,
		current: string,
	}

	const filterPoems = (arr: Array<any>, i:string) => {
		return filteredPoems = arr.filter(({ categories: { child } }) => {
			child == i
		})
	}

	export let poems: { slug: Slug, name: string, _id: string, categories: Array<any>}[] = []
	export let categories: { title: string, _id: string}[] = []

	let filteredPoems = poems

	$: console.log(poems)
</script>

<svelte:head>
	<title>Poems</title>
</svelte:head>



<div class="page-wrapper">
  <div class="side-bar">
		<h1>Poems</h1>
		<p>by category</p>
		<div>
			{#each categories as cat}
				<button class="filter-button" on:click|preventDefault={() => filterPoems(poems, cat.title)}>
					{cat.title}
				</button>
			{/each}
		</div>
    {#if poems}
			<ul>
				{#each filteredPoems as poem}
					{#if poem.slug}
						<li><a rel="prefetch" href="poems/{poem.slug.current}">{poem.name}</a></li>
					{/if}
				{/each}
			</ul>
		{/if}
	</div>  

	<!-- poems rendered here -->
	<slot></slot>

</div>

<style>
	.page-wrapper {
		display: flex;
	}

	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>