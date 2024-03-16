<script>
  //Imports
  import * as Fluent from "fluent-svelte";
  import "fluent-svelte/theme.css";
</script>

<!--Head-->
<svelte:head>
  <title>Ivirius - Documentations</title>
  <meta name="description" content="Ivirius - documentations for developers"/>
</svelte:head>

<!--Navbar-->
<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: var(--fds-solid-background-base); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">

  <!--Favicon-->
  <Fluent.PersonPicture src="/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>

  <!--Title-->
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>

  <!--Home-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/';">Home</Fluent.Button>

  <!--CrimsonUI-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.Button>

  <!--Documentations-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;">Documentations</Fluent.Button>

  <!--Contact us-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/contact';">Contact us</Fluent.Button>

  <!--About-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/about';">About</Fluent.Button>
</section>

<!--Title-->
<section class="centered-section">
  <h1>
    <Fluent.TextBlock variant="titleLarge">Documentations</Fluent.TextBlock>
  </h1>
 <h2>
    <Fluent.TextBlock variant="body" align="center">Read documentations on various tools and APIs from Ivirius and less known features in UWP and Windows App SDK.</Fluent.TextBlock>
 </h2>
</section>

<section class="margin-section">
        <h2>
  <Fluent.ListItem selected>Documentations - Home</Fluent.ListItem>
<Fluent.ListItem disabled>Ivirius.Windowing API</Fluent.ListItem>
  <Fluent.ListItem onclick="window.location.href='/documentations/windowdecorations';">Hide the title bar in UWP AppWindow</Fluent.ListItem>
  <Fluent.ListItem onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.ListItem>
<Fluent.ListItem disabled>Ivirius.Windowing API</Fluent.ListItem>
<Fluent.ListItem disabled>Acrylic Glass</Fluent.ListItem>
<Fluent.ListItem disabled>Ivirius.Converters</Fluent.ListItem>
<Fluent.ListItem disabled>Ivirius.Helpers</Fluent.ListItem>
<Fluent.ListItem disabled>UWP - full customization sample</Fluent.ListItem>
<Fluent.ListItem disabled>WASDK - full customization sample</Fluent.ListItem>
        </h2>

</section>

<!--Bottom bar-->
<section style="padding-top: 10px; padding-bottom: 10px; padding-left: 25px; background: var(--fds-solid-background-base); border-top: 1px solid rgba(205, 205, 205, 0.25); display: flex; flex-direction: column; align-items: flex-start;">
  <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
    Partners
  </Fluent.TextBlock>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.spoo.me';" style="margin-top: 10px; margin-bottom: 10px;">spoo.me URL shortener</Fluent.Button>
  <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
    Developers and contributors
  </Fluent.TextBlock>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-top: 10px; margin-bottom: 10px;">ErrorTek</Fluent.Button>
  <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
    Website
  </Fluent.TextBlock>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://fluent-svelte.vercel.app';" style="margin-top: 10px; margin-bottom: 10px;">Fluent Svelte</Fluent.Button>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.vercel.com';">Vercel</Fluent.Button>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='/about';" style="margin-top: 10px; margin-bottom: 10px;">About</Fluent.Button>
</section>

<!--Styles-->
<style>
  /*Import theme*/
  @import url("https://unpkg.com/fluent-svelte/theme.css");

  /* Some base styles to get things looking right. */
  :global(body)
  {
    /*Background color*/
    background-color: var(--fds-solid-background-base);

    /*Background image*/
    background-image: url("https://i.spoo.me/825520");

    /*Background color*/
    color: var(--fds-text-primary);
  }

  /*Centered section*/
  .centered-section
  {
    text-align: center;
    margin: 0 auto;
    padding: 25px;
    max-width: 1250px;
  }

  /*Left aligned centered section*/
  .margin-section
  {
    margin: 0 auto;
    padding: 25px;
    max-width: 1250px;
  }
</style>