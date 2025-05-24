<script>
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';

	import Highlight, { LineNumbers } from 'svelte-highlight';
	import csharp from 'svelte-highlight/languages/csharp';
	import 'svelte-highlight/styles/onedark.css';

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

<svelte:head>
	<title>Ivirius - Docs</title>
	<meta name="description" content="Ivirius docs" />
</svelte:head>

<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge"
			>Docs - WindowDecorations - Hide the title bar in UWP AppWindow</Fluent.TextBlock
		>
	</h1>
	<h2>
		<Fluent.TextBlock variant="body" align="center"
			>This page will teach you how to hide the title bar area completely in UWP.</Fluent.TextBlock
		>
	</h2>
</section>

<section class="centered-min-section">
	<h2></h2>
</section>

<div style="border: 1px solid rgba(128, 128, 128, 0.5); margin: 25px 0;">
<Highlight language={csharp} {code} let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
</div>

<section class="margin-section">
	<Fluent.TextBlock variant="body" align="center"
		>Have you ever wondered how to hide the title bar buttons in UWP, and then searched for hours
		and hours and did not find anything? That's not because it's impossible, it's because this
		feature is part of UWP's LimitedAccessFeatures, meaning that it is not documented on Microsoft's
		website.</Fluent.TextBlock
	>
</section>
<section class="margin-section">
	<Fluent.TextBlock variant="body" align="center"
		>Compared to the standard TitleBar.ExtendsContentIntoTitleBar = true; method, this function
		hides the title bar area, including the buttons. However, due to it being a limited access
		extension, it only works on AppWindow.</Fluent.TextBlock
	>
</section>
<section class="margin-section">
	<Fluent.TextBlock variant="body" align="center">More information coming soon.</Fluent.TextBlock>
</section>

<style>
	@import url('https://unpkg.com/fluent-svelte/theme.css');

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
