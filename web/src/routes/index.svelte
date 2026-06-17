<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/index.json')
    if (res.ok) {
      const props = await res.json()
      return {
        props,
      }
    }

    return {
      status: res.status,
      error: `Something's wrong`,
    }
  }
</script>

<script lang="ts">
  import { urlFor } from '../components/SanityClient'
  import type { Image, Block } from '@sanity/types'
  import { page } from '$app/stores'
  import { optionalFade } from '../components/motion'
  import blocksToHtml from '@sanity/block-content-to-html'
  import SvelteSeo from 'svelte-seo'
  import { selectedCategory } from './poems/_store'

  interface MainImage extends Image {
    alt: string
  }
  type Homepage = {
    mainImage: MainImage
    heroTitle: string
    heroDescription: Block
  }
  type Category = {
    _id: string
    title: string
  }

  export let homepage: Homepage
  export let cats: Array<Category>

  $: ({ mainImage, heroTitle, heroDescription } = homepage)
  $: ({ host, path } = $page)
</script>

<SvelteSeo
  title="Karla Kratz Poetry"
  description={heroDescription[0].children[0].text}
  openGraph={{
    title: 'Karla Kratz Poetry',
    description: heroDescription[0].children[0].text,
    url: `https://${host}${path}`,
    type: 'website',
    images: [
      {
        url: urlFor(mainImage).url(),
        alt: mainImage.alt,
        width: 650,
        height: 650,
      },
    ],
  }}
/>


<div class="container">
  <div id="image">
    {#if mainImage}
      <img alt={mainImage.alt} src={urlFor(mainImage).url()} transition:optionalFade />
    {:else}
      <div
        style="width: 400px; height: 400px; background-color: var(--gray);"
        transition:optionalFade
      />
    {/if}
  </div>
  <div>
    {#if heroTitle}
      <h1 transition:optionalFade>{heroTitle}</h1>
    {/if}

    {#if heroDescription}
      <div id="hero-text">
        {@html blocksToHtml({ blocks: heroDescription })}
      </div>
    {/if}

    <a href="/poems" class="read-redirect"> Read A Poem </a>

    {#if cats}
      <div class="filter-cont" role="group" aria-label="Poem categories">
        {#each cats as { title }}
          <a
            href="/poems?category={encodeURIComponent(title)}"
            class="filter-button"
            on:click={() => ($selectedCategory = title)}
          >
            {title}
          </a>
        {/each}
        <a
          href="/poems"
          class="filter-button"
          on:click={() => ($selectedCategory = undefined)}
        >All</a>
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    display: block;
  }

  .read-redirect {
    display: block;
    width: 135px;
    background-color: var(--garden-700);
    color: var(--garden-50);
    font-family: var(--ui-font);
    padding: 0.75rem 1.4rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 8px;
    margin: 0.5rem auto 1.8rem;
  }

  h1 {
    margin-top: 0.8rem;
    text-align: left;
    font-style: italic;
    /* text-transform: capitalize; */
    max-width: 60ch;
  }

  #hero-text {
    text-align: left;
    max-width: 60ch;
    margin-bottom: 4rem;
  }

  #hero-text > :global(*) {
    margin: 1em auto;
  }

  #hero-text::first-line {
    font-variant-caps: all-petite-caps;
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
    border-radius: 500px;
    background: transparent;
    color: var(--garden-600);
    margin: 0 0.2rem 0.4rem 0;
    font-family: var(--ui-font);
    font-size: 1rem;
    padding: 0.2em 0.6em;
    text-decoration: none;
    display: inline-block;
  }

  .filter-button:hover {
    cursor: pointer;
    background: var(--garden-700);
    color: var(--garden-50);
    border-color: var(--garden-700);
  }
  @media screen and (min-width: 650px) {
    .container {
      display: flex;
      gap: 4rem;
    }
  }
</style>
