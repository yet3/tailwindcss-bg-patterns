<script lang="ts">
	import Pattern, { type IPattern, type IPatternConfig } from '$common/Pattern.svelte';
	import Header from '$modules/Header.svelte';
	import githubCodeStyle from 'svelte-highlight/styles/github-dark';

	const LINE_CONFIGS: IPatternConfig[] = [
		{ name: 'bg-pattern-line-2', description: 'Configure width of pattern lines' },
		{
			name: 'bg-pattern-line-[48]',
			description: 'Configure width of pattern lines (custom value, without unit)'
		},
		{ name: 'bg-pattern-line-red-500', description: 'Configure color of pattern lines' },
		{
			name: 'bg-pattern-line-[#a8a8a8]',
			description: 'Configure color of pattern lines (custom value)'
		}
	];

	const SPACING_CONFIGS: IPatternConfig[] = [
		{ name: 'bg-pattern-spacing-48', description: 'Configure the spacing between lines' },
		{
			name: 'bg-pattern-spacing-[225]',
			description: 'Configure the spacing between lines (custom value, without unit)'
		}
	];

	const HATCHING_DIRECTION_CONFIGS: IPatternConfig[] = [
		{
			name: 'bg-pattern-hatching-left-to-right',
			description: 'Configure hatching to start from top left'
		},
		{
			name: 'bg-pattern-hatching-right-to-left',
			description: 'Configure hatching to start from top right'
		}
	];

	const PATTERNS: IPattern[] = [
		{
			name: 'Grid',
			configClasses: [
				...LINE_CONFIGS,
				{ name: 'bg-pattern-cell-48', description: 'Configure size of grid pattern cells' },
				{
					name: 'bg-pattern-cell-[225]',
					description: 'Configure size of grid pattern cells (custom value)'
				}
			],
			class: 'bg-blue-500 bg-pattern-grid bg-pattern-line-0.5 bg-pattern-cell-32'
		},
		{
			name: 'Hatching',
			configClasses: [...LINE_CONFIGS, ...SPACING_CONFIGS, ...HATCHING_DIRECTION_CONFIGS],
			class:
				'bg-blue-500 bg-pattern-hatching bg-pattern-line-0.5 bg-pattern-spacing-16 bg-pattern-hatching-left-to-right'
		},
		{
			name: 'Cross-Hatching',
			configClasses: [...LINE_CONFIGS, ...SPACING_CONFIGS, ...HATCHING_DIRECTION_CONFIGS],
			class: 'bg-blue-500 bg-pattern-cross-hatching bg-pattern-line-0.5 bg-pattern-spacing-16'
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
