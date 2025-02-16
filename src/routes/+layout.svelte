<script>
	import './styles.css';
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
</script>

<div class="app">
	<main>
		
		<div class="bkgdiv" style="margin-top: 70px; flex-grow: 1;">
			<!-- Content -->
			<slot></slot>
		</div>
		<footer class="footer">
			<div class="footer-container">
				<div>
					<h3>About Us</h3>
					<p>We are a community of passionate developers aiming to bring you the best experience on Windows 10 and 11.</p>
				</div>
				<div>
					<h3>Partners and Sponsors</h3>
					<p><a href="#">Files</a> | <a href="#">FireCubeStudios</a> | <a href="#">spoo.me</a></p>
				</div>
				<div>
					<h3>Social Links</h3>
					<p><a href="#">Discord</a> | <a href="#">YouTube</a> | <a href="#">Twitter</a> | <a href="#">BlueSky</a> | <a href="#">WhatsApp</a> | <a href="#">Instagram</a> | <a href="#">GitHub</a></p>
				</div>
			</div>
			<div class="footer-bottom">
				&copy; 2020 - 2025 Ivirius™ Community. All rights reserved.
			</div>
		</footer>
		
		<div class="navbar">
			<div class="navbar-bkg"></div>
			<div class="menu">
				<img src="./favicon.png" style="width: 50px; align-self: center;"/>
				<p style="align-self: center; font-size: 20px; margin-bottom: 4px; font-weight: 500;">Ivirius Community</p>
	<div class="items" style="display: flex; flex-direction: row; gap: 8px;">
		<div style="width: 1px; height: 30px; margin-left: 15px; align-self: center; background-color: var(--fds-divider-stroke-default);"></div>
				<Fluent.Button style="color: var(--fds-text-primary); height: 32px; align-self: center; align-items: center;" variant="hyperlink" onclick="window.location.href='/';">Home</Fluent.Button>
				<Fluent.Flyout placement="bottom">
					<Fluent.Button style="color: var(--fds-text-primary); height: 32px; align-self: center; margin-top: 9px; align-items: center;" variant="hyperlink">Apps and Tools</Fluent.Button>
							<div slot="override" style="display: flex; width: 250px; background-color: var(--fds-solid-background-base); box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1); border-radius: 6px; flex-direction: column; align-items: justify; padding: 4px; gap: 2px;">
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Ivirius Text Editor</Fluent.Button>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Ivirius Text Editor Plus</Fluent.Button>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Rebound</Fluent.Button>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">CubeKit</Fluent.Button>
							</div>
				</Fluent.Flyout>
				<Fluent.Flyout placement="bottom">
					<Fluent.Button style="color: var(--fds-text-primary); height: 32px; align-self: center; margin-top: 9px; align-items: center;" variant="hyperlink">Community</Fluent.Button>
					<div slot="override" style="display: flex; width: 250px; background-color: var(--fds-solid-background-base); box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1); border-radius: 6px; flex-direction: column; align-items: justify; padding: 4px; gap: 2px;">
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Docs</Fluent.Button>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">News</Fluent.Button>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Discord Server</Fluent.Button>
							</div>
				</Fluent.Flyout>
		
			</div>
			</div>
			<Fluent.Button onclick="window.location.href='/contact';" style="color: var(--fds-text-primary); height: 32px; align-self: center; margin-top: 3px; align-items: center;" variant="hyperlink">
				<svg width="20" height="20" fill="none" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 14A2.25 2.25 0 0 1 13 16.25v1.502l-.008.108c-.31 2.127-2.22 3.149-5.425 3.149-3.193 0-5.134-1.01-5.553-3.112L2 17.75v-1.5A2.25 2.25 0 0 1 4.25 14h6.5Zm0 1.5h-6.5a.75.75 0 0 0-.75.75v1.42c.28 1.2 1.55 1.839 4.067 1.839 2.516 0 3.73-.631 3.933-1.816V16.25a.75.75 0 0 0-.75-.75ZM7.5 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm12.25-4A2.25 2.25 0 0 1 22 4.25v3.5A2.25 2.25 0 0 1 19.75 10h-1.455l-2.166 2.141A1.25 1.25 0 0 1 14 11.253V9.986a2.25 2.25 0 0 1-2-2.236v-3.5A2.25 2.25 0 0 1 14.25 2h5.5ZM7.5 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12.25-4h-5.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h1.249v2.154L17.68 8.5h2.071a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75Z" fill="var(--fds-text-primary)"/></svg>
			</Fluent.Button>			
			<div class="overflow-pane">
					<Fluent.Flyout placement="bottom">
						<Fluent.Button style="color: var(--fds-text-primary); height: 32px; align-self: center; margin-top: 3px; align-items: center;" variant="hyperlink">
							<svg width="20" height="20" fill="none" viewBox="0 0 26, 26" style="margin-left: 2px; margin-top: 6px; margin-bottom: 4px;" xmlns="http://www.w3.org/2000/svg"><path d="M2.753 18h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493L2.753 18h18.5-18.5Zm0-6.497h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493l.102-.007h18.5-18.5Zm-.001-6.5h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5A.75.75 0 0 1 2.65 5.01l.102-.007h18.5-18.5Z" fill="var(--fds-text-primary)"/></svg>
						</Fluent.Button>			
					<div slot="override" style="display: flex; width: 250px; background-color: var(--fds-solid-background-base); box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1); border-radius: 6px; flex-direction: column; align-items: justify; padding: 4px; gap: 2px;">
						<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Home</Fluent.Button>
						<div style="width: 100%; height: 1px; background-color: var(--fds-divider-stroke-default); margin-left: -4px; margin-right: -4px;"></div>
						<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Ivirius Text Editor</Fluent.Button>
						<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Ivirius Text Editor Plus</Fluent.Button>
						<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Rebound</Fluent.Button>
						<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">CubeKit</Fluent.Button>
						<div style="width: 100%; height: 1px; background-color: var(--fds-divider-stroke-default); margin-left: -4px; margin-right: -4px;"></div>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Docs</Fluent.Button>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">News</Fluent.Button>
								<Fluent.Button variant="hyperlink" style="display: flex; flex-direction: column; align-items: flex-start; color: var(--fds-text-primary);">Discord Server</Fluent.Button>
							</div>
				</Fluent.Flyout>
			</div>
		</div>
	</main>
	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		
	}

/* Light mode */
@media (prefers-color-scheme: light) {
    :global(body) {
    /*Background image*/
    background-image: url("./MicaLight.png");

    }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :global(body) {
    /*Background image*/
    background-image: url("./MicaDark.png");

    }
}
html, body {
            height: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;  /* Stack elements vertically */
        }
        .footer {
            background: var(--fds-solid-background-tertiary);
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .footer-container {
            width: 100%;
            max-width: 1200px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .footer h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .footer p, .footer a {
            color: var(--fds-text-disabled);
            text-decoration: none;
            font-size: 0.9rem;
        }

        .footer a:hover {
            color: var(--fds-accent-text-primary);
        }

        .footer-bottom {
            margin-top: 20px;
            font-size: 0.8rem;
            color: var(--fds-text-disabled);
        }

        /* Responsive Design */
        @media (max-width: 600px) {
            .footer-container {
                text-align: center;
            }
        }
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0px;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navbar {
    display: flex;
    width: 100%;
    position: fixed;  /* Keep it fixed in place */
    top: 0;           /* Align it to the top of the viewport */
    padding: 10px 20px;
    height: 70px;
    z-index: 10;      /* Ensure navbar stays on top */
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(15px);  /* Apply blur effect behind */
}

.navbar-bkg {
    position: absolute;   /* Take it out of normal document flow */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--fds-solid-background-tertiary);
    opacity: 0.5;
    z-index: -1;           /* Ensure background stays behind navbar */
}

.menu {
    display: flex;
    gap: 10px;
    flex-wrap: wrap; /* Allows items to wrap */
    max-width: 1600px;  /* Limit the max width */
    width: 100%; /* Allow it to stretch within the limit */
}

.overflow-pane {
	visibility: collapse;
}

.overflow-pane a {
    display: block;
    padding: 8px;
    color: #0078d4;
}

/* Make items move to the overflow pane dynamically */
@media (max-width: 700px) {
    .menu {
        flex-wrap: nowrap; /* Prevents items from wrapping */
        overflow: hidden;
        max-width: 70%; /* Limit visible menu items */
    }
.items {
	visibility: collapse;
}
    .overflow-pane {
		visibility: visible;
    }
}


</style>