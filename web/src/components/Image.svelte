<script lang="ts">
  import { fade } from "svelte/transition";

  export let src: string;
  export let alt: string;
  export let srcset: string;
  let loaded = false;

  const onload = () => {
    loaded = true
  };
</script>

{#if loaded}
  <img {src} {srcset} {alt} transition:fade />
{:else}
  <img aria-hidden class="temp_img" {src} {srcset} {alt} on:load={onload} />
{/if}

<style>
  .temp_img {
    visibility: hidden;
  }
</style>