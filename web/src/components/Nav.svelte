<script lang="ts">
	import { client } from './SanityClient'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import SideBar from './SideBar.svelte'
	export let segment: string

	let title
	const query = `*[_id == "siteSettings"]{title}[0]`

	let sidebar_show = false;
	$: opened = sidebar_show;

	onMount(async () => {
		return { title } = await client.fetch(query)
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<header>
	<a class="skip-link" href="#main">skip to main content</a>
	<div>
		{#if title}
			<h1 transition:fade>{title}</h1>
		{:else}
			<h1> </h1>
		{/if}
	</div>

	<button id="menu-toggle" class="menu" class:opened on:click={() => { 
		sidebar_show = !sidebar_show 
	}} aria-label="Main Menu" aria-expanded={sidebar_show}>
		<svg class="scale" width="100" height="100" viewBox="0 0 100 100">
			<path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
			<path class="line line2" d="M 20,50 H 80" />
			<path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
		</svg>
	</button>



	<SideBar {segment} bind:show={sidebar_show}/>
<!-- Desktop Nav -->
	<nav id="desktop-nav">
		<ul>
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
			<li><a rel=prefetch aria-current="{segment === 'poems' ? 'page' : undefined}" href="poems">poems</a></li>
			<li><a aria-current="{segment === 'book' ? 'page' : undefined}" href="book">book</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		</ul>
	</nav>
<!-- Desktop Nav End -->
</header>

<style>
.scale {
	transform: scale(.4);
}
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}


	#desktop-nav{
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
		/* padding: 0 2em 0; */
		max-width: 80vw;
		margin: 3em auto;
	}

	a.skip-link {
		position: fixed;
		top: -30em;
		left: 0;
		right: 0;
		z-index: 20;
		background: var(--garden-800);
		color: #fff;
		padding: .5em 1em;
		font-size: 1em;
		text-align: center;
		transition: top .1s linear;
	}
	
	nav {
		font-weight: 300;
		padding: 0;
	}

	nav, nav > * {
		/* min-height: 5rem; */
	}

	h1 {
		margin: 0 auto;
		font-size: 32px;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
	}

	a {
		position: relative;
		display: inline-block;
	}

	a::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 3px;
		background-color: none;
		display: block;
		bottom: -1px;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		background-color: gray;
		background-color: var(--garden-600);
	}

	a {
		text-decoration: none;
		padding: .4em 0.5em;
		display: block;
	}

	@media screen and (min-width: 650px){
		#desktop-nav{
			display: block;
		}
		#menu-toggle {
			display: none;
		}
	}
</style>