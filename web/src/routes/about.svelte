<script context=module lang=ts>
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/aboutPage.json')
    if (res.ok) {
      const data = await res.json()
      return {
        props: {
          aboutPage: data
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
<script lang="ts">
	import { fade } from 'svelte/transition'
  import blocksToHtml from '@sanity/block-content-to-html'
  import type { Image, Block } from '@sanity/types'
  import { page } from '$app/stores'
  import SvelteSeo from 'svelte-seo'
  import { urlFor } from '../components/SanityClient'

  interface MainImage extends Image {
    alt: string,
  }

  type Aboutpage = {
    mainImage: MainImage,
    artistStatementTitle: string,
    artistStatement: Array<Block>,
    bioTitle: string, 
    bio: Array<Block>, 
    gratitudeTitle: string, 
    gratitude: Array<Block>,
  }

  export let aboutPage:Aboutpage

  $:({ mainImage, artistStatementTitle, artistStatement, bioTitle, bio, gratitudeTitle, gratitude } = aboutPage)
  $:({ host, path } = $page)
</script>

<SvelteSeo 
  title="Karla Kratz Poetry | About"
  description={ bio[0].children[0].text }
  openGraph={{
    title: 'Karla Kratz Poetry | About',
    description: bio[0].children[0].text,
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

<h1 class="sr-only">About</h1>

<div class="wrapper">
  <div id="image">
    {#if mainImage}
      <img alt="{mainImage.alt}" src="{ urlFor(mainImage).url() }" transition:fade>
    {:else}
      <div style="width: 400px; height: 400px; background-color: var(--gray);" transition:fade></div>
    {/if}
  </div>
  <section>
    <article>
      <h2>Artist Statement</h2>
      {#if artistStatement}
        {@html blocksToHtml({blocks: artistStatement })}
      {/if}

    </article>
    <article>

      <h2>Bio</h2>
      {#if bio}
        {@html blocksToHtml({blocks: bio })}
      {/if}

    </article>
    <article>

      <h2>Gratitude</h2>
      {#if bio}
        {@html blocksToHtml({blocks: gratitude })}
      {/if}
    </article>
  </section>
</div>

<style>
  #image > * {
		margin: 0 auto;
		display: block;
    border-radius: 500px;
	}

	img {
		width: 100%;
		max-width: 400px;
	}

  @media screen and (min-width: 768px){
    
  }
</style>