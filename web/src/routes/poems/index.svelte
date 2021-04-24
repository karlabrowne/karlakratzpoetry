<script context="module" lang="ts">
	import { client, urlFor } from '../../components/SanityClient'
	
	export async function preload() {
		const query = "*[_type == 'poem' && featured]{_id, slug, name, poemImage, content, backgroundTitle, background}";
		const featuredPoemArr = await client.fetch(query);
		const featuredPoem = featuredPoemArr[Math.floor(Math.random() * featuredPoemArr.length)]
		return { featuredPoem }
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

	export let featuredPoem: { slug: Slug, name: string, _id: string, content: Array<any>, background: Array<any>, backgroundTitle: string, poemImage: Image };
	console.log(featuredPoem)

	const { name, content, poemImage, background, backgroundTitle } = featuredPoem
</script>

<svelte:head>
	<title>Poems</title>
</svelte:head>

<div id="content">
	<h1 class="poem-title" transition:fade>{ name }</h1>
	<div id="image">
		{#if poemImage}
			<img alt="{poemImage.alt}" src="{ urlFor(poemImage).url() }" transition:fade>
		{:else}
			<div style="width: 400px; height: 400px; background-color: var(--gray);" transition:fade></div>
		{/if}
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
		display: none;
		max-width: 48ch;
	}

	@media screen and (min-width: 650px){
		#content {
			display: block;
		}
	}
</style>

<!-- TODO: impliment portable text component https://github.com/movingbrands/svelte-portable-text -->