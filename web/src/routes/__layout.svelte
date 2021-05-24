<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { page } from '$app/stores'

	$: segment = $page.path.split('/')[1];
</script>

<style>
	main {
		position: relative;
		max-width: 80vw;
		background-color: white;
		padding: 0 0 2em;
		margin: 0 auto;
		box-sizing: border-box;
		border-bottom: 1px solid var(--gray);
	}

</style>

<Nav {segment}/>
<main>
	<slot></slot>
</main>
<Footer />