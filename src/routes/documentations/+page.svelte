<!--Head-->
<svelte:head>
    <title>Ivirius - Documentations</title>
    <meta name="description" content="Ivirius - documentations for developers" />
    <meta content="Ivirius Community Community" name="author" />
    <meta content="#6ba4ff" name="theme-color" />
</svelte:head>

<div class="container">
    <div class="panel">
        <!-- Panel content -->
        <h2>
            <Fluent.Expander expanded> General <div slot="content">
                    <Fluent.ListItem selected>Home</Fluent.ListItem>
                    <Fluent.ListItem onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.ListItem>
                    <Fluent.ListItem onclick="window.location.href='/documentations/install-app-package-manually';">Install app package manually</Fluent.ListItem>
                </div>
            </Fluent.Expander>

            <Fluent.Expander> WinUI 3 <div slot="content">
                    <Fluent.ListItem disabled>Full customization sample</Fluent.ListItem>
                    <Fluent.ListItem disabled>Ivirius.Windowing API</Fluent.ListItem>
                    <Fluent.ListItem disabled>Acrylic Glass</Fluent.ListItem>
                    <Fluent.ListItem disabled>WinUI title bar customization</Fluent.ListItem>
                    <Fluent.ListItem disabled>Ivirius.Converters</Fluent.ListItem>
                    <Fluent.ListItem disabled>Ivirius.Helpers</Fluent.ListItem>
                    <Fluent.ListItem disabled>Ivirius.Win32</Fluent.ListItem>
                    <Fluent.ListItem disabled>Snap layouts on demand</Fluent.ListItem>
                </div>
            </Fluent.Expander>

            <Fluent.Expander> UWP <div slot="content">
                    <Fluent.ListItem disabled>Full customization sample</Fluent.ListItem>
                    <Fluent.ListItem disabled>Ivirius.Windowing API</Fluent.ListItem>
                    <Fluent.ListItem disabled>Acrylic Glass</Fluent.ListItem>
                    <Fluent.ListItem onclick="window.location.href='/documentations/windowdecorations';">WindowDecorations</Fluent.ListItem>
                    <Fluent.ListItem disabled>Ivirius.Converters</Fluent.ListItem>
                    <Fluent.ListItem disabled>Ivirius.Helpers</Fluent.ListItem>
                    <Fluent.ListItem disabled>Uncontained app</Fluent.ListItem>
                </div>
            </Fluent.Expander>

            <Fluent.Expander> Ivirius Text Editor Plus <div slot="content">
                    <Fluent.ListItem disabled>Print</Fluent.ListItem>
                    <Fluent.ListItem disabled>Tables</Fluent.ListItem>
                    <Fluent.ListItem disabled>Zippy</Fluent.ListItem>
                </div>
            </Fluent.Expander>

            <Fluent.Expander> Rebound 11 <div slot="content">
                    <Fluent.ListItem disabled>Control Panel</Fluent.ListItem>
                    <Fluent.ListItem disabled>Run</Fluent.ListItem>
                    <Fluent.ListItem disabled>Disk Cleanup</Fluent.ListItem>
                    <Fluent.ListItem disabled>Defragment and Optimize Drives</Fluent.ListItem>
                    <Fluent.ListItem disabled>TPM Manager</Fluent.ListItem>
                    <Fluent.ListItem disabled>Rebound Hub</Fluent.ListItem>
                </div>
            </Fluent.Expander>
        </h2>
    </div>

    <div class="main-content" id="content">
        <!-- Main content -->
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
    </div>
</div>

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

    .container {
        display: flex;
        flex-wrap: wrap;
    }

    .panel {
        flex: 1;
        padding: 20px;
        box-sizing: border-box;
        margin-top: 10px;
    }

    .main-content {
        flex: 3;
        padding: 20px;
        box-sizing: border-box;
        border-top-left-radius: 8px;
        background-color: var(--fds-control-fill-default);
        margin-top: 50px;
    }

    @media (max-width: 1100px) {
        .container {
            flex-direction: column;
        }

        .panel,
        .main-content {
            flex: 1;
            width: auto;
        }
    }
</style>

<script>
    //Imports
    import * as Fluent from "fluent-svelte";
    import "fluent-svelte/theme.css";
</script>