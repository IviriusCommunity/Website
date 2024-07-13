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
	<meta name="description" content="Ivirius Community official website"/>
	<meta content="Ivirius Community Community" name="author" />
	<meta content="#6ba4ff" name="theme-color" />
</svelte:head>

<!--Navbar-->
<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: var(--fds-solid-background-base); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">

  <!--Favicon-->
  <Fluent.PersonPicture src="/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>

  <!--Title-->
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>

  <!--Home-->
  <Fluent.Button style="height: 32px; border-color: var(--fds-accent-text-primary); color: var(--fds-accent-text-primary); margin-right: 15px; align-items: center;">Home</Fluent.Button>

  <!--CrimsonUI-->
  <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.Button>

  <!--Documentations-->
  <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/documentations';">Documentations</Fluent.Button>

  <!--Contact us-->
  <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/contact';">Contact us</Fluent.Button>

  <!--About-->
  <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/about';">About</Fluent.Button>
</section>

<!--Title-->
<section class="centered-section-2" style="margin: 0px; alignment:stretch; max-width: 999999px; background-size: cover; background-position:center; background-image: url('https://raw.githubusercontent.com/IviriusMain/Ivirius-Text-Editor-Plus/main/WebsiteBanner.png');">
	<h1>
		<Fluent.TextBlock variant="titleLarge" style="color: black">Ivirius</Fluent.TextBlock>
	</h1>
 <h2>
		<Fluent.TextBlock variant="body" align="center" style="color: black; font-size:18px">Bring consistency to Windows 11 with fluent apps and tools from Ivirius.</Fluent.TextBlock>
 </h2>
 <h2>
   <Fluent.Button variant="accent" style="margin-right: 15px; margin-top: 15px;" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Download Ivirius Text Editor Plus</Fluent.Button>
   <Fluent.Button variant="accent" style="margin-right: 15px; margin-top: 15px;" onclick="window.location.href='https://apps.microsoft.com/detail/9mv281zzf51p?hl=en-US';">Download Ivirius Text Editor</Fluent.Button>
   <Fluent.Button variant="accent" style="margin-right: 15px; margin-top: 15px;">Download Rebound 11</Fluent.Button>
 </h2>
</section>

<section class="centered-section" style="margin-top: 20px;">
  <Fluent.TextBlock variant="titleLarge">Top apps</Fluent.TextBlock>
</section>

<!--Ivirius Text Editor Plus-->
<section class="margin-section">
  <h1>
          <Fluent.TextBlock variant="title">Ivirius Text Editor Plus</Fluent.TextBlock>
  </h1>
  <h2>
	  <Fluent.TextBlock variant="body">Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows. It features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The autosave feature ensures your work is safe. Download it from the Microsoft Store for the ultimate text editing experience.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Consistent</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Ivirius Text Editor Plus follows the Fluent Design guidelines, ensuring a consistent and beautiful experience on Windows 11.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Powerful</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Ivirius Text Editor Plus has a plethora of different options for editing RTF files, ensuring that you can make stunning documents.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Made for everyone</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Ivirius Text Editor Plus features many themes and customization settings, making sure that everyone can personalize the UI to their liking.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Buy</Fluent.Button>
    <Fluent.Button variant="hyperlink" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
</section>

<!--Ivirius Text Editor-->
<section class="margin-section">
  <h1>
          <Fluent.TextBlock variant="subtitle">Ivirius Text Editor</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Ivirius Text Editor combines the power of Ivirius Text Editor Plus with a consistent user interface using WinUI styles.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Download</Fluent.Button>
    <Fluent.Button variant="hyperlink" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
</section>

<section class="centered-section" style="margin-top: 20px;">
  <Fluent.TextBlock variant="titleLarge">Rebound 11</Fluent.TextBlock>
</section>

<!--Rebound 11-->
<section class="margin-section">
  <h1>
          <Fluent.TextBlock variant="title">Windows 11 as it should be</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Rebound 11 is an effort by the Ivirius Team to make Windows 11 more consistent and beautiful.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Simple and intuitive installation</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Rebound 11 comes as an installation package which allows you to install all the Rebound tools onto your computer with one click.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">All legacy apps and tools replaced</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Rebound apps suite is a group of applications that aims to improve the consistency of Windows.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Powered by the community</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Rebound project is made by a group of dedicated, talented developers who know exactly how to make Windows 11 look its best.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Made using WinUI 3</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">All the Rebound apps are made using WInUI3 for a consistent, modern experience.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">One app to manage it all</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Rebound Hub provides a visually pleasing experience, while allowing you to try out Ivirius.UI and download Rebound 11.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;">Download Rebound 11</Fluent.Button>
    <Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
  </h3>
</section>

<section class="centered-section" style="margin-top: 20px;">
  <Fluent.TextBlock variant="titleLarge">Software development community</Fluent.TextBlock>
</section>

<!--Developers-->
<section class="margin-section">
  <h1>
          <Fluent.TextBlock variant="title">Ivirius Community</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Ivirius Community is an inclusive, welcoming group of people who are eager to share ideas and experiences with one another. Join our official Discord server and follow our social media using the links below!</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Discord</Fluent.Button>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Twitter</Fluent.Button>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">YouTube</Fluent.Button>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">GitHub</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">UWP</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">UWP is a modern, Fluent design framework that allows you to create packaged apps. It is widely seen as one of the precursors of WinUI3, which is part of the Windows App SDK.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">WinUI 3</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">WinUI3 is a modern, versatile UI framework combining the Fluent UI of UWP with the power and stability of WinForms and WPF. WinUI3 is an integral component of the Windows App SDK.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">Ivirius.UI</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Ivirius.UI family of libraries allows you to create apps using CrimsonUI (via Ivirius.UI.Styles) and a set of meticulously crafted components (via Ivirius.UI.Conteols). Ivirius.UI packages are currently only available for WinUI3 and the Windows App SDK, but UWP ports are planned.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">CrimsonUI</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">CrimsonUI is a dynamic UI library designed for UWP and Windows App SDK. Rooted in WinUI and influenced by FireCube's GlowUI, CrimsonUI seamlessly blends default WinUI elements with glowing, shiny components. Immerse yourself in stunning animations, ensuring a very smooth and beautiful user experience. Elevate your app's visual appeal with the elegance of CrimsonUI.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">Contributions</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Ivirius Team welcomes community contributions from other developers in an effort to make our apps even better.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Events</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">We host several events in our Discord server (such as the Ivirius Summit), keeping you up to date about several exciting developments with our apps.</Fluent.TextBlock>
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
  <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/';" style="margin-top: 10px; margin-bottom: 10px;">Ivirius</Fluent.Button>
  <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">ErrorTek</Fluent.Button>
  <Fluent.Button variant="hyperlink" style="margin-bottom: 10px;">TheDevil</Fluent.Button>
  <Fluent.Button variant="hyperlink" style="margin-bottom: 10px;">0x5BFA</Fluent.Button>
  <Fluent.Button variant="hyperlink" style="margin-bottom: 10px;">FlamebladeOmega</Fluent.Button>
  <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
    Website
  </Fluent.TextBlock>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://fluent-svelte.vercel.app';" style="margin-top: 10px; margin-bottom: 10px;">Fluent Svelte</Fluent.Button>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.vercel.com';">Vercel</Fluent.Button>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='/about';" style="margin-top: 10px; margin-bottom: 10px;">About</Fluent.Button>
          <Fluent.TextBlock variant="body" style="opacity: 0.5; margin-top: 10px; margin-bottom: 10px; margin-right: 25px;">
            Ivirius' Official Website - Powered by Vercel and Fluent Svelte
          </Fluent.TextBlock>
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

  /*Centered section*/
  .centered-section-2
  {
    text-align: left;
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
    text-align: justify;
  }
  
  @media (min-width: 1250px) {
    .centered-section-2 {
      text-align: center;
    }
  }
</style>