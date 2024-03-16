<script>
  //Imports
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";

  //Variables
  let open = true;
</script>

<!--Head-->
<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website"/>
</svelte:head>

<!--Navbar-->
<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: rgba(25, 25, 25, 0.15); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">

  <!--Favicon-->
  <Fluent.PersonPicture src="https://ivirius.vercel.app/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>

  <!--Title-->
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>

  <!--Home-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;">Home</Fluent.Button>

  <!--CrimsonUI-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/crimsonui';">CrimsonUI</Fluent.Button>

  <!--Documentations-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/documentations';">Documentations</Fluent.Button>

  <!--Contact us-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/contact';">Contact us</Fluent.Button>

  <!--About-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/about';">About</Fluent.Button>
</section>

<!--Title-->
<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Ivirius</Fluent.TextBlock>
	</h1>
 <h2>
		<Fluent.TextBlock variant="body" align="center">We made the #1 WordPad app in the Microsoft Store, which is available for Windows 10 and 11.</Fluent.TextBlock>
 </h2>
</section>

<!--Download buttons-->
<section class="centered-section">
	<h2>
		<Fluent.Button variant="accent" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Download Ivirius Text Editor Plus</Fluent.Button>
		<Fluent.Button style="margin: 15px">Download Ivirius Text Editor</Fluent.Button>
		<Fluent.Button>Download Ivirius Hub</Fluent.Button>
	</h2>
</section>

<!--InfoBar-->
 <section class="margin-section">
	<h2>
		<Fluent.InfoBar severity="caution" title="Important!" message="This is the only finished page of this website. The rest are actively being worked on. Thank you for your patience." style="max-width:550px;"/>
	</h2>
</section>

<!--Content dialog-->
 <Fluent.ContentDialog bind:open title="Warning!">
   This website is experimental and still in its early stages of development. Please report any bugs to us via email at iviriuscompany.main@gmail.com.
	<Fluent.Button slot="footer" variant="accent" on:click={() => (open = false)}>Proceed</Fluent.Button>
 </Fluent.ContentDialog>

<!--Ivirius Text Editor Plus-->
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

<!--Ivirius Hub-->
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

<!--CrimsonUI-->
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

<!--Bottom bar-->
<section style="padding-top: 10px; padding-bottom: 10px; padding-left: 25px; background: rgba(25, 25, 25, 0.15); border-top: 1px solid rgba(205, 205, 205, 0.25); display: flex; flex-direction: column; align-items: flex-start;">
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
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/about';" style="margin-top: 10px; margin-bottom: 10px;">About</Fluent.Button>
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
    background-image: url("https://cdn.discordapp.com/attachments/1141503151808184401/1210350581504278618/1000030651-safeimagekit.jpeg.png?ex=65ea3dd1&is=65d7c8d1&hm=facb30449de806bcb7bb777bd14e81dddb7bf7de9e882144896e0bc80b304153&");

    /*Background color*/
		color: var(--fds-text-primary);
	}

  /*Centered section*/
  .centered-section
  {
    text-align: center;
    margin: 0 auto;
    padding: 25px;
  }

  /*Left aligned centered section*/
  .margin-section
  {
    margin: 0 auto;
    padding: 25px;
  }
</style>