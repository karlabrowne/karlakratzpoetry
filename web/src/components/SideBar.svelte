<script>
  import { fly } from 'svelte/transition'
  
  export let show = false
  export let segment;
</script>

{#if show}
  <nav transition:fly={{x: 550, opacity: 1}}>
    <ul>
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
			<li><a rel=prefetch aria-current="{segment === 'poems' ? 'page' : undefined}" href="poems">poems</a></li>
			<li><a aria-current="{segment === 'book' ? 'page' : undefined}" href="book">book</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		</ul>
  </nav>
{/if}


		
<style>
nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 2rem 1rem 0.6rem;
  background: #ffffff;
  overflow-y: auto;
	width: 80vw;
  z-index: 2;
}

ul {
  background:white;
  height: 100vh;
}

li {
  margin-bottom: .75rem;
  font-size: 1.25rem;
}

@media screen and (min-width: 650px) {
  nav {
    display: none;
  }
}
</style>