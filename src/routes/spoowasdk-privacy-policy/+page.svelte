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

<!--Title-->
<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">spooWASDK privacy policy</Fluent.TextBlock>
	</h1>
</section>

<!--InfoBar-->
 <section class="centered-section">
	<h2>
		<Fluent.InfoBar severity="caution" title="Important!" message="This is the privacy policy for spooWASDK and NOT for spoo.me as a standalone service." style="max-width:550px; margin-left: auto; margin-right: auto;"/>
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

<!--Styles-->
<style>
  /*Import theme*/
	@import url("https://unpkg.com/fluent-svelte/theme.css");

	/* Some base styles to get things looking right. */
	:global(body)
  {
    /*Background color*/
		background-color: var(--fds-solid-background-base);

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