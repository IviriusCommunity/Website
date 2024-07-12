<script>
	import './styles.css';
	import navbar from "../layout/Navbar.scss";
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
		<navbar:Navbar items={navbarItems} buttons={navbarButtons}/>
		
		<slot></slot>
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