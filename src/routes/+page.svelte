<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>

<section>
	<h1>
		<Fluent.TextBlock variant="titleLarge">Ivirius</Fluent.TextBlock>
	</h1>
 <h2>
		<Fluent.TextBlock variant="body" align="center">We made the #1 WordPad app in the Microsoft Store, which is available for Windows 10 and 11.</Fluent.TextBlock>
 </h2>
</section>
 
<section>
	<h2>
		<Fluent.Button variant="accent">Download Ivirius Text Editor Plus</Fluent.Button>
		<Fluent.Button>Download Ivirius Text Editor</Fluent.Button>
		<Fluent.Button>Download Ivirius Hub</Fluent.Button>
	</h2>

</section>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");

	/* Some base styles to get things looking right. */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
	}
    section {
        text-align: center;
    }
</style>