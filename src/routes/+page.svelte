<script>
	import * as Fluent from "fluent-svelte";
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
