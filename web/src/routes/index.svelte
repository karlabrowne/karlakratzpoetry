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

<h1 class="sr-only">Karla Kratz Poetry Home</h1>

<div class="home-grid">

<div class="hero-image">
	{#if mainImage}
		<img alt={mainImage.alt} src="{ urlFor(mainImage).url() }" transition:fade>
	{:else}
		<div style="width: 400px; height: 400px; background-color: var(--gray);" transition:fade></div>
	{/if}
</div>

{#if heroDescription}
	<div class="hero-text">
		{@html blocksToHtml({blocks: heroDescription })}
	</div>
{/if}

{#if heroTitle}
	<dfn class="hero-title" transition:fade>{ heroTitle }</dfn>
{/if}

<a href="/poems" class="read-redirect">Read a Poem</a>

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

</div>

<style>
	.home-grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1rem;
	}

	.hero-image {
		text-align: center;
	}

	.hero-title {
		margin-top: 1.4rem;
		font-style: italic;
		font-size: smaller;
		max-width: 40ch;
		color: var(--garden-600);
		grid-column: 3 / 5;
		grid-row: 2;
	}

	.hero-text,
	.hero-image {
		margin: 0 0 2rem;
		padding: 0;
		grid-column: 5 / 13;
		max-width: 52ch;
		justify-content: right;
	}

	.hero-text::first-line {
		font-variant: small-caps !important;
	}

	.read-redirect {
		display: block;
		width: 135px;
		background-color: var(--garden-700);
		color: var(--garden-50);
		padding: .75rem 1rem;
		text-align: center;
		font-family: 'Roboto Condensed', sans-serif;
		/* text-transform: uppercase; */
		font-weight: 400;
		letter-spacing: .082rem;
		font-size: 1.25rem;
		text-decoration: none;
		border-radius: 500px;
		margin: .5rem auto;
		grid-column: 1 / 13;
	}

	img {
		width: 100%;
		max-width: 400px;
		border-radius: 50%;
	}

	.filter-cont {
		grid-column: 1 / 13;
	}

	.filter-button {
		border: 2px solid var(--garden-600);
		border-radius: 500px;
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

	@media screen and (max-width: 1200px) {
		.hero-text,
		.hero-image {
			grid-column: 4 / 13;
		}
		.hero-title {
			grid-column: 1 / 4;
		}
	}
	@media screen and (max-width: 400px) {
		.hero-title,
		.hero-text,
		.hero-image {
			grid-column: 1 / 13;
			margin: 0;
		}
	}
</style>

