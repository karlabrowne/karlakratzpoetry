<script lang="ts">
	import { client } from './SanityClient'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	export let segment: string

	let title
	const query = `*[_id == "siteSettings"]{title}[0]`

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
<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a rel=prefetch aria-current="{segment === 'poems' ? 'page' : undefined}" href="poems">poems</a></li>
		<li><a aria-current="{segment === 'book' ? 'page' : undefined}" href="book">book</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
	</ul>
</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* padding: 3em 1em; */
		max-width: 56em;
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
</style>