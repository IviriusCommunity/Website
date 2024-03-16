<script>
        import * as Fluent from "fluent-svelte";
        import "fluent-svelte/theme.css";
</script>

<svelte:head>
        <title>Ivirius - Documentations</title>
        <meta name="description" content="Ivirius documentations" />
</svelte:head>

<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: rgba(25, 25, 25, 0.15); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">
  <Fluent.PersonPicture src="https://ivirius.vercel.app/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app';">Home</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/crimsonui';">CrimsonUI</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/documentations';">Documentations</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/contact';">Contact us</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/about';">About</Fluent.Button>
</section>

<section class="centered-section">
        <h1>
                <Fluent.TextBlock variant="titleLarge">Documentations - WindowDecorations - Hide the title bar in UWP AppWindow</Fluent.TextBlock>
        </h1>
 <h2>
                <Fluent.TextBlock variant="body" align="center">This page will teach you how to hide the title bar area completely in UWP.</Fluent.TextBlock>
 </h2>
</section>

<section class="centered-min-section">
        <h2>
  <Fluent.ListItem selected="true" onclick="window.location.href='https://ivirius.vercel.app/windowdecorations';">WindowDecorations - Hide the title bar in UWP AppWindow</Fluent.ListItem>
  <Fluent.ListItem disabled="true">CrimsonUI</Fluent.ListItem>
        </h2>

</section>

<section class="margin-section">
                <Fluent.TextBlock variant="body" align="center">Have you ever wondered how to hide the title bar buttons in UWP, and then searched for hours and hours and did not find anything? That's not because it's impossible, it's because this feature is part of UWP's LimitedAccessFeatures, meaning that it is not documented on Microsoft's website.</Fluent.TextBlock>
</section>
<section class="margin-section">
                <Fluent.TextBlock variant="body" align="center">Compared to the standard TitleBar.ExtendsContentIntoTitleBar = true; method, this function hides the title bar area, including the buttons. However, due to it being a limited access extension, it only works on AppWindow.</Fluent.TextBlock>
 </section>
<section class="margin-section">
                <Fluent.TextBlock variant="body" align="center">More information coming soon.</Fluent.TextBlock>
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
    .centered-min-section {
        text-align: center;
        margin: 25px;
        max-width: 400px;
        align: center;
    }
    .margin-section {
        margin: 25px;
        max-width: 1800px;
    }
</style>