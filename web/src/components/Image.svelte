<script lang="ts">
  import { optionalFade } from './motion'

  export let src: string
  export let alt: string
  export let srcset: string
  let loaded = false

  const onload = () => {
    loaded = true
  }
</script>

{#if loaded}
  <img {src} {srcset} {alt} transition:optionalFade />
{:else}
  <img aria-hidden class="temp_img" {src} {srcset} {alt} on:load={onload} />
{/if}

<style>
  .temp_img {
    visibility: hidden;
  }
</style>
