<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Button, Checkbox, TextBlock } from "fluent-svelte";
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>

<section>
	<span>
		Main Page
	</span>

	<h2>
		<Button>Click me!</Button>
		<Checkbox>Check me!</Checkbox>
	</h2>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
