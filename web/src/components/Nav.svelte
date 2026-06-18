<script lang="ts">
  import { onMount } from 'svelte'
  import { optionalFade } from './motion'
  import SideBar from './SideBar.svelte'
  import SearchIcon from './icons/SearchIcon.svelte'
  import { searchOpen, searchTrigger } from './searchStore'
  export let segment: string

  export let data
  let { title = '' } = data

  let sidebar_show = false
  let menuToggle: HTMLLabelElement
  let searchButton: HTMLButtonElement

  onMount(() => {
    searchTrigger.set(searchButton)

    const unsubscribe = searchOpen.subscribe((open) => {
      if (open) sidebar_show = false
    })

    return () => {
      unsubscribe()
      searchTrigger.set(null)
    }
  })

  const openSearch = () => {
    sidebar_show = false
    $searchOpen = true
  }

  const handleMenuChange = (event: Event) => {
    const target = event.currentTarget as HTMLInputElement
    sidebar_show = target.checked
    if (sidebar_show) {
      $searchOpen = false
    }
  }

  const closeMenu = () => {
    sidebar_show = false
    menuToggle?.focus()
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && sidebar_show && !$searchOpen) {
      event.preventDefault()
      closeMenu()
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header>
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="logo-wrap">
    {#if title}
      <a class="logo" href="/" transition:optionalFade>{title}</a>
    {/if}
  </div>

  <div class="nav-actions">
    <button
      bind:this={searchButton}
      id="search-toggle"
      type="button"
      class="search-toggle"
      aria-label="Search"
      aria-keyshortcuts="Meta+K Control+K"
      title="Search (⌘K)"
      on:click={openSearch}
    >
      <SearchIcon />
    </button>

    <nav id="desktop-nav" aria-label="Main navigation">
      <ul>
        <li>
          <a
            sveltekit:prefetch
            aria-current={segment === '' ? 'page' : undefined}
            href="/">home</a
          >
        </li>
        <li>
          <a
            sveltekit:prefetch
            aria-current={segment === 'poems' ? 'page' : undefined}
            href="/poems">poems</a
          >
        </li>
        <li>
          <a
            sveltekit:prefetch
            aria-current={segment === 'book' ? 'page' : undefined}
            href="/book">book</a
          >
        </li>
        <li>
          <a
            sveltekit:prefetch
            aria-current={segment === 'about' ? 'page' : undefined}
            href="/about">about</a
          >
        </li>
      </ul>
    </nav>

    <label
      bind:this={menuToggle}
      for="check"
      id="menu-toggle"
      class:opened={sidebar_show}
      aria-label="Main menu"
      aria-expanded={sidebar_show}
      aria-controls="mobile-nav"
      tabindex="-1"
    >
      <input
        type="checkbox"
        id="check"
        checked={sidebar_show}
        on:change={handleMenuChange}
      />
      <span />
      <span />
      <span />
    </label>
  </div>

  <SideBar {segment} bind:show={sidebar_show} />
</header>

<style>
  label {
    display: flex;
    flex-direction: column;
    width: 30px;
    cursor: pointer;
  }

  label span {
    background: var(--garden-800);
    border-radius: 6px;
    height: 3px;
    margin: 3px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1) {
    width: 60%;
  }

  span:nth-of-type(2) {
    width: 100%;
  }

  span:nth-of-type(3) {
    width: 80%;
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(4px, 0px);
  }

  input[type='checkbox']:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type='checkbox']:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(14px, -6px) rotatez(45deg);
  }

  #desktop-nav {
    display: none;
  }

  #menu-toggle {
    z-index: 3;
    background: transparent;
    border: none;
  }

  #menu-toggle:hover {
    cursor: pointer;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: 80vw; */
    margin: 3rem 1rem;
  }

  a.skip-link {
    position: fixed;
    top: -30em;
    left: 0;
    right: 0;
    z-index: 20;
    background: var(--garden-800);
    color: #fff;
    padding: 0.5em 1em;
    font-size: 1em;
    text-align: center;
    transition: top 0.1s linear;
  }

  a.skip-link:focus {
    top: 0;
  }

  .logo-wrap {
    margin: 0;
    flex: 1;
    min-width: 0;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
  }

  .search-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    padding: 0;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: var(--garden-800);
    cursor: pointer;
  }

  .search-toggle:hover {
    background: var(--garden-100);
  }

  nav {
    font-weight: 300;
    padding: 0;
  }

  .logo {
    padding: 0;
    margin: 0;
    color: inherit;
    text-decoration: none;
    font-size: 20px;
    font-size: clamp(1.6rem, -0.875rem + 8.333vw, 2.2rem);
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1.2rem;
    list-style-type: none;
  }

  /* clearfix 
	ul::after {
		content: '';
		display: block;
		clear: both;
	}*/

  li {
    display: block;
  }

  #desktop-nav a {
    position: relative;
    display: block;
    text-decoration: none;
    padding: 0.4em 0.5em;
  }

  #desktop-nav a::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 3px;
    background-color: none;
    display: block;
    bottom: -1px;
  }

  #desktop-nav [aria-current] {
    position: relative;
    display: inline-block;
  }

  #desktop-nav [aria-current]::after {
    background-color: gray;
    background-color: var(--garden-600);
  }

  @media screen and (min-width: 650px) {
    #desktop-nav {
      display: block;
    }
    #menu-toggle {
      display: none;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 80vw;
      margin: 3rem auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    label span {
      background: var(--garden-50);
    }

    .search-toggle {
      color: var(--garden-100);
    }

    .search-toggle:hover {
      background: var(--garden-800);
    }
  }
</style>
