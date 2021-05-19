<script context=module lang=ts>
  import type { Preload } from '@sapper/common'
  import { client, urlFor } from '../components/SanityClient'
  
  export const preload:Preload = async () => {
    const query:string = '*[_id == "aboutPage"][0]'
    const aboutPage = await client.fetch(query)
    return { aboutPage }
  };
</script>
<script lang="ts">
	import { fade } from 'svelte/transition'
  import blocksToHtml from '@sanity/block-content-to-html'
  import type { Image, Block } from '@sanity/types'
  import { stores } from '@sapper/app';
  import SvelteSeo from 'svelte-seo'
  
  const { page } = stores();

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

<div id="about-row">
  <div id="image">
    {#if mainImage}
      <img alt="{mainImage.alt}" src="{ urlFor(mainImage).url() }" transition:fade>
    {:else}
      <div style="width: 400px; height: 400px; background-color: var(--gray);" transition:fade></div>
    {/if}
  </div>
  <div id="text">
    <h2>Artist Statement</h2>
    {#if artistStatement}
      {@html blocksToHtml({blocks: artistStatement })}
    {/if}

		<h2>Bio</h2>
    {#if bio}
      {@html blocksToHtml({blocks: bio })}
    {/if}
  </div>
</div>

<style>
  #about-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 6rem;
  }

  #image > * {
		margin: 0 auto;
		display: block;
	}

	img {
		width: 100%;
		max-width: 400px;
	}

	#text {
    max-width: 60ch;
	}

  @media screen and (min-width: 768px){
    #about-row {
      grid-template-columns: 1fr 3fr;
    }
  }
</style>