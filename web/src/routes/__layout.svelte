<script lang=ts>
	import { page, session } from '$app/stores'
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	onMount(() => $session = undefined);
	import "../../static/global.css"; 

	$: segment = $page.path.split('/')[1];
</script>

<style>
	main {
		position: relative;
		padding: 0 0 2rem;
		margin: 0 1rem;
		box-sizing: border-box;
		border-bottom: 1px solid var(--garden-700);
	}

	@media screen and (min-width: 768px) {
		main {
			max-width: 80vw;
			margin: 0 auto;
		}
	}

	@media (prefers-color-scheme: dark) {
		main {
			border-bottom: 1px solid var(--garden-900);
		}
	}

</style>

<Nav {segment}/>
<main>
	<slot></slot>
</main>
<Footer />