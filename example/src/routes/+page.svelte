<script lang="ts">
	import Pattern, { type IPattern } from '$common/Pattern.svelte';
	import Header from '$modules/Header.svelte';
	import githubCodeStyle from 'svelte-highlight/styles/github-dark';

	const PATTERNS: IPattern[] = [
		{
			name: 'Grid',
			configClasses: [
				{ name: 'bg-pattern-line-2', description: 'Configure width of pattern lines' },
				{
					name: 'bg-pattern-line-[48]',
					description: 'Configure width of pattern lines (custom value, must not contain unit)'
				},
				{ name: 'bg-pattern-line-red-500', description: 'Configure color of pattern lines' },
				{
					name: 'bg-pattern-line-[#a8a8a8]',
					description: 'Configure color of pattern lines (custom value)'
				},
				{ name: 'bg-pattern-cell-48', description: 'Configure size of grid pattern cells' },
				{
					name: 'bg-pattern-cell-[225]',
					description: 'Configure size of grid pattern cells (custom value)'
				}
			],
			class: 'bg-blue-500 bg-pattern-grid bg-pattern-line-0.5 bg-pattern-cell-32'
		}
	];
</script>

<svelte:head>
	{@html githubCodeStyle}
</svelte:head>

<Header />

<main class="px-4">
	<ol class="grid content-start pb-64">
		{#each PATTERNS as pattern}
			<li class="border-b border-white/75 last-of-type:border-transparent py-6">
				<Pattern data={pattern} />
			</li>
		{/each}
	</ol>
</main>
