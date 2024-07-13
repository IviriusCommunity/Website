<script>
  import * as Fluent from "fluent-svelte";
  import "fluent-svelte/theme.css";
</script>

<svelte:head>
  <title>Ivirius</title>
  <meta name="description" content="Ivirius official website" />
</svelte:head>

<!--Navbar-->
<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: var(--fds-solid-background-base); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">

	<!--Favicon-->
	<Fluent.PersonPicture src="/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>

	<!--Title-->
	<Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>

	<!--Home-->
	<Fluent.Button style="height: 32px; color: var(--fds-accent-text-primary); margin-right: 15px; align-items: center;">Home</Fluent.Button>

	<!--CrimsonUI-->
	<Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.Button>

	<!--Documentations-->
	<Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/documentations';">Documentations</Fluent.Button>

	<!--Contact us-->
	<Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/contact';">Contact us</Fluent.Button>

	<!--About-->
	<Fluent.Button style="color: var(--fds-text-primary); border-color: var(--fds-accent-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/about';">About</Fluent.Button>
</section>

<section class="centered-section">
<h1>
  <Fluent.TextBlock variant="titleLarge">Uh oh...</Fluent.TextBlock>
</h1>
<h2>
  <Fluent.TextBlock variant="body" align="center">No one's here. Try checking the URL and try again.</Fluent.TextBlock>
</h2>
</section>

<section class="centered-section">
<h2>
  <Fluent.Button variant="accent" onclick="window.location.href='/';">Home page</Fluent.Button>
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
    margin: 25px;
    max-width: 1800px;
  }
  .margin-section {
    margin: 25px;
    max-width: 1800px;
  }
</style>