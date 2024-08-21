<script>
	import './styles.css';
              import * as Fluent from "fluent-svelte";
              import "fluent-svelte/theme.css";
	//import navbar from "../layout/Navbar.scss";
	const navbarItems = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Documentations",
			path: "/documentations",
		},
	];

	const navbarButtons = [
		{
			label: "Discord",
			href: `https://discord.gg/`,
		},
	];
</script>

<div class="app">
	<main>
		<!-- Navbar -->
		<section style="
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: flex-start;
			padding: 10px;
			background: var(--fds-solid-background-base);
			border-bottom: 1px solid rgba(205, 205, 205, 0.25);
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1000; /* Ensures the navbar stays on top of other content */
		">
			<!-- Favicon -->
			<img src="https://i.spoo.me/690700" style="width: 160px; height: 50.5px; margin-right: -15px; margin-left: 45px; margin-top: 2px; margin-bottom: 2px; align-items: center;" />

			<div style="width: 1px; height: 30px; margin-right: 15px; background-color: #AAAAAAAA;"></div>

			<!-- Home -->
			<Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/';">Home</Fluent.Button>
			
			<Fluent.Flyout placement="bottom">
				<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Apps and Tools</Fluent.Button>
				<svelte:fragment slot="flyout">
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Ivirius Text Editor</Fluent.Button>
					</div>
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Ivirius Text Editor Plus</Fluent.Button>
					</div>
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Rebound 11</Fluent.Button>
					</div>
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Certificate Installer For MSIX</Fluent.Button>
					</div>
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">CrimsonUI</Fluent.Button>
					</div>
				</svelte:fragment>
			</Fluent.Flyout>

			<Fluent.Flyout placement="bottom">
				<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Community</Fluent.Button>
				<svelte:fragment slot="flyout">
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">News</Fluent.Button>
					</div>
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Documentations</Fluent.Button>
					</div>
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Developer Sanctuary</Fluent.Button>
					</div>
					<div>
						<Fluent.Button variant="hyperlink" style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;">Ivirius Community on Discord</Fluent.Button>
					</div>
				</svelte:fragment>
			</Fluent.Flyout>

			<!-- Contact us -->
			<Fluent.IconButton style="margin-left: Auto; margin-right: 15px; align-items: center;" onclick="window.location.href='/contact';">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M 3.75 16.25 L 3.056641 16.25 C 2.646484 16.25 2.255859 16.166992 1.884766 16.000977 C 1.513672 15.834961 1.189779 15.613607 0.913086 15.336914 C 0.636393 15.060222 0.415039 14.736328 0.249023 14.365234 C 0.083008 13.994141 0 13.603516 0 13.193359 L 0 4.306641 C 0 3.896484 0.083008 3.505859 0.249023 3.134766 C 0.415039 2.763672 0.636393 2.439779 0.913086 2.163086 C 1.189779 1.886395 1.513672 1.665039 1.884766 1.499023 C 2.255859 1.333008 2.646484 1.25 3.056641 1.25 L 16.943359 1.25 C 17.353516 1.25 17.744141 1.333008 18.115234 1.499023 C 18.486328 1.665039 18.810221 1.886395 19.086914 2.163086 C 19.363605 2.439779 19.584961 2.763672 19.750977 3.134766 C 19.916992 3.505859 20 3.896484 20 4.306641 L 20 13.193359 C 20 13.616537 19.915363 14.013672 19.746094 14.384766 C 19.576822 14.755859 19.348957 15.079753 19.0625 15.356445 C 18.776041 15.633139 18.44401 15.851237 18.066406 16.010742 C 17.688801 16.170248 17.291666 16.25 16.875 16.25 L 10.820312 16.25 L 5.810547 19.755859 C 5.595703 19.912109 5.348307 19.990234 5.068359 19.990234 C 4.886067 19.990234 4.715169 19.956055 4.555664 19.887695 C 4.396159 19.819336 4.256185 19.726562 4.135742 19.609375 C 4.015299 19.492188 3.920898 19.353842 3.852539 19.194336 C 3.784179 19.03483 3.75 18.863932 3.75 18.681641 Z M 18.75 13.125 L 18.75 4.375 C 18.75 4.121094 18.701172 3.880209 18.603516 3.652344 C 18.505859 3.42448 18.370768 3.224285 18.198242 3.051758 C 18.025715 2.879232 17.82552 2.744141 17.597656 2.646484 C 17.369791 2.548828 17.128906 2.5 16.875 2.5 L 3.125 2.5 C 2.871094 2.5 2.630208 2.548828 2.402344 2.646484 C 2.174479 2.744141 1.974284 2.879232 1.801758 3.051758 C 1.629232 3.224285 1.494141 3.42448 1.396484 3.652344 C 1.298828 3.880209 1.25 4.121094 1.25 4.375 L 1.25 13.125 C 1.25 13.378906 1.298828 13.619792 1.396484 13.847656 C 1.494141 14.075521 1.629232 14.275717 1.801758 14.448242 C 1.974284 14.620769 2.174479 14.755859 2.402344 14.853516 C 2.630208 14.951172 2.871094 15 3.125 15 L 4.375 15 C 4.544271 15 4.690755 15.06185 4.814453 15.185547 C 4.938151 15.309245 5 15.455729 5 15.625 L 5 18.681641 L 10.263672 15.117188 C 10.367838 15.039062 10.488281 15 10.625 15 L 16.875 15 C 17.128906 15 17.369791 14.951172 17.597656 14.853516 C 17.82552 14.755859 18.025715 14.620769 18.198242 14.448242 C 18.370768 14.275717 18.505859 14.075521 18.603516 13.847656 C 18.701172 13.619792 18.75 13.378906 18.75 13.125 Z" fill="var(--fds-text-primary)"/>
				</svg>
			</Fluent.IconButton>
		
			<!-- About -->
			<Fluent.IconButton style="margin-right: 45px; align-items: center;" onclick="window.location.href='/about';">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M 0 9.375 C 0 8.509115 0.110677 7.677409 0.332031 6.879883 C 0.553385 6.082357 0.867513 5.335287 1.274414 4.638672 C 1.681315 3.942059 2.169596 3.30892 2.739258 2.739258 C 3.308919 2.169598 3.942057 1.681316 4.638672 1.274414 C 5.335286 0.867514 6.082356 0.553387 6.879883 0.332031 C 7.677409 0.110678 8.509114 0 9.375 0 C 10.240885 0 11.072591 0.110678 11.870117 0.332031 C 12.667643 0.553387 13.414713 0.867514 14.111328 1.274414 C 14.807942 1.681316 15.44108 2.169598 16.010742 2.739258 C 16.580402 3.30892 17.068684 3.942059 17.475586 4.638672 C 17.882486 5.335287 18.196613 6.082357 18.417969 6.879883 C 18.639322 7.677409 18.75 8.509115 18.75 9.375 C 18.75 10.240886 18.637695 11.072592 18.413086 11.870117 C 18.188477 12.667644 17.872721 13.413086 17.46582 14.106445 C 17.058918 14.799805 16.570637 15.431315 16.000977 16.000977 C 15.431314 16.570639 14.799804 17.05892 14.106445 17.46582 C 13.413085 17.872721 12.666015 18.188477 11.865234 18.413086 C 11.064453 18.637695 10.234375 18.75 9.375 18.75 C 8.509114 18.75 7.675781 18.639322 6.875 18.417969 C 6.074219 18.196615 5.327148 17.882486 4.633789 17.475586 C 3.94043 17.068686 3.308919 16.580404 2.739258 16.010742 C 2.169596 15.441081 1.681315 14.80957 1.274414 14.116211 C 0.867513 13.422852 0.553385 12.675781 0.332031 11.875 C 0.110677 11.074219 0 10.240886 0 9.375 Z M 17.5 9.375 C 17.5 8.626303 17.403971 7.905273 17.211914 7.211914 C 17.019855 6.518556 16.746418 5.87077 16.391602 5.268555 C 16.036783 4.666342 15.613606 4.119467 15.12207 3.62793 C 14.630533 3.136395 14.083658 2.713217 13.481445 2.358398 C 12.879231 2.003582 12.231445 1.730145 11.538086 1.538086 C 10.844727 1.346029 10.123697 1.25 9.375 1.25 C 8.626302 1.25 7.905273 1.346029 7.211914 1.538086 C 6.518555 1.730145 5.870768 2.003582 5.268555 2.358398 C 4.666341 2.713217 4.119466 3.136395 3.62793 3.62793 C 3.136393 4.119467 2.713216 4.666342 2.358398 5.268555 C 2.003581 5.87077 1.730143 6.518556 1.538086 7.211914 C 1.346029 7.905273 1.25 8.626303 1.25 9.375 C 1.25 10.123698 1.346029 10.844727 1.538086 11.538086 C 1.730143 12.231445 2.001953 12.879232 2.353516 13.481445 C 2.705078 14.083659 3.128255 14.632162 3.623047 15.126953 C 4.117838 15.621745 4.666341 16.044922 5.268555 16.396484 C 5.870768 16.748047 6.518555 17.019857 7.211914 17.211914 C 7.905273 17.403971 8.626302 17.5 9.375 17.5 C 10.123697 17.5 10.844727 17.403971 11.538086 17.211914 C 12.231445 17.019857 12.879231 16.748047 13.481445 16.396484 C 14.083658 16.044922 14.63216 15.621745 15.126953 15.126953 C 15.621744 14.632162 16.044922 14.083659 16.396484 13.481445 C 16.748047 12.879232 17.019855 12.231445 17.211914 11.538086 C 17.403971 10.844727 17.5 10.123698 17.5 9.375 Z M 8.4375 5.625 C 8.4375 5.364584 8.528646 5.14323 8.710938 4.960938 C 8.893229 4.778646 9.114583 4.6875 9.375 4.6875 C 9.635416 4.6875 9.856771 4.778646 10.039062 4.960938 C 10.221354 5.14323 10.3125 5.364584 10.3125 5.625 C 10.3125 5.885417 10.221354 6.106771 10.039062 6.289062 C 9.856771 6.471354 9.635416 6.5625 9.375 6.5625 C 9.114583 6.5625 8.893229 6.471354 8.710938 6.289062 C 8.528646 6.106771 8.4375 5.885417 8.4375 5.625 Z M 8.75 13.125 L 8.75 8.125 C 8.75 7.95573 8.811849 7.809246 8.935547 7.685547 C 9.059244 7.56185 9.205729 7.5 9.375 7.5 C 9.544271 7.5 9.690755 7.56185 9.814453 7.685547 C 9.93815 7.809246 10 7.95573 10 8.125 L 10 13.125 C 10 13.294271 9.93815 13.440756 9.814453 13.564453 C 9.690755 13.688151 9.544271 13.75 9.375 13.75 C 9.205729 13.75 9.059244 13.688151 8.935547 13.564453 C 8.811849 13.440756 8.75 13.294271 8.75 13.125 Z " fill="var(--fds-text-primary)"/>
				</svg>
			</Fluent.IconButton>
		</section>
		
		<div style="margin-top: 70px;">
			<!-- Content -->
			<slot></slot>
		</div>

		
      <!--Bottom bar-->
      <section style="padding-top: 10px; padding-bottom: 10px; padding-left: 25px; background: var(--fds-solid-background-base); border-top: 1px solid rgba(205, 205, 205, 0.25); display: flex; flex-direction: column; align-items: flex-start;">
        <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
          Partners
        </Fluent.TextBlock>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.spoo.me';" style="margin-top: 10px; margin-bottom: 10px;">spoo.me URL shortener</Fluent.Button>
        <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
          Developers and contributors
        </Fluent.TextBlock>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-top: 10px; margin-bottom: 10px;">Ivirius</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">ErrorTek</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">TheDevil</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">0x5BFA</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">FlamebladeOmega</Fluent.Button>
        <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
          Website
        </Fluent.TextBlock>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='https://fluent-svelte.vercel.app';" style="margin-top: 10px; margin-bottom: 10px;">Fluent Svelte</Fluent.Button>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.vercel.com';">Vercel</Fluent.Button>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='/about';" style="margin-top: 10px; margin-bottom: 10px;">About</Fluent.Button>
                <Fluent.TextBlock variant="body" style="opacity: 0.5; margin-top: 10px; margin-bottom: 10px; margin-right: 25px;">
                  Ivirius Community (2020 - 2024) Official Website - Powered by Vercel and Fluent Svelte
                </Fluent.TextBlock>
      </section>
      
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
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
</style>