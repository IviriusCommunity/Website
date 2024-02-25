<script>
  //Imports
	import * as Fluent from "fluent-svelte";
  import "./styles.css";
  
  //Variables
  let open = true;
</script>

<!--Head-->
<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website"/>
</svelte:head>

<!--Navbar-->
<section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: var(--fds-solid-background-base); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">

  <!--Favicon-->
  <Fluent.PersonPicture src="https://cdn.discordapp.com/attachments/1137161703000375339/1188990519418834994/Ivirius.png?ex=65dd2236&is=65caad36&hm=f5647520279749bf9811d7908e38f0586bedeef666f65ccfee30fb727a36471b" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>

  <!--Title-->
  <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>

  <!--Home-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app';">Home</Fluent.Button>
  
  <!--CrimsonUI-->
  <Fluent.Button style="height: 32px; margin-right: 15px; align-items: center;">CrimsonUI</Fluent.Button>

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
		<Fluent.TextBlock variant="titleLarge">CrimsonUI</Fluent.TextBlock>
	</h1>
 <h2>
		<Fluent.TextBlock variant="body">Shiny, glowing UI elements.</Fluent.TextBlock>
 </h2>
</section>

<!--Download buttons-->
<section class="centered-section">
	<h2>
		<Fluent.Button variant="accent" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';" disabled="true">Download CrimsonUI</Fluent.Button>
	</h2>
</section>

 <section class="margin-section">
	<h2>
		<Fluent.InfoBar severity="information" title="Description" message="CrimsonUI is a dynamic UI library designed for UWP and Windows App SDK. Rooted in WinUI and influenced by FireCube's GlowUI, CrimsonUI seamlessly blends default WinUI elements with glowing, shiny components. Immerse yourself in stunning animations, ensuring a very smooth and beautiful user experience. Elevate your app's visual appeal with the elegance of CrimsonUI." style="max-width:750px;"/>
	</h2>
 </section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Easily blending in</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">CrimsonUI controls seamlessly integrate with Windows applications, featuring rest brushes that match the standard WinUI controls for a cohesive user experience.</Fluent.TextBlock>
        </h2>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Simply beautiful</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">CrimsonUI uses a combination of glowing panels and accent color gradients to ensure a 3D, shiny aspect, similar to a neon effect.</Fluent.TextBlock>
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
          <Fluent.Button variant="hyperlink" onclick="window.location.href='https://ivirius.vercel.app/about';" style="margin-top: 10px; margin-bottom: 10px;">About</Fluent.Button>
</section>

<!--Styles-->
<style>
  /*Import theme*/
	/*@import url("https://unpkg.com/fluent-svelte/theme.css");*/
  

	/* Some base styles to get things looking right. */
	:global(body) 
  {
    /*Background color*/
		background-color: var(--fds-solid-background-base);

    /*Background image*/
    background-image: url("https://github.com/IviriusMain/sveltekit-1/blob/main/src%2Froutes%2Fassets%2FBloomRed.png?raw=true");

	/* Accent Colors */
	/*--fds-accent-light-3: 7, 100%, 71%;
  --fds-accent-light-2: 7, 100%, 67%;
  --fds-accent-light-1: 7, 100%, 63%;
  --fds-accent-base: 7, 100%, 54%;
  --fds-accent-dark-1: 7, 100%, 47%;
  --fds-accent-dark-2: 7, 100%, 35%;
  --fds-accent-dark-3: 7, 100%, 27%;
   */ 
    
    /*Background color*/
		color: var(--fds-text-primary); 
	}
  
  /* Global Variables */
:root {
	/* Accent Colors */
	--fds-accent-light-3: 7, 100%, 71% !important;
  --fds-accent-light-2: 7, 100%, 67% !important;
  --fds-accent-light-1: 7, 100%, 63% !important;
  --fds-accent-base: 7, 100%, 54% !important;
  --fds-accent-dark-1: 7, 100%, 47% !important;
  --fds-accent-dark-2: 7, 100%, 35% !important;
  --fds-accent-dark-3: 7, 100%, 27% !important;
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