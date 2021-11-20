<script lang="ts">
  import { fade } from 'svelte/transition'

  export let data = { title: '', email: '' }
  let { title, email } = data
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
    text-align: center;
    min-height: 4rem;
    padding: 3em 1em;
  }

  footer > * {
    display: block;
  }
</style>
