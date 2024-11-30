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
		<Fluent.Button variant="accent" onclick="window.location.href='https://nuget.org/packages/Crimson';">Download CrimsonUI</Fluent.Button>
	</h2>
</section>

<section class="margin-section">
	<h2>
		<Fluent.InfoBar severity="information" title="Description" message="CrimsonUI is a dynamic UI library designed for UWP and Windows App SDK. Rooted in WinUI and influenced by FireCube's GlowUI, CrimsonUI seamlessly blends default WinUI elements with glowing, shiny components. Immerse yourself in stunning animations, ensuring a very smooth and beautiful user experience. Elevate your app's visual appeal with the elegance of CrimsonUI." style="max-width:750px; margin-left: auto; margin-right: auto;"/>
	</h2>
 </section>

 <section class="margin-section">
	<h2>
		<Fluent.InfoBar severity="information" title="Requirements" message="For WinUI 3: CommunityToolkit.WinUI.UI.Controls; For UWP: CommunityToolkit.UWP.UI.Controls" style="max-width:750px; margin-left: auto; margin-right: auto;"/>
	</h2>
 </section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Easily blending in</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">CrimsonUI controls are designed to integrate flawlessly with Windows applications, providing a seamless user interface experience. They feature rest brushes that are meticulously crafted to match the standard WinUI controls, ensuring a consistent and harmonious visual integration. This design philosophy allows for a cohesive user experience, where the CrimsonUI elements blend naturally with the native components of the Windows environment. The controls are built with attention to detail, aiming to enhance the aesthetics and functionality of applications while maintaining a familiar look and feel that users trust. With CrimsonUI, developers can elevate their application's interface, making it not only visually appealing but also intuitively usable, leveraging the robustness of Windows' native UI elements.</Fluent.TextBlock>
        </h2>
</section>

<section class="margin-section">
        <h1>
                <Fluent.TextBlock variant="subtitle">Simply beautiful</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">CrimsonUI’s design leverages the visual appeal of glowing panels and accent color gradients to create a dynamic 3D appearance, reminiscent of a neon glow. This effect adds depth and a touch of modernity to the user interface, ensuring that applications not only function well but also stand out with a contemporary, eye-catching aesthetic. The use of gradients and light effects in CrimsonUI controls helps to bring interfaces to life, making them more engaging and visually stimulating for users.</Fluent.TextBlock>
        </h2>
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
