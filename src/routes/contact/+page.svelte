<script lang="ts">
	//Imports
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';

	//Variables
	let open = false;
  let openTooShortSub = false;
  let errorMessage = '';

	let email = '';
	let subject = '';
	let message = '';

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

	async function sendToDiscord() {

    if (!validateEmail(email)) {
      // add the code to show the email is not valid message
      errorMessage = 'Email is not valid!';
	  open = true;
      return;
    }

		if (subject.length < 5) {
      // add the code to show the subject is not valid message
      errorMessage = 'Subject must be alteast 5 characters long!';
	  open = true;
			return;
		}

    if (message.length < 25) {
      // add the code to show the message is not valid message
      errorMessage = 'Message must be alteast 25 characters long!';
	  open = true;
      return;
    }

		const webhookUrl = 'https://ivirius-contact-host.vercel.app/contact';
		const payload = new FormData();
    payload.append('email', email);
    payload.append('subject', subject);
    payload.append('message', message);

		try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: payload
      });

      if (!response.ok) {
        if (response.status === 429) {
          // add the code to show the rate limited message
      errorMessage = 'Rate limited!';
	  open = true;
          return;
        }
        else {
          // add the code to show the failed to send message
      errorMessage = 'Failed to send message!';
	  open = true;
          return;
        }
      }

if (response.ok == true)
{
      errorMessage = 'Thank you for contacting us. We will reach out to you as soon as possible.';
	  open = true;
}

      const data = await response.json();
      console.log(data);
    } catch (error) {
      // add the code to show the error message
      errorMessage = 'Error';
	  open = true;
    }

    // clear the form
    email = '';
    subject = '';
    message = '';
	}
</script>

<!--Head-->
<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>

<!--Title-->
<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Contact us</Fluent.TextBlock>
	</h1>
</section>

<!--Ivirius Text Editor Plus-->
<section class="margin-section">
	<Fluent.InfoBar id="errmessage" bind:open>{errorMessage}</Fluent.InfoBar>
	<h1>
		<Fluent.TextBox
			placeholder="Email"
			type="email"
			style="width: 100%; box-sizing: border-box;"
			bind:value={email}
		/>
	</h1>
	<h2>
		<Fluent.TextBox
			placeholder="Subject"
			style="width: 100%; box-sizing: border-box;"
			bind:value={subject}
		/>
	</h2>
	<h3>
		<textarea
			placeholder="Message"
			style="min-height: 150px; width: 100%; box-sizing: border-box;
			padding: 10px;
			resize: none;
			border: 1px solid var(--fds-control-stroke-default);
			background-color: var(--fds-control-fill-default);
			font-family: Arial, sans-serif;
			border-radius: 4px;
			color: var(--fds-text-primary);"
			bind:value={message}
		/>
	</h3>
</section>

<section class="right-section">
	<Fluent.Button style="width: 30%; float: right;" onclick="window.location.href='https://dsc.gg/ivirius'">
		Contact Us on Discord
	</Fluent.Button>
	<div style="width: 5%;"/>
	<Fluent.Button style="width: 30%; float: right;" variant="accent" on:click={sendToDiscord}>
		Send
	</Fluent.Button>
</section>

<!--Styles-->
<style>
	/*Import theme*/
	@import url('https://unpkg.com/fluent-svelte/theme.css');

	/* Some base styles to get things looking right. */
	:global(body) {
		/*Background color*/
		background-color: var(--fds-solid-background-base);

		/*Background color*/
		color: var(--fds-text-primary);
	}

	textarea:focus {
            /* Styles for focus state */
            border-color: var(--fds-accent-default);   /* Change border color when focused */
            outline: none;           /* Remove default outline */
			background-color: var(--fds-control-on-image-fill-default);
        }

	/*Centered section*/
	.centered-section {
		text-align: center;
		margin: 0 auto;
		padding: 25px;
		max-width: 650px;
	}

	/*Right aligned section*/
	.right-section {
		text-align: right;
		margin: auto;
		padding: 25px;
		max-width: 650px;
		display: flex;
		justify-content: flex-end;
		justify-items: flex-end;
		margin-top: -50px;
	}

	/*Left aligned centered section*/
	.margin-section {
		margin: 0 auto;
		padding: 25px;
		max-width: 650px;
	}
</style>
