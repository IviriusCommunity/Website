<script>
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { page } from '$app/stores';

	// Helper booleans for expander expansion
	const isGeneral = [
		'/docs',
		'/crimsonui',
		'/docs/install-app-package-manually'
	].includes($page.url.pathname);

	const isUWP = [
		'/docs/windowdecorations'
	].includes($page.url.pathname);

	const isRebound11 = [
		'/docs/rebound11/defragment-and-optimize-drives'
	].includes($page.url.pathname);
</script>

<div class="app">
	<main>
		<div>
			<div class="container">
				<div class="panel">
					<!-- Panel content -->
					<h2>
						<Fluent.Expander expanded={isGeneral} class="newexpander">
							General <div slot="content">
								<Fluent.ListItem selected={$page.url.pathname === '/docs'} onclick="window.location.href='/docs';">Home</Fluent.ListItem>
								<Fluent.ListItem selected={$page.url.pathname === '/crimsonui'} onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.ListItem>
								<Fluent.ListItem selected={$page.url.pathname === '/docs/install-app-package-manually'} onclick="window.location.href='/docs/install-app-package-manually';">Install app package manually</Fluent.ListItem>
							</div>
						</Fluent.Expander>

						<Fluent.Expander expanded={false}>
							WinUI 3 <div slot="content">
								<Fluent.ListItem disabled>Full customization sample</Fluent.ListItem>
								<Fluent.ListItem disabled>Ivirius.Windowing API</Fluent.ListItem>
								<Fluent.ListItem disabled>Acrylic Glass</Fluent.ListItem>
								<Fluent.ListItem disabled>WinUI title bar customization</Fluent.ListItem>
								<Fluent.ListItem disabled>Ivirius.Converters</Fluent.ListItem>
								<Fluent.ListItem disabled>Ivirius.Helpers</Fluent.ListItem>
								<Fluent.ListItem disabled>Ivirius.Win32</Fluent.ListItem>
								<Fluent.ListItem disabled>Snap layouts on demand</Fluent.ListItem>
							</div>
						</Fluent.Expander>

						<Fluent.Expander expanded={isUWP}>
							UWP <div slot="content">
								<Fluent.ListItem disabled>Full customization sample</Fluent.ListItem>
								<Fluent.ListItem disabled>Ivirius.Windowing API</Fluent.ListItem>
								<Fluent.ListItem disabled>Acrylic Glass</Fluent.ListItem>
								<Fluent.ListItem selected={$page.url.pathname === '/docs/windowdecorations'} onclick="window.location.href='/docs/windowdecorations';">WindowDecorations</Fluent.ListItem>
								<Fluent.ListItem disabled>Ivirius.Converters</Fluent.ListItem>
								<Fluent.ListItem disabled>Ivirius.Helpers</Fluent.ListItem>
								<Fluent.ListItem disabled>Uncontained app</Fluent.ListItem>
							</div>
						</Fluent.Expander>

						<Fluent.Expander>
							Ivirius Text Editor Plus <div slot="content">
								<Fluent.ListItem disabled>Print</Fluent.ListItem>
								<Fluent.ListItem disabled>Tables</Fluent.ListItem>
								<Fluent.ListItem disabled>Zippy</Fluent.ListItem>
							</div>
						</Fluent.Expander>

						<Fluent.Expander expanded={isRebound11}>
							Rebound 11 <div slot="content">
								<Fluent.ListItem disabled>Control Panel</Fluent.ListItem>
								<Fluent.ListItem disabled>Run</Fluent.ListItem>
								<Fluent.ListItem disabled>Disk Cleanup</Fluent.ListItem>
								<Fluent.ListItem selected={$page.url.pathname === '/docs/rebound11/defragment-and-optimize-drives'} onclick="window.location.href='/docs/rebound11/defragment-and-optimize-drives/';">Defragment and Optimize Drives</Fluent.ListItem>
								<Fluent.ListItem disabled>TPM Manager</Fluent.ListItem>
								<Fluent.ListItem disabled>Rebound Hub</Fluent.ListItem>
							</div>
						</Fluent.Expander>
					</h2>
				</div>

				<div class="main-content" id="content">
					<!-- Content -->
					<slot></slot>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	@use '../mixins' as *;

	:global(.newexpander) {
		background-color: transparent;
		&.direction- {
			&down {
				&.expander-content {
					border-block-start: none;
					border-radius: var(--control-corner-radius);
					border-start-start-radius: 0;
					border-start-end-radius: 0;
					transform: translateY(-100%);
				}
				&.expanded .expander-header {
					border-radius: var(--control-corner-radius);
					border-end-start-radius: 0;
					border-end-end-radius: 0;
				}
			}
			&up {
				&.expander-content {
					border-bottom: none;
					border-radius: var(--control-corner-radius);
					border-end-start-radius: 0;
					border-end-end-radius: 0;
					transform: translateY(100%);
					&-anchor {
						order: -1;
					}
				}
				&.expanded .expander-header {
					border-radius: var(--control-corner-radius);
					border-start-start-radius: 0;
					border-start-end-radius: 0;
				}
			}
		}
		&.expanded {
			&.expander {
				&-content {
					transform: none;
					transition: var(--control-slow-duration) var(--control-fast-out-slow-in-easing) transform;
					&-anchor {
						max-block-size: 6.02e23vmax;
						transition: none;
					}
				}
				&-chevron svg {
					transform: rotate(180deg);
				}
			}
		}
		&.h3 {
			display: contents;
		}
		&-icon {
			flex: 0 0 auto;
			color: var(--text-primary);
			inline-size: 16px;
			block-size: 16px;
			margin-inline-end: 16px;
		}
		&-header {
			text-align: start;
			outline: none;
			box-sizing: border-box;
			padding-inline-start: 16px;
			padding: 8px;
			background-clip: padding-box;
			background-color: transparent;
			border: 1px solid var(--card-stroke-default);
			border-radius: var(--control-corner-radius);
			&-title {
				flex: 1 1 auto;
			}
			&:focus-visible {
				box-shadow: var(--focus-stroke);
			}
			&:hover .expander-chevron {
				background-color: transparent;
			}
			&:active .expander-chevron {
				color: var(--text-secondary);
				background-color: transparent;
			}
		}
		&-chevron {
			flex: 0 0 auto;
			inline-size: 32px;
			block-size: 32px;
			margin-inline-start: 20px;
			border: none;
			outline: none;
			appearance: none;
			color: var(--text-primary);
			border-radius: var(--control-corner-radius);
			background-color: transparent;
			&:focus-visible {
				box-shadow: var(--focus-stroke);
			}
		}
		&-content {
			@include typography-body;
			background-clip: padding-box;
			background-color: var(--card-background-secondary);
			border: 1px solid var(--card-stroke-default);
			padding: 16px;
			transition: var(--control-fast-duration) cubic-bezier(1, 1, 0, 1) transform;
			&-anchor {
				max-height: 0;
				position: relative;
				overflow: hidden;
				transition: 0ms linear var(--control-slow-duration) max-height;
			}
		}
	}

	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.panel {
		flex: 1;
		padding: 20px;
		box-sizing: border-box;
		margin-top: 10px;
	}

	.main-content {
		flex: 3;
		padding-left: 35px;
		padding-right: 35px;
		padding-bottom: 35px;
		box-sizing: border-box;
		border-top-left-radius: 8px;
		background-color: var(--fds-control-fill-default);
		margin-top: 50px;
	}

	@media (max-width: 1100px) {
		.container {
			flex-direction: column;
		}

		.panel,
		.main-content {
			flex: 1;
			width: auto;
			border-top-left-radius: 0px;
		}
	}
</style>
