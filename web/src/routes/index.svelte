<script lang="ts">
	import { client, urlFor } from '../components/SanityClient'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	let mainImage
	let heroTitle
	let heroDescription

	const query = `*[_id == "homePage"][0]`

	onMount(async () => {
		let res = await client.fetch(query)
		return { mainImage, heroTitle, heroDescription } = res
	});
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
	{#each heroDescription as { children }}
		{#each children as { text }}
			<p transition:fade>{ text }</p>
		{/each}
	{/each}
{/if}

<style>
	h1 {
		text-align: center;
		font-style: italic;
		text-transform: capitalize;
	}

	p {
		text-align: center;
		margin: 0 auto;
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

	p {
		margin: 1em auto;
	}
</style>

