<script lang="ts">
	import { fade } from 'svelte/transition'
	import SideBar from './SideBar.svelte'
	export let segment: string

	export let data
	let { title = '' } = data

	let sidebar_show = false;
	$: opened = sidebar_show;

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
  background: var(--garden-800);
  border-radius:6px;
  height:3px;
  margin: 3px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1){
  width:60%;
}

span:nth-of-type(2){
  width:100%;
}

span:nth-of-type(3){
  width:80%;
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
		align-items: flex-end;
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
		padding: .5em 1em;
		font-size: 1em;
		text-align: center;
		transition: top .1s linear;
	}
	
	nav {
		font-weight: 300;
		padding: 0;
	}

	.logo {
		margin: 0 auto;
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
	}
</style>