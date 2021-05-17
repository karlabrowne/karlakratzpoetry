<script context="module" lang="ts">
	import type { Preload } from "@sapper/common"
	import { client, urlFor } from '../../components/SanityClient'

	export const preload:Preload = async ({ params: { slug } }) => {
		const query = `*[slug.current == "${ slug }"]`
	
		const res = await client.fetch(query)
		const poem = await res.shift()
		return { poem }
	};
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

	export let poem: { slug: Slug, name: string, content:Array<any>, background:Array<any>, backgroundTitle:string, poemImage:Image};	
	
</script>

<svelte:head>
	<title>{ poem.name }</title>
</svelte:head>

<div id="content">
	{#if poem}
		<h1 class="poem-title" transition:fade>{ poem.name }</h1>
		{#if poem.poemImage}
			<div id="image">
				{#if poem.poemImage.alt}
					<img alt="{poem.poemImage.alt}" src="{ urlFor(poem.poemImage).url() }" transition:fade>
				{/if}
			</div>
		{/if}
		{@html blocksToHtml({ blocks: poem.content })}

		<div>
			{#if poem.backgroundTitle}
				<h2 class="background-title">{ poem.backgroundTitle }</h2>
			{/if}
			{#if poem.background}
				{@html blocksToHtml({ blocks: poem.background })}
			{/if}
		</div>
	{/if}
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
