<script context=module lang=ts>
  import type { Preload } from '@sapper/common'
  import { client, urlFor } from '../components/SanityClient'

  export const preload:Preload = async () => {
    const query:string = '*[_id == "bookPage"][0]'
    const bookPage:Promise<any> = await client.fetch(query)
    return { bookPage }
  };
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

<article id="book-row">
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
</article>

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