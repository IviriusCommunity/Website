<!--Head-->
<svelte:head>
    <title>Ivirius - Documentations</title>
    <meta name="description" content="Ivirius - documentations for developers" />
    <meta content="Ivirius Community Community" name="author" />
    <meta content="#6ba4ff" name="theme-color" />
</svelte:head>

<section class="margin-section">
    <h2>
        <Fluent.TextBlock variant="titleLarge" style="margin-top: -20px;">Documentations - Home</Fluent.TextBlock>
    </h2>
    <h1>
        <Fluent.TextBlock variant="body" align="justify">Read documentations about various tools and APIs from Ivirius and less known features in UWP and Windows App SDK.</Fluent.TextBlock>
    </h1>
    <h1>
        <Fluent.TextBlock variant="body" align="justify">Here you can find tutorials for pushing the boundaries of WinUI 3 and UWP by enabling snap layouts on a custom title bar button, building an uncontained UWP app, and completely removing its title bar, etc.</Fluent.TextBlock>
    </h1>
    <h1>
        <Fluent.InfoBar severity="attention" open title="WinUI 3 and UWP">Samples and code for WinUI 3 and UWP featured in the following articles are gathered from multiple sources and the code may use external libraries.</Fluent.InfoBar>
    </h1>
    <h1>
        <Fluent.InfoBar severity="attention" open title="Recommended packages">We recommend you use WinUIEx and WinUICommunity NuGet packages for your WinUI 3 apps.</Fluent.InfoBar>
    </h1>
    <h1>
        <Fluent.InfoBar severity="caution" open title="Warning!">This page is not finished yet.</Fluent.InfoBar>
    </h1>
</section>
<!--Styles-->
<style>
    /*Import theme*/
    @import url("https://unpkg.com/fluent-svelte/theme.css");

    /* Some base styles to get things looking right. */
    :global(body) {
        /*Background color*/
        background-color: var(--fds-solid-background-base);
        /*Background color*/
        color: var(--fds-text-primary);
    }

    /*Centered section*/
    .centered-section {
        text-align: center;
        margin: 0 auto;
        padding: 25px;
        max-width: 1250px;
    }

    /*Left aligned centered section*/
    .margin-section {
        margin: 0 auto;
        padding: 25px;
        max-width: 1250px;
    }

    .single-line-truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>

<script>
    //Imports
    import * as Fluent from "fluent-svelte";
    import "fluent-svelte/theme.css";
</script>