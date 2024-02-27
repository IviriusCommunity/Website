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
	<meta name="description" content="spooWASDK privacy policy"/>
</svelte:head>

<!--Navbar-->
<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: var(--fds-solid-background-base); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">

  <!--Favicon-->
  <Fluent.PersonPicture src="https://cdn.discordapp.com/attachments/1137161703000375339/1188990519418834994/Ivirius.png?ex=65dd2236&is=65caad36&hm=f5647520279749bf9811d7908e38f0586bedeef666f65ccfee30fb727a36471b" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>

  <!--Title-->
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>

  <!--Home-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app';">>Home</Fluent.Button>
  
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
		<Fluent.TextBlock variant="titleLarge">spooWASDK privacy policy</Fluent.TextBlock>
	</h1>
</section>

<!--InfoBar-->
 <section class="margin-section">
	<h2>
		<Fluent.InfoBar severity="caution" title="Important!" message="This is the privacy policy for spooWASDK and NOT for spoo.me as a standalone service." style="max-width:550px;"/>
	</h2>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="caption" style="opacity: 0.5">Last updated: 28th of February 2024</Fluent.TextBlock>
        </h1>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">General Information</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">spooWASDK is provided on an as-is basis, without any warranty.</Fluent.TextBlock>
        </h2>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Data Collection</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">spooWASDK utilizes HTTP requests to shorten URLs through the spoo.me API. To ensure the functionality of the maximum requests cap amd URL shortening, the following data is collected:</Fluent.TextBlock>
        </h2>
<h3>
          <Fluent.TextBlock variant="body">
1. Data inputted during application usage.</Fluent.TextBlock>
</h3>
<h4>
          <Fluent.TextBlock variant="body">
2. Computer's IP address.
</Fluent.TextBlock>
</h4>
<h5>
          <Fluent.TextBlock variant="body">
This limited data collection is solely for the purpose of ensuring the base functionality and adhering to the maximum requests cap.
            </Fluent.TextBlock>
</h5>
<h6>
                  <Fluent.TextBlock variant="body">
We value and prioritize your privacy. This privacy policy outlines our commitment to maintaining the confidentiality and security of the data collected during the use of spooWASDK. </Fluent.TextBlock>
        </h6>
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
    max-width: 1250px;
  }

  /*Left aligned centered section*/
  .margin-section 
  {
    margin: 0 auto;
    padding: 25px;
    max-width: 1250px;
  }
</style>