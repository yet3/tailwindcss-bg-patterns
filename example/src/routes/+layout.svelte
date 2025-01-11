<script lang="ts">
	import '../app.css';

	const title = 'TailwindCSS background patterns';
	const description =
		'A TailwindCSS plugin that lets you use and customize css background patterns';

	let { children } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="author" content="Maksymilian Kasperowicz" />
	<link rel="author" href="https://www.maxkasperowicz.com/" />
	<meta name="robots" content="index, follow" />
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="TailwindCSS, tailwindcss, tailwind, tailwindcss plugin, plugin, css, background patterns, css patterns, background gradient, gradient patterns"
	/>

	<meta property="og:locale" content={'en_US'} />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
</svelte:head>

{@render children()}
