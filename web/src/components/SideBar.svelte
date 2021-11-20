<script>
  import { fly } from 'svelte/transition'

  export let show = false
  export let segment
</script>

{#if show}
  <nav transition:fly={{ x: 550, opacity: 1 }}>
    <ul>
      <li>
        <a
          sveltekit:prefetch
          aria-current={segment === '' ? 'page' : undefined}
          href="/"
          on:click={() => (show = false)}>home</a
        >
      </li>
      <li>
        <a
          sveltekit:prefetch
          aria-current={segment === 'poems' ? 'page' : undefined}
          href="/poems"
          on:click={() => (show = false)}>poems</a
        >
      </li>
      <li>
        <a
          sveltekit:prefetch
          aria-current={segment === 'book' ? 'page' : undefined}
          href="/book"
          on:click={() => (show = false)}>book</a
        >
      </li>
      <li>
        <a
          sveltekit:prefetch
          aria-current={segment === 'about' ? 'page' : undefined}
          href="/about"
          on:click={() => (show = false)}>about</a
        >
      </li>
    </ul>
  </nav>
{/if}

<style>
  nav {
    width: calc(100vw - 2rem);
    position: fixed;
    top: 0;
    right: 0;
    padding: 2rem 1rem 0.6rem;
    background: var(--garden-50);
    overflow-y: auto;
    z-index: 2;
  }

  ul {
    height: 100vh;
    margin-left: 0;
    padding-left: 0;
    list-style-type: none;
  }

  li {
    margin-bottom: 3.25rem;
    font-size: 1.8rem;
  }

  @media screen and (min-width: 650px) {
    nav {
      display: none;
    }

    li {
      font-size: 1.25rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    nav {
      background: var(--garden-900);
    }
  }
</style>
