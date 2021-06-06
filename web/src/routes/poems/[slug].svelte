<script context="module" lang="ts">
	import { client, urlFor } from '../../components/SanityClient'

	export const load = async ({ page }) => {
		const slug = page.params.slug
		const query = `*[slug.current == "${ slug }"]`
		const res = await client.fetch(query)
		const poem = await res.shift()
		if (poem) {
			return {
				props: {
					poem: await poem
				}
			};
		}

		return {
			status: 'error',
			error: new Error(`Could not load data`)
		};
	};
</script>

<script lang="ts">
	import type { Image, Block } from '@sanity/types'
	import { page } from '$app/stores'
	import { Moon } from 'svelte-loading-spinners'
	import SvelteSeo from 'svelte-seo'
	import { fade } from 'svelte/transition'
	import blocksToHtml from '@sanity/block-content-to-html'

	type Slug = {
		_type: string,
		current: string,
	};

	interface MainImage extends Image {
    alt: string,
  }

	export let poem: { slug: Slug, name: string, content:Array<Block>, background:Array<Block>, backgroundTitle:string, poemImage:MainImage, _createdAt:string, _updatedAt:string};	
	
	$: ({ name, content, background, backgroundTitle, poemImage, _createdAt, _updatedAt } = poem)
	$:({ host, path } = $page)
</script>

<SvelteSeo
	title={`Karla Kratz Poetry | ${name}`}
	description={`${content[0].children[0].text.substring(0,100)}...`}
	openGraph={{
    title: `Karla Kratz Poetry | ${name}`,
    description: `${content[0].children[0].text.substring(0,100)}...`,
    type: "article",
    url: `https://${host}${path}`,
    article: {
      publishedTime: _createdAt,
      modifiedTime: _updatedAt,
      authors: [
        `https://${host}/`,
      ],
    },
    images: [
      {
        url: poemImage ? urlFor(poemImage).url() : '',
        width: 650,
        height: 650,
        alt: poemImage ? poemImage.alt : '',
      },
    ],
  }}
/> 

<article id="content">
	{#if poem}
		<h1 class="poem-title" transition:fade>{ name }</h1>
		{#if poemImage}
			<div id="image">
				{#if poemImage.alt}
					<img alt="{poemImage.alt}" src="{ urlFor(poemImage).url() }" transition:fade>
				{/if}
			</div>
		{/if}
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
</article>

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
