<script context="module" lang="ts">
	import { client } from '../../components/SanityClient'
	
	export async function preload() {
		const query = "*[_type == 'poem' && featured]{_id, slug, name, content, background}";
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

	export let featuredPoem: { slug: Slug, name: string, _id: string, content: Array<any>, background: Array<any> };
	console.log(featuredPoem)

	const { name, content } = featuredPoem
</script>

<svelte:head>
	<title>Poems</title>
</svelte:head>

<div id="content">
	<h1 class="poem-title" transition:fade>{ name }</h1>
	{@html blocksToHtml({ blocks: content })}
</div>

<style>
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