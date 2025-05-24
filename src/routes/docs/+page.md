<script>
    //Imports
    import * as Fluent from "fluent-svelte";
    import "fluent-svelte/theme.css";

  import Highlight, { LineNumbers } from "svelte-highlight";
  // direct import (recommended)
  import csharp from "svelte-highlight/languages/csharp";
  import "svelte-highlight/styles/onedark.css";

    let code = `
    public MainWindow()
    {
        this.InitializeComponent();
        RootFrame.Navigate(typeof(ShellPage));
        CheckWindowProperties();
        this.ExtendsContentIntoTitleBar = true;
        this.AppWindow.TitleBar.PreferredHeightOption = Microsoft.UI.Windowing.TitleBarHeightOption.Collapsed;
        this.AppWindow.TitleBar.ButtonHoverBackgroundColor = Windows.UI.Color.FromArgb(25, 200, 200, 200);
        this.AppWindow.TitleBar.ButtonPressedBackgroundColor = Windows.UI.Color.FromArgb(15, 200, 200, 200);
        this.AppWindow.Title = "Rebound Hub";
        this.SetIcon($"{AppContext.BaseDirectory}\\Assets\\AppIcons\\ReboundHub.ico");

        _msgMonitor ??= new WindowMessageMonitor(this);
        _msgMonitor.WindowMessageReceived -= Event;
        _msgMonitor.WindowMessageReceived += Event;

        if (isCrimsonUIEnabled == true)
        {
            this.AppWindow.TitleBar.PreferredHeightOption = Microsoft.UI.Windowing.TitleBarHeightOption.Collapsed;
            CrimsonUIButtons.Visibility = Visibility.Visible;
            LoadBounds();
        }
        mon = new RegistryMonitor(@"Software\Microsoft\Windows\DWM");
        mon.Start();
        var x = new ThemeListener();
        x.ThemeChanged += X_ThemeChanged;

        Rehook();
        CheckWindow();
    }`;
</script>

# Docs

Read docs about various tools and APIs from Ivirius and less known features in UWP and Windows App SDK.

Here you can find tutorials for pushing the boundaries of WinUI 3 and UWP by enabling snap layouts on a custom title bar button, building an uncontained UWP app, and completely removing its title bar, etc.

<Fluent.InfoBar severity="attention" open title="WinUI 3 and UWP">Samples and code for WinUI 3 and UWP featured in the following articles are gathered from multiple sources and the code may use external libraries.</Fluent.InfoBar>

<Fluent.InfoBar severity="attention" open title="Recommended packages">We recommend you use WinUIEx and WinUICommunity NuGet packages for your WinUI 3 apps.</Fluent.InfoBar>

<Fluent.InfoBar severity="caution" open title="Warning!">This page is not finished yet.</Fluent.InfoBar>

  <div style="border: 1px solid rgba(128, 128, 128, 0.5);">
<Highlight language={csharp} {code} let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
  </div>
