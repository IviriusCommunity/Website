<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />

<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: rgba(25, 25, 25, 0.15); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">
  <Fluent.PersonPicture src="https://cdn.discordapp.com/attachments/1137161703000375339/1188990519418834994/Ivirius.png?ex=65dd2236&is=65caad36&hm=f5647520279749bf9811d7908e38f0586bedeef666f65ccfee30fb727a36471b" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;">Home</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/crimsonui';">CrimsonUI</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/documentations';">Documentations</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/contact';">Contact us</Fluent.Button>
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/about';">About</Fluent.Button>
</section>

<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Ivirius</Fluent.TextBlock>
	</h1>
 <h2>
		<Fluent.TextBlock variant="body" align="center">We made the #1 WordPad app in the Microsoft Store, which is available for Windows 10 and 11.</Fluent.TextBlock>
 </h2>
</section>
 
<section class="centered-section">
	<h2>
		<Fluent.Button variant="accent" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Download Ivirius Text Editor Plus</Fluent.Button>
		<Fluent.Button style="margin: 15px">Download Ivirius Text Editor</Fluent.Button>
		<Fluent.Button>Download Ivirius Hub</Fluent.Button>
	</h2>
</section>

 <section class="centered-section">
	<h2>
		<Fluent.InfoBar severity="caution" title="Important!" message="This website is a work in progress and will be updated in the future."/>
	</h2>
</section>
 
<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Ivirius Text Editor Plus</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">The Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows 11. It features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The autosave feature ensures your work is safe. Download it from the Microsoft Store for the ultimate text editing experience.</Fluent.TextBlock>
        </h2>
        <h3>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/ivirius-text-editor-plus';">Learn more</Fluent.Button>
        </h3>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Ivirius Text Editor</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">The Ivirius Text Editor is a lightweight, feature-rich editor for Windows 11, offering standard RTF editing and convenient tabs. It seamlessly integrates with Windows 11's UI through the WinUI styles library. The editor ensures worry-free work with its autosave feature, saving your documents on every change. Download it from the Microsoft Store for a fluid text editing experience.</Fluent.TextBlock>
        </h2>
        <h3>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/ivirius-text-editor';">Learn more</Fluent.Button>
        </h3>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Ivirius Hub</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">The Ivirius Hub is the sample app from Ivirius, offering the Ivirius.Windowing API for UWP child windows and CrimsonUI XAML code. Experience a fast and fluid sample app that showcases the capabilities of our well built tools. This versatile UWP and Windows App SDK hub is available for download on the Microsoft Store.</Fluent.TextBlock>
        </h2>
        <h3>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/ivirius-hub';">Learn more</Fluent.Button>
        </h3>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">CrimsonUI</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">CrimsonUI is a dynamic UI library designed for UWP and Windows App SDK. Rooted in WinUI and influenced by FireCube's GlowUI, CrimsonUI seamlessly blends default WinUI elements with glowing, shiny components. Immerse yourself in stunning animations, ensuring a very smooth and beautiful user experience. Elevate your app's visual appeal with the elegance of CrimsonUI.</Fluent.TextBlock>
        </h2>
        <h3>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/crimsonui';">Learn more</Fluent.Button>
        </h3>
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
    }
    .margin-section {
        margin: 25px;
    }
    
    body {
      background: url('https://cdn.discordapp.com/attachments/1139901541701124167/1210329956823994479/befunky_2024-1-4_22-54-9.png?ex=65ea2a9c&is=65d7b59c&hm=c1406aef9f01d5eb61f77f03cefd25471cae63502474874b4b1eb0fe141a6eaa&') no-repeat center center fixed;
      background-size: cover;
      opacity: 0.05; /* 5% opacity */
    }
</style>