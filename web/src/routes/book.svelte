<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/bookPage.json')
    if (res.ok) {
      const data = await res.json()
      return {
        props: {
          bookPage: data
        }
      }
    }

    return {
      status: res.status,
      error: res.body
    };
  };

  export const hydrate = false
</script>

<script lang=ts>
  import type { Image, Block } from '@sanity/types'
	import { page } from '$app/stores'
	import { fade } from 'svelte/transition'
  import blocksToHtml from '@sanity/block-content-to-html'
  import SvelteSeo from 'svelte-seo'
  import { urlFor } from '../components/SanityClient'



	interface MainImage extends Image {
		alt: string,
	}

	type Bookpage = {
		mainImage: MainImage,
		heading: string,
		synopsis: Block,
	}

  export let bookPage:Bookpage

  $:({ mainImage, heading, synopsis } = bookPage)
  $:({ host, path } = $page)
</script>

<SvelteSeo 
  title="Karla Kratz Poetry | Book"
  description={ synopsis[0].children[0].text }
  openGraph={{
    title: 'Karla Kratz Poetry | Book',
    description: synopsis[0].children[0].text,
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

<div class="wrapper">
  <div id="image">
    {#if mainImage}
      <img alt="{mainImage.alt}" src="{ urlFor(mainImage).url() }" transition:fade>
    {:else}
      <div style="width: 275px; height: 450px; background-color: var(--gray);" transition:fade></div>
    {/if}
  </div>
  <article id="text">
    {#if heading}
      <h1 transition:fade>{ heading }</h1>
    {:else}
      <h1 transition:fade> </h1>
    {/if}

    {#if synopsis}
      {@html blocksToHtml({blocks: synopsis })}
    {/if}
  </article>
</div>

<style>

article,
h1 {
    margin-top: 0;
    padding-top: 0;
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
    #text * {
      margin: 0 auto;
    }
  }
</style>