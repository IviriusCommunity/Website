<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>

<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: rgba(0, 0, 0, 0.15);">
  <Fluent.PersonPicture src="https://cdn.discordapp.com/attachments/1137161703000375339/1188990519418834994/Ivirius.png?ex=65dd2236&is=65caad36&hm=f5647520279749bf9811d7908e38f0586bedeef666f65ccfee30fb727a36471b" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 20px; align-items: center;"/>
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 15px; align-items: center;">Ivirius</Fluent.TextBlock>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;">Home</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/crimsonui';">CrimsonUI</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/documentations';">Documentations</Fluent.Button>
</section>

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
		<Fluent.Button variant="accent" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Download Ivirius Text Editor Plus</Fluent.Button>
		<Fluent.Button style="margin: 15px">Download Ivirius Text Editor</Fluent.Button>
		<Fluent.Button>Download Ivirius Hub</Fluent.Button>
	</h2>

</section>
 
<section class="margin-section">
	<h1>
		<Fluent.TextBlock variant="subtitle">Ivirius Text Editor Plus</Fluent.TextBlock>
 </h1>
 <h2>
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