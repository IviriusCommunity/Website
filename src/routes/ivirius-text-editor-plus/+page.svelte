<script>
	//Imports
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';
	//Variables
	let open = true;
</script>

<!--Head-->
<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius Text Editor Plus" />
</svelte:head>

<!--Title-->
<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Ivirius Text Editor Plus</Fluent.TextBlock>
	</h1>
	<h2>
		<Fluent.TextBlock variant="body" align="center"
			>Intuitive, easy to use, WinUI 3 WordPad app for Windows. simply beautiful.</Fluent.TextBlock
		>
	</h2>
	<h2>
		<Fluent.TextBlock variant="body" align="center"
			>RTF (Rich Text Format) is a very simple yet effective way of writing rich text for small
			tasks. Even though Word took the place of WordPad years ago, we still think RTF deserves more
			attention for how lightweight it is. This is why we made Ivirius Text Editor Plus: to bring
			back RTF in modern Windows.</Fluent.TextBlock
		>
	</h2>

	<!--Download buttons-->
	<section class="centered-section">
		<h2>
			<Fluent.Button
				variant="accent"
				on:click={() => window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US'}
				>Download Ivirius Text Editor Plus</Fluent.Button
			>
			<Fluent.Button
				variant="hyperlink"
				on:click={() => window.location.href='https://apps.microsoft.com/detail/9mv281zzf51p?hl=en-US'}
				>Download Ivirius Text Editor</Fluent.Button
			>
		</h2>
	</section>

	<h2 id="content">
		<img alt="Ivirius Text Editor Plus Light" src="https://i.spoo.me/245847"/>
		<img alt="Ivirius Text Editor Plus Dark" src="https://i.spoo.me/185336"/>
	</h2>
</section>

<section class="margin-section">
	<h2 id="content-right">
		<div>
			<h1>
				<Fluent.TextBlock variant="subtitle">Easy table insertion</Fluent.TextBlock>
			</h1>
			<p>
				<Fluent.TextBlock variant="body"
					>Tables are very useful for organizing content, and while RTF tables aren't much, they can
					still be useful for some people. Since many users requested this feature to be added, we
					decided to implement it in a special way and allow for the table to be stretched and
					resized as needed.</Fluent.TextBlock
				>
			</p>
			<p>
				<Fluent.TextBlock variant="body"
					>With our custom table integration, you can insert tables without worrying about page
					alignment or final output. Thanks to the preview feature, you can see exactly what your
					table will look like after inserting it into the document.</Fluent.TextBlock
				>
			</p>
		</div>
		<img src="https://i.spoo.me/599398" alt="Easy table insertion" />
	</h2>
</section>

<section class="margin-section">
	<h2 id="content-right">
		<img src="https://i.spoo.me/852738" alt="Multi-page printing" />
		<div>
			<h1>
				<Fluent.TextBlock variant="subtitle">Multi-page printing</Fluent.TextBlock>
				<div
					style="margin-left: -0px; display: inline-block; background-color: #8800CC; color: white; font-weight: bold; padding: 2px 8px; border-radius: 4px; font-family: Arial, sans-serif; font-size: 14px;"
				>
					DEVELOPER PREVIEW
				</div>
			</h1>
			<h2>
				<Fluent.TextBlock variant="body"
					>We made a function to paginate RTF documents based on rendered height. Using this method,
					we can ensure good accuracy when dividing your file. However, since this method is still
					in its early stages, it might be very slow, inaccurate, and as of now, printing tables is
					not supported. We recommend you check your document in the print preview before
					proceeding. You might have to ass empty lines in certain places for maximum accuracy.</Fluent.TextBlock
				>
			</h2>
		</div>
	</h2>
</section>

<section class="margin-section">
	<h2 id="content-right">
		<div>
			<h1>
				<Fluent.TextBlock variant="subtitle">Rebound 11 integration</Fluent.TextBlock>
				<div
					style="margin-left: -0px; display: inline-block; background-color: #00DDBB; color: black; font-weight: bold; padding: 2px 8px; border-radius: 4px; font-family: Arial, sans-serif; font-size: 14px;"
				>
					PLANNED
				</div>
			</h1>
			<h2>
				<Fluent.TextBlock variant="body"
					>Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows 11. It
					features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup
					with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The
					autosave feature ensures your work is safe. Download it from the Microsoft Store for the
					ultimate text editing experience.</Fluent.TextBlock
				>
			</h2>
			<h3>
				<Fluent.Button
					variant="hyperlink"
					on:click={() => goto('/ivirius-text-editor-plus')}>Learn more</Fluent.Button
				>
			</h3>
		</div>
		<img src="https://i.spoo.me/899402" alt="Rebound 11 integration" />
	</h2>
</section>

<section class="margin-section">
	<h2 id="content-right">
		<img src="https://i.spoo.me/370255" alt="CrimsonUI" />
		<div>
			<h1>
				<Fluent.TextBlock variant="subtitle">CrimsonUI</Fluent.TextBlock>
				<div
					style="margin-left: -0px; display: inline-block; background-color: #FFCC00; color: black; font-weight: bold; padding: 2px 8px; border-radius: 4px; font-family: Arial, sans-serif; font-size: 14px;"
				>
					PUBLIC BETA
				</div>
			</h1>
			<h2>
				<Fluent.TextBlock variant="body"
					>Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows 11. It
					features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup
					with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The
					autosave feature ensures your work is safe. Download it from the Microsoft Store for the
					ultimate text editing experience.</Fluent.TextBlock
				>
			</h2>
			<h3>
				<Fluent.Button
					variant="hyperlink"
					on:click={() => goto('/ivirius-text-editor-plus')}>Learn more</Fluent.Button
				>
			</h3>
		</div>
	</h2>
</section>

<section class="margin-section">
	<h2 id="content-right">
		<div>
			<h1>
				<Fluent.TextBlock variant="subtitle">Zippy with ChatGPT</Fluent.TextBlock>
			</h1>
			<h2>
				<Fluent.TextBlock variant="body"
					>Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows 11. It
					features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup
					with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The
					autosave feature ensures your work is safe. Download it from the Microsoft Store for the
					ultimate text editing experience.</Fluent.TextBlock
				>
			</h2>
			<h3>
				<Fluent.Button
					variant="hyperlink"
					on:click={() => goto('/ivirius-text-editor-plus')}>Learn more</Fluent.Button
				>
			</h3>
		</div>
		<img src="https://i.spoo.me/690832" alt="Zippy with ChatGPT" />
	</h2>
</section>

<section class="centered-section">
	<h1>
		<Fluent.TextBlock style="font-style: italic; font-size: 20px; opacity: 0.75;"
			>"Complex yet fluent" - Zingzy</Fluent.TextBlock
		>
	</h1>
	<h1>
		<Fluent.TextBlock style="font-style: italic; font-size: 20px; opacity: 0.75;"
			>"fire" - FireCubeStudios</Fluent.TextBlock
		>
	</h1>
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

	/*Centered section*/
	.centered-section {
		text-align: center;
		margin: 0 auto;
		padding: 25px;
		max-width: 1250px;
	}

	/*Left aligned centered section*/
	.margin-section {
		margin: 0 auto;
		padding: 25px;
		max-width: 1250px;
	}

	#content {
		max-width: 1500px;
		/* Set the maximum width of the container */
		width: 100%;
		/* Ensures the container takes the full width of its parent */
		display: flex;
		/* Use flexbox layout */
		flex-wrap: wrap;
		/* Allow flex items to wrap to the next line if needed */
		justify-content: space-between;
		/* Distribute flex items evenly with space between them */
	}

	#content-right {
		max-width: 1500px;
		/* Set the maximum width of the container */
		width: 100%;
		/* Ensures the container takes the full width of its parent */
		display: flex;
		/* Use flexbox layout */
		flex-wrap: wrap;
		/* Allow flex items to wrap to the next line if needed */
		justify-content: space-between;
		/* Distribute flex items evenly with space between them */
	}

	#content-right div {
		flex: 1;
		margin-left: 25px;
		/* Set the maximum width of each image to half of the container width, minus some margin */
		margin-right: 25px;
		/* Set the maximum width of each image to half of the container width, minus some margin */
		margin-top: auto;
		margin-bottom: auto;
		height: auto;
		/* Allow the height to adjust proportionally based on the width */
	}

	#content img {
		max-width: calc(50% - 25px);
		/* Set the maximum width of each image to half of the container width, minus some margin */
		height: auto;
		/* Allow the height to adjust proportionally based on the width */
		margin-bottom: 10px;
		/* Add some bottom margin between images */
		border-radius: 8px;
		box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
	}

	#content-right img {
		height: 300px;
		/* Allow the height to adjust proportionally based on the width */
		width: auto;
		margin-bottom: 10px;
		/* Add some bottom margin between images */
		border-radius: 8px;
		box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 1000px) {
		#content-right img {
			max-width: 100%;
			/* Set the maximum width of each image to 100% on smaller screens */
			margin-bottom: 10px;
			/* Keep the same bottom margin between images */
		}

		#content-right div {
			max-width: 100%;
			/* Set the maximum width of each image to 100% on smaller screens */
			margin-bottom: 10px;
			/* Keep the same bottom margin between images */
		}

		#content img {
			max-width: 100%;
			/* Set the maximum width of each image to 100% on smaller screens */
			margin-bottom: 10px;
			/* Keep the same bottom margin between images */
			border-radius: 8px;
			box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
		}
	}
</style>
