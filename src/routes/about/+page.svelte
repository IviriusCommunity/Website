<script>
  import * as Fluent from "fluent-svelte";
  import "fluent-svelte/theme.css";
</script>

<svelte:head>
  <title>Ivirius</title>
  <meta name="description" content="Ivirius official website" />
</svelte:head>

<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: rgba(25, 25, 25, 0.15); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">
  <Fluent.PersonPicture src="/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/';">Home</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/documentations';">Documentations</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/contact';">Contact us</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/about';">About</Fluent.Button>
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