<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  export const load: Load = async ({ fetch }) => {
    const res = await fetch(`/poems/poems.json`)
    if (res.ok) {
      const poems = await res.json()

      return {
        props: {
          ...poems,
        },
      }
    }

    return {
      status: res.status,
      error: `Something's wrong`,
    }
  }
</script>

<script lang="ts">
  import type { Image, Block } from '@sanity/types'
  import { page } from '$app/stores'
  import { browser } from '$app/env'
  import { fade } from 'svelte/transition'
  import { Moon } from 'svelte-loading-spinners'
  import blocksToHtml from '@sanity/block-content-to-html'
  import SvelteSeo from 'svelte-seo'
  import { urlFor } from '../../components/SanityClient'
  import FadeImage from '../../components/Image.svelte'
  import { selectedCategory, displayedPoem } from './_store'
  import Slug from './[slug].svelte'

  type Slug = {
    _type: string
    current: string
  }

  interface MainImage extends Image {
    alt: string
  }

  type Poem = {
    slug: Slug
    name: string
    _id: string
    content: Array<Block>
    background: Array<Block>
    backgroundTitle: string
    poemImage: MainImage
  }

  type Category = {
    title: string
    featured: Poem
  }

  export let categories: Category[] = []
  export let featured: Poem[]
  export let featuredPoem = {} as Poem

  $: ({ _id, name, content, poemImage, background, backgroundTitle } =
    featuredPoem)
  $: ({ host, path } = $page)
  $: {
    if ($selectedCategory) {
      const category = categories.find(
        ({ title }) => title === $selectedCategory
      )

      if (category) {
        featuredPoem = category.featured
      }
    } else {
      if (browser) {
        featuredPoem = featured[Math.floor(Math.random() * featured.length)]
      }
    }
    $displayedPoem = featuredPoem.slug.current
  }
</script>

<div id="content">
  {#if _id}
    <SvelteSeo
      title="Karla Kratz Poetry | Browse Poems"
      description="Browse poems or read a featured poem by Karla Kratz."
      openGraph={{
        title: 'Karla Kratz Poetry | Browse Poems',
        description: 'Browse poems or read a featured poem by Karla Kratz.',
        url: `https://${host}${path}`,
        type: 'website',
        images: [
          {
            url: urlFor(poemImage).url(),
            alt: poemImage.alt,
            width: 650,
            height: 650,
          },
        ],
      }}
    />
    <h1 class="poem-title" transition:fade>{name}</h1>
    <div id="image">
      {#if poemImage}
        <div id="image" class="image-container">
          {#if poemImage.alt}
            {#key _id}
              <FadeImage
                alt={poemImage.alt}
                srcset="{urlFor(poemImage).size(200, 200).url()}, {urlFor(
                  poemImage
                )
                  .size(400, 400)
                  .url()} 2x"
                src={urlFor(poemImage).size(400, 400).url()}
              />
            {/key}
          {/if}
        </div>
      {/if}
    </div>
    {@html blocksToHtml({ blocks: content })}

    <div>
      {#if backgroundTitle}
        <h2 class="background-title">{backgroundTitle}</h2>
      {/if}
      {#if background}
        {@html blocksToHtml({ blocks: background })}
      {/if}
    </div>
  {:else}
    <Moon size="60" color="#329659" unit="px" duration="1s" />
  {/if}
</div>

<style>
  .image-container {
    position: relative;
    width: 200px;
    height: 200px;
  }

  .image-container :global(img) {
    position: absolute;
    border-radius: 100px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #content {
    display: none;
    max-width: 48ch;
  }

  @media screen and (min-width: 650px) {
    #content {
      display: block;
    }
  }
</style>
