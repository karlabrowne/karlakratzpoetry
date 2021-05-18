<script context=module lang=ts>
	import { client, urlFor } from '../components/SanityClient'

	export async function preload(){
		const query:string = `*[_id == "homePage"][0]`
		const homepage:Promise<any> = await client.fetch(query)
		return { homepage }
	}
</script>
<script lang=ts>
	import type { Image, Block } from '@sanity/types'
	import { stores } from '@sapper/app';
	import { fade } from 'svelte/transition'
	import blocksToHtml from '@sanity/block-content-to-html'
	import SvelteSeo from 'svelte-seo'

	const { page } = stores();

	interface MainImage extends Image {
		alt: string,
	}

	type Homepage = {
		mainImage: MainImage,
		heroTitle: string,
		heroDescription: Block,
	}

	export let homepage:Homepage

	$:({ mainImage, heroTitle, heroDescription } = homepage)
	$:({ host, path } = $page)
</script>

<SvelteSeo 
	title="Karla Kratz Poetry"
	description={ heroDescription[0].children[0].text }
	openGraph={{
    title: 'Karla Kratz Poetry',
    description: heroDescription[0].children[0].text,
    url: `https://${host}${path}`,
    type: 'website',
    images: [{
        url: urlFor(mainImage).url(),
				alt: mainImage.alt,
        width: 650,
        height: 650,
      }]
  }}
/>

<div id="image">
	{#if mainImage}
		<img alt={mainImage.alt} src="{ urlFor(mainImage).url() }" transition:fade>
	{:else}
		<div style="width: 400px; height: 400px; background-color: var(--gray);" transition:fade></div>
	{/if}
</div>

{#if heroTitle}
	<h1 transition:fade>{ heroTitle }</h1>
{/if}

{#if heroDescription}
	<div id="hero-text">
		{@html blocksToHtml({blocks: heroDescription })}
		<br>
	</div>
{/if}

<style>
	h1 {
		margin-top: .8rem;
		text-align: center;
		font-style: italic;
		text-transform: capitalize;
	}

	#hero-text {
		text-align: center;
	}

	#hero-text > * {
		margin: 1em auto;
	}

	#image > * {
		margin: 0 auto;
		display: block;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
		max-width: 400px;
		border-radius: 50%;
		
	}
</style>

