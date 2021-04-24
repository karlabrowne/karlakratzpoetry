<script context="module" lang="ts">
	import { client, urlFor } from '../../components/SanityClient'

	export async function preload({ params: { slug } }) {
		const query = `*[slug.current == "${ slug }"]`
	
		const res = await client.fetch(query)
		const poem = await res.shift()
		return { poem }
	}
</script>

<script lang="ts">
	import { fade } from 'svelte/transition'
	import blocksToHtml from '@sanity/block-content-to-html'

	type Slug = {
		_type: string,
		current: string,
	};

	type Image = {
		_type: string,
		alt: string,
		asset: any,
		caption: string,
		crop: any,
		hotspot: any
	}

	export let poem: { slug: string, name: string, content:Array<any>, background:Array<any>, backgroundTitle:string, poemImage:Image};

	const { name, content, background, backgroundTitle, poemImage } = poem
</script>

<svelte:head>
	<title>{ name }</title>
</svelte:head>

<div id="content">
	<h1 class="poem-title" transition:fade>{ name }</h1>
	<div id="image">
		<img alt="{poemImage.alt}" src="{ urlFor(poemImage).url() }" transition:fade>
	</div>
	{@html blocksToHtml({ blocks: content })}

	<div>
		{#if backgroundTitle}
			<h2 class="background-title">{ backgroundTitle }</h2>
		{/if}
		{#if background}
			{@html blocksToHtml({ blocks: background })}
		{/if}
	</div>
</div>

<style>
	img {
		border-radius: 100px;
		width: 200px;
		height: 200px;
		background-size: cover;
	}
	
	#content {
		max-width: 48ch;
	}
</style>