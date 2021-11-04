<script context="module" lang="ts">
	import { client } from '../../components/SanityClient'
	
	export const load = async () => {
		const poemQuery = "*[_type == 'poem']{_id, slug, name, categories[]->{title}}"
		const catQuery = "*[_type == 'category']{_id, title}"
		const poems = await client.fetch(poemQuery)
		const categoriesArr = await client.fetch(catQuery)
		if (poems && categoriesArr) {
			return {
				props: {
					poems: await poems,
					categoriesArr: await categoriesArr
				}
			};
		}

		return {
			status: 'error',
			error: new Error(`Could not load data`)
		}
	};
</script>

<script lang="ts">
	import { Moon } from 'svelte-loading-spinners'
	import { page, session } from '$app/stores'
	import { filterPoems } from '../../components/utils'

	type Slug = {
		_type: string,
		current: string,
	}

	export let poems: { slug: Slug, name: string, _id: string, categories: Array<any>}[] = []
	export let categoriesArr: { title: string, _id: string}[] = []

	let filteredPoems = poems
	
	let vw

  $:( $session ? filteredPoems = filterPoems(poems, $session) : filteredPoems = poems )
	

</script>

<svelte:window bind:innerWidth={vw}/>

<div class="page-wrapper">

	<!-- poems rendered here on mobile-->
	{#if vw < 650}
		<slot>
		</slot>
	{/if}

  <div class="side-bar">
		<h2>Poems by category</h2>
		<div class="filter-cont">
			{#each categoriesArr as { title }}
				<button class="filter-button" on:click|preventDefault={
					() => {
						filteredPoems = filterPoems(poems, title)
						$session = title
					}}
					style={title == $session ? 'background: var(--garden-700); color: var(--garden-50); border-color: var(--garden-700);' : ''}
				>
					{ title }
				</button>
			{/each}
			<button class="filter-button" on:click|preventDefault={() => {
				filteredPoems = poems
				$session = undefined
			}}
				style={ !$session ? 'background: var(--garden-700); color: var(--garden-50); border-color: var(--garden-700);' : ''}	
			>All</button>
		</div>
    {#if poems}
			<ul>
				{#each filteredPoems as { name, slug }}
					{#if slug}
						<li>
							<a class="item-poem" aria-current={$page.path === `/poems/${slug.current}` && 'location'} rel=prefetch href={$page.path === `/poems` ? `poems/${slug.current}` : `${slug.current}`}>
								{ name }
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		{/if}
	</div>  

	<!-- poems rendered here on desktop-->
	{#if vw >= 650}
		<slot>
			{#if poems === []}
				<Moon size="60" color="#329659" unit="px" duration="1s"/>
			{/if}
		</slot>
	{/if}

</div>

<style>
	.page-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-column-gap: 1em;
	}

	.filter-cont {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		font-family: var(--ui-font);
		/* font-family: "Roboto Condensed", monospace; */
		font-weight: 400;
	}

	.filter-cont > button {
		border: 2px solid var(--garden-600);
		border-radius: 15px;
		background: transparent;
		color: var(--garden-600);
		margin: 0 .2rem .4rem 0;
		font-size: 1rem;
		font-family: var(--ui-font);
		/* font-family: "Roboto Condensed", monospace; */
		font-weight: 400;
		padding: .2em .6em;
	}

	.filter-cont > button:hover {
		cursor: pointer;
		background: var(--garden-700);
		color: var(--garden-50);
		border-color: var(--garden-700);
	}

	.side-bar h2 {
		font-family: var(--ui-font);
		/* font-family: "Roboto Condensed", monospace, sans-serif; */
		color: var(--garden-600);
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 2;
	}

	ul {
		margin: 0;
		line-height: 1.13;
		list-style: none;
		padding: 0;
		font-size: 1.4rem;
	}

	ul li {
		margin-bottom: 1.4rem;
	}

	.item-poem[aria-current="location"] {
		text-decoration: none;
	}

	@media screen and (min-width: 900px){
		.page-wrapper {
			grid-template-columns: 1fr 3fr;
			grid-column-gap: 6em;
		}
	}

	@media screen and (min-width: 650px) {
		.page-wrapper {
			grid-template-columns: 1fr 2fr;
			grid-column-gap: 3em;
		}
	}
</style>
