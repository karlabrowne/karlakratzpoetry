<script context="module" lang="ts">
	import type { Preload } from '@sapper/common'
	import { client, urlFor } from '../../components/SanityClient'
	
	export const preload:Preload = async () => {
		const query = "*[_type == 'poem' && featured]{_id, slug, name, poemImage, content, backgroundTitle, background}";
		const featuredPoemArr = await client.fetch(query);
		const featuredPoem = featuredPoemArr[Math.floor(Math.random() * featuredPoemArr.length)]
		return { featuredPoem }
	};
</script>

<script lang="ts">
	import type { Image, Block } from '@sanity/types'
	import { stores } from '@sapper/app';
	import { fade } from 'svelte/transition'
	import { Moon } from 'svelte-loading-spinners'
	import blocksToHtml from '@sanity/block-content-to-html'
	import SvelteSeo from 'svelte-seo'

	const { page } = stores();

	type Slug = {
		_type: string,
		current: string,
	};

	interface MainImage extends Image {
    alt: string,
  }

	export let featuredPoem: { slug: Slug, name: string, _id: string, content: Array<Block>, background: Array<Block>, backgroundTitle: string, poemImage: MainImage };

	$: ({ name, content, poemImage, background, backgroundTitle } = featuredPoem)
	$:({ host, path } = $page)
</script>

<SvelteSeo
	title="Karla Kratz Poetry | Browse Poems"
	description="Browse poems or read a featured poem by Karla Kratz."
	openGraph={{
    title: 'Karla Kratz Poetry | Browse Poems',
    description: 'Browse poems or read a featured poem by Karla Kratz.',
    url: `https://${host}${path}`,
    type: 'website',
    images: [{
        url: urlFor(poemImage).url(),
        alt: poemImage.alt,
        width: 650,
        height: 650,
      }]
  }}
/>

<div id="content">
	{#if featuredPoem}
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
	{:else}
		<Moon size="60" color="#329659" unit="px" duration="1s"/>
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
		display: none;
		max-width: 48ch;
	}

	@media screen and (min-width: 650px){
		#content {
			display: block;
		}
	}
</style>
