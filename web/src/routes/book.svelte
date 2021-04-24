<script lang="ts">
  import { client, urlFor } from '../components/SanityClient'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
  import blocksToHtml from '@sanity/block-content-to-html'

  const query:string = '*[_id == "bookPage"][0]'

  let mainImage:any
  let heading:string
  let synopsis:any

  onMount(async () => {
		let res = await client.fetch(query)
		return { mainImage, heading, synopsis } = res
	});
</script>

<div id="book-row">
  <div id="image">
    {#if mainImage}
      <img alt="{mainImage.alt}" src="{ urlFor(mainImage).url() }" transition:fade>
    {:else}
      <div style="width: 275px; height: 450px; background-color: var(--gray);" transition:fade></div>
    {/if}
  </div>
  <div id="text">
    {#if heading}
      <h1 transition:fade>{ heading }</h1>
    {:else}
      <h1 transition:fade> </h1>
    {/if}

    {#if synopsis}
      {@html blocksToHtml({blocks: synopsis })}
    {/if}
  </div>
</div>

<style>
  #book-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 3rem;
  }

  #image > * {
		margin: 0 auto;
		display: block;
	}

	img {
		width: 100%;
		max-width: 400px;
	}

	#text * {
		margin: 1em auto;
	}

  @media screen and (min-width: 768px){
    #book-row {
      grid-template-columns: 1fr 2fr;
    }
  }
</style>