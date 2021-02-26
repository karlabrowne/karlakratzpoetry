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

<nav>
	<div>
		{#if title}
			<h1 transition:fade>{title}</h1>
		{:else}
			<h1> </h1>
		{/if}
	</div>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a rel=prefetch aria-current="{segment === 'poems' ? 'page' : undefined}" href="poems">poems</a></li>
		<li><a aria-current="{segment === 'book' ? 'page' : undefined}" href="book">book</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 300;
		padding: 0 1em;
	}

	nav, nav > * {
		min-height: 5rem;
	}

	h1 {
		margin: 1rem auto;
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
		height: 2px;
		background-color: var(--gray);
		display: block;
		bottom: -1px;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		background-color: var(--blue);
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>