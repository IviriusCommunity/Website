<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Button, Checkbox } from "fluent-svelte";
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius website" />
</svelte:head>

<section>
	<h1>
		Main Page
	</h1>

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

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
