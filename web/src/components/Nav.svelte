<script lang=ts>
	import { client } from './SanityClient'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import SideBar from './SideBar.svelte'
	export let segment: string

	let title = "Karla Kratz Poetry"
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
			<div class="logo" transition:fade>{title}</div>
		{:else}
			<div> </div>
		{/if}
	</div>

	<label for="check" id="menu-toggle" class:opened  aria-label="Main Menu" aria-expanded={sidebar_show}>
		<input type="checkbox" id="check" bind:checked={sidebar_show}/> 
		<span></span>
		<span></span>
		<span></span>
	</label>

	<SideBar {segment} bind:show={sidebar_show}/>

<!-- Desktop Nav -->
	<nav id="desktop-nav">
		<ul>
			<li><a sveltekit:prefetch aria-current="{segment === '' ? 'page' : undefined}" href="/">home</a></li>
			<li><a sveltekit:prefetch aria-current="{segment === 'poems' ? 'page' : undefined}" href="/poems">poems</a></li>
			<li><a sveltekit:prefetch aria-current="{segment === 'book' ? 'page' : undefined}" href="/book">book</a></li>
			<li><a sveltekit:prefetch aria-current="{segment === 'about' ? 'page' : undefined}" href="/about">about</a></li>
		</ul>
	</nav>
<!-- Desktop Nav End -->
</header>

<style>
label{
 display:flex;
  flex-direction:column;
  width:30px;
  cursor:pointer;
}

label span{
  background: #000;
  border-radius:10px;
  height:4px;
  margin: 3px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1){
  width:50%;
}

span:nth-of-type(2){
  width:100%;
}

span:nth-of-type(3){
  width:75%;
}

input[type="checkbox"]{
  display:none;
}

input[type="checkbox"]:checked ~ span:nth-of-type(1){
  transform-origin:bottom;
  transform:rotatez(45deg) translate(4px,0px)
}

input[type="checkbox"]:checked ~ span:nth-of-type(2){ 
  transform-origin:top;
  transform:rotatez(-45deg)
}

input[type="checkbox"]:checked ~ span:nth-of-type(3){  
  transform-origin:bottom;
  width:50%;
  transform: translate(14px,-6px) rotatez(45deg);
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
		margin-left: 1.2rem;
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

	@media screen and (max-width: 650px){
		header {
			max-width: 100vw;
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}
</style>