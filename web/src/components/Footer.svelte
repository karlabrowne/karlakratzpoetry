<script lang="ts">
  import { client } from './SanityClient'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  let title
  let email

  const query = `*[_id == "siteSettings"]{title, email}[0]`

  onMount(async () => {
    const res = await client.fetch(query)
    return { title, email } = res
  });
</script>

<footer>
  {#if email}
    <a href="mailto:{email}" transition:fade>{email}</a>
  {/if}
  {#if title}
    <p transition:fade>Copyright {new Date().getFullYear()} by {title}</p>
  {/if}
</footer>

<style>
  footer {
    border-top: 1px solid var(--gray);
    text-align: center;
    min-height: 4rem;
  }

  footer > * {
    display: block;
  }
</style>