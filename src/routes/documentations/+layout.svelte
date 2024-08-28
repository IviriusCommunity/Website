
<script>
    
    import * as Fluent from "fluent-svelte";
    import "fluent-svelte/theme.css";
</script>
<div class="app">
	<main>
		<div>
            
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
        <!-- Content -->
        <slot></slot>
    </div>
</div>

		</div>

	</main>
</div>
<style>
    
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
            border-top-left-radius: 0px;
        }
    }
</style>
