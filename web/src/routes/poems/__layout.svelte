<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    const res = await fetch(`/poems/layout.json`)
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
  import { afterUpdate } from 'svelte'
  import { fly } from 'svelte/transition'
  import { page } from '$app/stores'
  import { filterPoems } from '../../components/utils'
  import { displayedPoem, selectedCategory } from './_store'

  type Slug = {
    _type: string
    current: string
  }

  const isDisplayed = (path: string, slug: Slug, displayedPoem: string) => {
    return path === `/poems/${slug.current}` || slug.current === displayedPoem
  }

  export let poems: {
    slug: Slug
    name: string
    _id: string
    categories: Array<any>
  }[] = []
  export let categoriesArr: { title: string; _id: string }[] = []

  $: filteredPoems = $selectedCategory
    ? filterPoems(poems, $selectedCategory)
    : poems

  const NAV_OFFSET = `8rem`

  let scrollY = 0
  let lastScrollY: number

  let innerWidth = 500
  let showSideBar = true
  $: {
    // if scrollY === lastScrollY, change nothing
    showSideBar =
      scrollY === lastScrollY
        ? showSideBar
        : scrollY < 350 || scrollY < lastScrollY

    // if mobile view, always display side bar
    showSideBar = innerWidth >= 650 ? showSideBar : true
  }

  // store previous scrollY value
  afterUpdate(() => {
    lastScrollY = scrollY
  })

  // TODO: fix a weird issue where SvelteKit
  // does not automatically scroll up on a link click
  const manualResetScroll = () => {
    window.scrollTo(0, 0)
  }
</script>

<svelte:window bind:scrollY bind:innerWidth />

<div class="page-wrapper" style="--nav-offset={NAV_OFFSET}">
  <div class="poem-container">
    <slot />
  </div>

  <div class="side-bar">
    {#key 'hey'}
      {#if showSideBar}
        <div transition:fly|local={{ y: -20 }}>
          <h2>Poems by category</h2>
          <div class="filter-cont">
            {#each categoriesArr as { title }}
              <button
                class="filter-button"
                on:click|preventDefault={() => {
                  filteredPoems = filterPoems(poems, title)
                  $selectedCategory = title
                }}
                style={title == $selectedCategory
                  ? 'background: var(--garden-700); color: var(--garden-50); border-color: var(--garden-700);'
                  : ''}
              >
                {title}
              </button>
            {/each}
            <button
              class="filter-button"
              on:click|preventDefault={() => {
                filteredPoems = poems
                $selectedCategory = undefined
              }}
              style={!$selectedCategory
                ? 'background: var(--garden-700); color: var(--garden-50); border-color: var(--garden-700);'
                : ''}>All</button
            >
          </div>
          {#if poems}
            <ul>
              {#each filteredPoems as { name, slug }}
                {#if slug}
                  <li>
                    <a
                      on:click={manualResetScroll}
                      class="item-poem"
                      aria-current={isDisplayed(
                        $page.path,
                        slug,
                        $displayedPoem
                      ) && 'location'}
                      sveltekit:noscroll
                      rel="prefetch"
                      href={$page.path === `/poems`
                        ? `/poems/${slug.current}`
                        : `${slug.current}`}
                    >
                      {name}
                    </a>
                  </li>
                {/if}
              {/each}
            </ul>
          {/if}
        </div>
      {/if}
    {/key}
  </div>
</div>

<style>
  .page-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1em;
  }

  .filter-cont {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    font-family: var(--ui-font);
    /* font-family: "Roboto Condensed", monospace; */
    font-weight: 400;
  }

  .filter-cont > button {
    border: 2px solid var(--garden-600);
    border-radius: 15px;
    background: transparent;
    color: var(--garden-600);
    margin: 0 0.2rem 0.4rem 0;
    font-size: 1rem;
    font-family: var(--ui-font);
    /* font-family: "Roboto Condensed", monospace; */
    font-weight: 400;
    padding: 0.2em 0.6em;
  }

  .filter-cont > button:hover {
    cursor: pointer;
    background: var(--garden-700);
    color: var(--garden-50);
    border-color: var(--garden-700);
  }

  .side-bar h2 {
    font-family: var(--ui-font);
    /* font-family: "Roboto Condensed", monospace, sans-serif; */
    color: var(--garden-600);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2;
  }

  ul {
    margin: 0;
    line-height: 1.13;
    list-style: none;
    padding: 0;
    font-size: 1.4rem;
  }

  ul li {
    margin-bottom: 1.4rem;
  }

  .item-poem[aria-current='location'] {
    text-decoration: none;
  }

  @media screen and (min-width: 900px) {
    .page-wrapper {
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 6em;
    }
  }

  @media screen and (min-width: 650px) {
    .page-wrapper {
      grid-template-columns: 1fr 2fr;
      grid-column-gap: 3em;
    }

    .side-bar {
      align-self: start;
      grid-row-start: 1;
      grid-column-start: 1;
      position: sticky;
      top: 0;
      height: calc(100vh - var(--nav-offset, 8rem));
      overflow-y: scroll;
    }

    .poem-container {
      grid-row-start: 1;
      grid-column-start: 2;
    }
  }
</style>
