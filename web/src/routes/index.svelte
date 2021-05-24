<script context=module lang=ts>
	import { client, urlFor } from '../components/SanityClient'

	export const load = async () => {
		const query:string = `*[_id == "homePage"][0]`
		const catQuery:string = `*[_type == 'category']{_id, title}`
		const homepage:Promise<any> = await client.fetch(query)
		const cats:Promise<any> = await client.fetch(catQuery)
		if (homepage && cats) {
			return {
				props: {
					homepage: await homepage,
					cats: await cats
				}
			};
		}

		return {
			status: 'error',
			error: new Error(`Could not load data`)
		};
	};
</script>
<script lang=ts>
	import type { Image, Block } from '@sanity/types'
	import { goto } from '$app/navigation'
	import { session, page } from '$app/stores'
	import { fade } from 'svelte/transition'
	import blocksToHtml from '@sanity/block-content-to-html'
	import SvelteSeo from 'svelte-seo'
import { onMount } from 'svelte';

	const updateSession = async (c) => {
		$session = c;
		console.log($session)
		goto('/poems')
	}

	interface MainImage extends Image {
		alt: string,
	}
	type Homepage = {
		mainImage: MainImage,
		heroTitle: string,
		heroDescription: Block,
	}
	type Category = {
		_id: string,
		title: string
	}

	export let homepage:Homepage
	export let cats:Array<Category>

	$:({ mainImage, heroTitle, heroDescription } = homepage)
	$:({ host, path } = $page)

	onMount(() => $session = undefined);
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

<a href="/poems" class="read-redirect"> Read A Poem </a>

{#if cats}
<div class="filter-cont">
	{#each cats as { title }}
		<button role="link" class="filter-button" on:click|preventDefault={() => updateSession(title)}>
			{ title }
		</button>
	{/each}
	<a role="link" href="/poems" class="filter-button">All</a>
</div>
{/if}

<style>
	.read-redirect {
		display: block;
		width: 135px;
		background-color: var(--garden-700);
		color: var(--garden-50);
		padding: .75rem 1rem;
		text-align: center;
		font-size: 1.25rem;
		font-weight: 700;
		font-style: italic;
		text-decoration: none;
		border-radius: 15px;
		margin: .5rem auto;
	}

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

	.filter-cont {
		display: flex;
		flex-wrap: wrap;
		max-width: max-content;
		margin: 1rem auto;
	}

	.filter-button {
		border: 2px solid var(--garden-600);
		border-radius: 15px;
		background: transparent;
		color: var(--garden-600);
		margin: 0 .2rem .4rem 0;
		font-size: 1rem;
		padding: .2em .6em;
	}

	.filter-button:hover {
		cursor: pointer;
		background: var(--garden-700);
		color: var(--garden-50);
		border-color: var(--garden-700);
	}
</style>

