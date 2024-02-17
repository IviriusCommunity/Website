<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
</script>

<svelte:head>
	<title>Ivirius Text Editor Plus</title>
	<meta name="description" content="Professional text editor app for Windows 11" />
</svelte:head>

<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Ivirius Text Editor Plus</Fluent.TextBlock>
	</h1>
 <h2>
		<Fluent.TextBlock variant="body" align="center">This is the Ivirius Text Editor Plus - our most advanced app</Fluent.TextBlock>
 </h2>
</section>
 
<section class="centered-section">
	<h2>
		<Fluent.Button variant="accent" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Download</Fluent.Button>
		<Fluent.Button disabled="true" variant="hyperlink" style="margin: 15px">GitHub</Fluent.Button>
	</h2>

</section>
 
<section class="margin-section">
	<h1>
		<Fluent.TextBlock variant="subtitle">Made to focus</Fluent.TextBlock>
 </h1>
 <h2>
		<Fluent.TextBlock variant="body">Ivirius Text Editor Plus is designed for maximum focus while editing your text, for a better user experience compared to standard text editors.</Fluent.TextBlock>
	</h2>

</section>
 
<section class="margin-section">
	<h1>
		<Fluent.TextBlock variant="subtitle">Beautiful design</Fluent.TextBlock>
 </h1>
 <h2>
		<Fluent.TextBlock variant="body">Ivirius Text Editor Plus uses WinUI and </Fluent.TextBlock>
<Fluent.Button style="padding: 0px" variant="hyperlink"  onclick="window.location.href='https://ivirius.vercel.app/crimsonui';">CrimsonUI</Fluent.Button>
<Fluent.TextBlock variant="body">for the main layout, making it consistent with the Windows 11 design.</Fluent.TextBlock>
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