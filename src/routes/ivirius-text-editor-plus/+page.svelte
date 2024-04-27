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
	<meta name="description" content="Ivirius Text Editor Plus"/>
</svelte:head>

<!--Navbar-->
<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: var(--fds-solid-background-base); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">

  <!--Favicon-->
  <Fluent.PersonPicture src="/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>

  <!--Title-->
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>

  <!--Home-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/';">Home</Fluent.Button>

  <!--CrimsonUI-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.Button>

  <!--Documentations-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/documentations';">Documentations</Fluent.Button>

  <!--Contact us-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/contact';">Contact us</Fluent.Button>

  <!--About-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/about';">About</Fluent.Button>
</section>

<!--Title-->
<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Ivirius Text Editor Plus</Fluent.TextBlock>
	</h1>
  <h2>
     <Fluent.TextBlock variant="body" align="center">Intuitive, easy to use, simply beautiful.</Fluent.TextBlock>
  </h2>
  <h2>
     <Fluent.TextBlock variant="body" align="center">Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows 11. It features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The autosave feature ensures your work is safe. Download it from the Microsoft Store for the ultimate text editing experience.</Fluent.TextBlock>
  </h2>
  <!--Download buttons-->
  <section class="centered-section">
    <h2>
      <Fluent.Button variant="accent" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Download Ivirius Text Editor Plus</Fluent.Button>
      <Fluent.Button variant="hyperlink" onclick="window.location.href='https://apps.microsoft.com/detail/9mv281zzf51p?hl=en-US';">Download Ivirius Text Editor</Fluent.Button>
    </h2>
  </section>
  
  <h2 id="content">
    <img alt="Ivirius Text Editor Plus Light" src="https://raw.githubusercontent.com/IviriusMain/Ivirius-Text-Editor-Plus/main/IviriusTextEditorPlusLightAppCrop.png"/>
    <img alt="Ivirius Text Editor Plus Dark" src="https://raw.githubusercontent.com/IviriusMain/Ivirius-Text-Editor-Plus/main/IviriusTextEditorPlusDarkAppCrop.png"/>
  </h2>
</section>

<!--Title-->
<section class="centered-section">
  <h2 id="content">
    <div>
      <img alt="Ivirius Text Editor Plus Light" src="https://raw.githubusercontent.com/IviriusMain/Ivirius-Text-Editor-Plus/main/TableInsert.png"/><!--Ivirius Text Editor Plus-->
    </div>
    <section class="margin-section">
            <h1>
                    <Fluent.TextBlock variant="subtitle">Ivirius Text Editor Plus</Fluent.TextBlock>
            </h1>
            <h2>
                    <Fluent.TextBlock variant="body">Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows 11. It features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The autosave feature ensures your work is safe. Download it from the Microsoft Store for the ultimate text editing experience.</Fluent.TextBlock>
            </h2>
            <h3>
              <Fluent.Button variant="hyperlink" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
            </h3>
    </section>
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
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-top: 10px; margin-bottom: 10px;">ErrorTek</Fluent.Button>
  <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
    Website
  </Fluent.TextBlock>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://fluent-svelte.vercel.app';" style="margin-top: 10px; margin-bottom: 10px;">Fluent Svelte</Fluent.Button>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.vercel.com';">Vercel</Fluent.Button>
          <Fluent.Button variant="hyperlink" onclick="window.location.href='/about';" style="margin-top: 10px; margin-bottom: 10px;">About</Fluent.Button>
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

  /*Left aligned centered section*/
  .margin-section
  {
    margin: 0 auto;
    padding: 25px;
    max-width: 1250px;
  }
  
  #content {
    max-width: 1500px; /* Set the maximum width of the container */
    width: 100%; /* Ensures the container takes the full width of its parent */
    display: flex; /* Use flexbox layout */
    flex-wrap: wrap; /* Allow flex items to wrap to the next line if needed */
    justify-content: space-between; /* Distribute flex items evenly with space between them */
}

#content img, section {
    max-width: calc(50% - 5px); /* Set the maximum width of each image to half of the container width, minus some margin */
    height: auto; /* Allow the height to adjust proportionally based on the width */
    margin-bottom: 10px; /* Add some bottom margin between images */
}

@media (max-width: 1000px) {
    #content img, section {
        max-width: 100%; /* Set the maximum width of each image to 100% on smaller screens */
        margin-bottom: 10px; /* Keep the same bottom margin between images */
    }  
  }
</style>