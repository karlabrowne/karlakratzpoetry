<script context="module" lang="ts">
	import { client } from '../../components/SanityClient'

	export async function preload({ params: { slug } }) {
		const query = `*[slug.current == "${ slug }"]`
	
		const res = await client.fetch(query)
		const poem = await res.shift()
		return { poem }
	}
</script>

<script lang="ts">
	export let poem: { slug: string, name: string, content:Array<any>};
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{poem.name}</title>
</svelte:head>



<div class="content">
	<h1>{poem.name}</h1>
	{#each poem.content as { children }}
		{#each children as { text }}
			<p>{ text }</p>
		{/each}
	{/each}
</div>