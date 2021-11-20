<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch, page }) => {
    const { slug } = page.params
    const res = await fetch(`./${slug}.json`)
    if (res.ok) {
      const poem = await res.json()
      return {
        props: {
          poem,
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
  import { Moon } from 'svelte-loading-spinners'
  import SvelteSeo from 'svelte-seo'
  import { fade } from 'svelte/transition'
  import blocksToHtml from '@sanity/block-content-to-html'
  import { urlFor } from '../../components/SanityClient'
  import FadeImage from '../../components/Image.svelte'

  type Slug = {
    _type: string
    current: string
  }

  interface MainImage extends Image {
    alt: string
  }

  export let poem: {
    slug: Slug
    name: string
    content: Array<Block>
    background: Array<Block>
    backgroundTitle: string
    poemImage: MainImage
    _createdAt: string
    _updatedAt: string
  }

  $: ({
    name,
    content,
    background,
    backgroundTitle,
    poemImage,
    _createdAt,
    _updatedAt,
  } = poem)
  $: ({ host, path } = $page)
</script>

<SvelteSeo
  title={`Karla Kratz Poetry | ${name}`}
  description={`${content[0].children[0].text.substring(0, 100)}...`}
  openGraph={{
    title: `Karla Kratz Poetry | ${name}`,
    description: `${content[0].children[0].text.substring(0, 100)}...`,
    type: 'article',
    url: `https://${host}${path}`,
    article: {
      publishedTime: _createdAt,
      modifiedTime: _updatedAt,
      authors: [`https://${host}/`],
    },
    images: [
      {
        url: poemImage ? urlFor(poemImage).size(650, 650).url() : '',
        width: 650,
        height: 650,
        alt: poemImage ? poemImage.alt : '',
      },
    ],
  }}
/>

<section id="content">
  {#if poem}
    <article>
      <h1 class="poem-title" transition:fade>{name}</h1>
      {#if poemImage}
        <div id="image" class="image-container">
          {#if poemImage.alt}
            {#key poem.slug.current}
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
      {@html blocksToHtml({ blocks: content })}

      <div class="end-mark">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 13 6"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
          ><path
            d="M12.218,3.064c0,0.484 -0.139,0.934 -0.418,1.35c-0.279,0.416 -0.659,0.745 -1.14,0.985c-0.481,0.241 -1.004,0.361 -1.57,0.361c-0.687,-0 -1.324,-0.161 -1.912,-0.484c-0.588,-0.322 -1.013,-0.759 -1.275,-1.312c0.085,0.18 0.127,0.369 0.127,0.567c-0,0.338 -0.12,0.628 -0.361,0.868c-0.24,0.241 -0.53,0.361 -0.868,0.361c-0.362,-0 -0.671,-0.128 -0.926,-0.385c-0.255,-0.256 -0.382,-0.564 -0.382,-0.923c-0,-0.402 0.116,-0.743 0.349,-1.023c0.232,-0.28 0.568,-0.486 1.007,-0.618c-0.236,-0.167 -0.529,-0.306 -0.88,-0.419c-0.352,-0.112 -0.673,-0.168 -0.964,-0.168c-0.584,-0 -1.089,0.19 -1.516,0.571c-0.427,0.38 -0.64,0.853 -0.64,1.419c0.097,-0.053 0.216,-0.079 0.356,-0.079c0.222,-0 0.413,0.079 0.571,0.238c0.159,0.158 0.238,0.348 0.238,0.57c0,0.222 -0.079,0.414 -0.238,0.575c-0.158,0.161 -0.349,0.242 -0.571,0.242c-0.272,-0 -0.497,-0.115 -0.675,-0.345c-0.179,-0.23 -0.268,-0.538 -0.268,-0.924c-0,-0.438 0.126,-0.853 0.379,-1.242c0.252,-0.39 0.592,-0.701 1.018,-0.934c0.427,-0.232 0.876,-0.349 1.346,-0.349c0.267,0 0.606,0.055 1.017,0.165c0.411,0.109 0.723,0.236 0.938,0.378c-0.111,-0.174 -0.209,-0.383 -0.294,-0.626c-0.084,-0.243 -0.127,-0.448 -0.127,-0.614c0,-0.339 0.127,-0.635 0.381,-0.888c0.254,-0.254 0.55,-0.381 0.888,-0.381c0.338,-0 0.628,0.12 0.868,0.361c0.241,0.24 0.361,0.53 0.361,0.868c-0,0.235 -0.064,0.454 -0.19,0.658c0.105,-0.032 0.171,-0.048 0.198,-0.048c0.293,0 0.555,0.09 0.787,0.27c0.231,0.18 0.514,0.566 0.85,1.158c0.33,0.586 0.613,0.971 0.848,1.155c0.236,0.184 0.498,0.276 0.789,0.276c0.294,-0 0.561,-0.076 0.803,-0.226c0.242,-0.151 0.44,-0.363 0.595,-0.637c0.154,-0.273 0.231,-0.53 0.231,-0.771c0,-0.243 -0.064,-0.441 -0.194,-0.594c-0.129,-0.154 -0.294,-0.23 -0.495,-0.23c-0.127,-0 -0.232,0.04 -0.313,0.121c-0.082,0.08 -0.123,0.183 -0.123,0.307c-0,0.079 0.01,0.153 0.031,0.222c-0.169,-0 -0.304,-0.052 -0.406,-0.155c-0.102,-0.103 -0.153,-0.236 -0.153,-0.4c0,-0.18 0.071,-0.334 0.212,-0.462c0.142,-0.128 0.31,-0.192 0.506,-0.192c0.362,-0 0.653,0.128 0.874,0.384c0.221,0.257 0.331,0.59 0.331,0.999Z"
            style="fill-rule:nonzero;"
          /></svg
        >
      </div>
    </article>
    <article>
      {#if backgroundTitle}
        <h2 class="background-title">{backgroundTitle}</h2>
      {/if}
      {#if background}
        {@html blocksToHtml({ blocks: background })}
      {/if}
    </article>
  {:else}
    <Moon size="60" color="#329659" unit="px" duration="1s" />
  {/if}
</section>

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

  .end-mark {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .end-mark svg {
    fill: var(--garden-800);
    width: 48px;
  }

  #content {
    max-width: 48ch;
  }
</style>
