<script>
        import * as Fluent from "fluent-svelte";
        import "fluent-svelte/theme.css";
</script>

<svelte:head>
        <title>Ivirius</title>
        <meta name="description" content="Ivirius official website" />
</svelte:head>
<section>
        <div style="height: 1000000px;">
        
        </div>
<h1>
<Fluent.ContentDialog open="true" title="Uh oh...">
No one's here. Try checking the URL and try again.
                <Fluent.Button variant="accent" slot="footer" onclick="window.location.href='/';">Home page</Fluent.Button>
</Fluent.ContentDialog>
</h1>
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