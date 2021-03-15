<script lang="ts">
	import { client, urlFor } from '../components/SanityClient'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

  const query:string = '*[_id == "aboutPage"][0]'

  let mainImage:any
  let artistStatement:Array<any>
  let bio: Array<any>

  onMount(async () => {
		let res = await client.fetch(query)
		return { mainImage, artistStatement, bio } = res
	});
</script>


<div id="about-row">
  <div id="image">
    {#if mainImage}
      <img alt="{mainImage.alt}" src="{ urlFor(mainImage).url() }" transition:fade>
    {:else}
      <div style="width: 400px; height: 400px; background-color: var(--gray);" transition:fade></div>
    {/if}
  </div>
  <div id="text">
    <h2>Artist Statement</h2>
    {#if artistStatement}
      {#each artistStatement as { children }}
        {#each children as { text }}
          <p transition:fade>{ text }</p>
        {/each}
      {/each}
    {/if}

		<h2>Bio</h2>
    {#if bio}
      {#each bio as { children }}
        {#each children as { text }}
          <p transition:fade>{ text }</p>
        {/each}
      {/each}
    {/if}
  </div>
</div>

<style>
  #about-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 6rem;
  }

  #image > * {
		margin: 0 auto;
		display: block;
	}

	img {
		width: 100%;
		max-width: 400px;
	}

	p {
		/* margin: 1em auto; */
    max-width: 60ch;
	}

  @media screen and (min-width: 768px){
    #about-row {
      grid-template-columns: 1fr 3fr;
    }
  }
</style>