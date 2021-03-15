<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
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