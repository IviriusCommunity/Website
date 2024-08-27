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

<!--Title-->
<section class="centered-section-2" style="margin: 0px; alignment:stretch; max-width: 999999px; background-size: cover; background-position:center; background-image: url('https://i.spoo.me/755932');">
        <div style="width: 500px; margin: -25px; padding: 25px; height: 200px; background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));">

                <h1>
                        <Fluent.TextBlock variant="titleLarge" style="color: black">Rebound 11</Fluent.TextBlock>
                </h1>
         <h2>
                        <Fluent.TextBlock variant="body" align="center" style="color: black; font-size:18px">Windows 11 as it should have been.</Fluent.TextBlock>
         </h2>
         <h2>
           <Fluent.Button variant="accent" style="margin-right: 15px; margin-top: 15px;" onclick="window.location.href='https://github.com/IviriusMain/ReboundHub/releases/download/Alpha/ReboundHubInstaller.exe';">Download</Fluent.Button>
         </h2>
        </div>
</section>

<section>
        
        <section id="output" style="min-height: 200px;">Loading content...</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.0.6/markdown-it.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Markdown-it
        var md = window.markdownit();

        // Fetch the content of the Markdown file
        fetch('/markdown/rebound11/content.md')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch content: ' + response.statusText);
                }
                return response.text();
            })
            .then(text => {
                // Convert the Markdown content to HTML
                var renderedHTML = md.render(text);
                // Insert the rendered HTML into the output section
                document.getElementById('output').innerHTML = renderedHTML;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('output').innerHTML = 'Failed to load content: ' + error.message;
            });
    });
</script>

</section>

<section class="centered-section" style="margin-top: 20px;">
  <Fluent.TextBlock variant="titleLarge">Top apps</Fluent.TextBlock>
</section>

<!--Ivirius Text Editor Plus-->
<section class="margin-section">
        <img src="https://i.spoo.me/729297" style="border-radius: 8px; display: block; height: auto; width: auto; max-width: 1000px;"/>
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
          <Fluent.TextBlock variant="body">Experience seamless and reliable performance with Ivirius Text Editor Plus, designed with Windows 11’s modern design language. The intuitive interface ensures that your text editing tasks are smooth and uninterrupted, providing a consistent user experience that aligns perfectly with the aesthetics and functionality of Windows 11. With features like autosave and a robust AI assistant, your work is always secure and up-to-date.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Powerful</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Unlock the full potential of your text editing with Ivirius Text Editor Plus. Equipped with advanced AI capabilities and table insertion, this editor empowers you to create and manage documents with ease. The integration of CrimsonUI and WinUI provides a robust and visually appealing interface, while the multitasking tabs and autosave feature ensure you can handle complex projects efficiently. Experience the power of seamless editing and enhanced productivity.</Fluent.TextBlock>
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