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
  <Fluent.TextBlock variant="titleLarge">Ivirius Community Website</Fluent.TextBlock>
</h1>
<h2>
  <Fluent.TextBlock variant="body" align="center">v0.9.2 PRE RELEASE</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">This website is currently being reconstructed.</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">See legal info in the footer.</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">Custom cookies: None.</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">----------------------------------------------------------------------</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">Ivirius - Frontend and Backend</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">Zingzy - Contact API</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">----------------------------------------------------------------------</Fluent.TextBlock>
</h2>
<h2>
  <Fluent.TextBlock variant="body" align="center">Thank you for choosing Ivirius products!</Fluent.TextBlock>
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