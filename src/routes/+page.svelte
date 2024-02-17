<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>

<section>
	<h2>
		<Fluent.TextBlock variant="caption">Main Page</Fluent.TextBlock>
		<Fluent.Button>Click me!</Fluent.Button>
		<Fluent.Button>Click me!</Fluent.Button>
		<Fluent.Checkbox>Check me!</Fluent.Checkbox>
		<Fluent.TextBox/>
	</h2>

</section>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");

	/* Some base styles to get things looking right. */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
	}
</style>