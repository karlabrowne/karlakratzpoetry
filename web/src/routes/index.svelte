<script lang="ts">
	import { client, urlFor } from '../components/SanityClient'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import blocksToHtml from '@sanity/block-content-to-html'

	let mainImage
	let heroTitle
	let heroDescription

	const query = `*[_id == "homePage"][0]`

	onMount(async () => {
		let res = await client.fetch(query)
		return { mainImage, heroTitle, heroDescription } = res
	});

	$: console.log(mainImage)
</script>

<div id="image">
	{#if mainImage}
		<img alt="{mainImage.alt}" src="{ urlFor(mainImage).url() }" transition:fade>
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
	}

	img {
		width: 100%;
		max-width: 400px;
	}
</style>

