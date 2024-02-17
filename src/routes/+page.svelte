<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>

<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Ivirius</Fluent.TextBlock>
	</h1>
 <h2>
		<Fluent.TextBlock variant="body" align="center">We made the #1 WordPad app in the Microsoft Store, which is available for Windows 10 and 11.</Fluent.TextBlock>
 </h2>
</section>
 
<section class="centered-section">
	<h2>
		<Fluent.Button variant="accent">Download Ivirius Text Editor Plus</Fluent.Button>
		<Fluent.Button>Download Ivirius Text Editor</Fluent.Button>
		<Fluent.Button>Download Ivirius Hub</Fluent.Button>
	</h2>

</section>
 
<section class="margin-section">
	<h2>
		<Fluent.TextBlock variant="subtitle">Ivirius Text Editor Plus</Fluent.TextBlock>
		<Fluent.TextBlock variant="body">Ivirius Text Editor Plus is a rich text editor app built on the Windows App SDK using WinUI 3.</Fluent.TextBlock>
	</h2>

</section>

<style>
	@import url("https://unpkg.com/fluent-svelte/theme.css");

	/* Some base styles to get things looking right. */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
	}
    .centered-section {
        text-align: center;
    }
    .margin-section {
        margin: 25px;
    }
</style>