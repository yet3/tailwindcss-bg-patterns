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
			id: 'grid',
			name: 'Grid',
			configClasses: [...LINE_CONFIGS, ...SPACING_CONFIGS],
			class: 'bg-blue-500 bg-pattern-grid bg-pattern-line-0.5 bg-pattern-spacing-32'
		},
		{
			id: 'hatching',
			name: 'Hatching',
			configClasses: [...LINE_CONFIGS, ...SPACING_CONFIGS, ...HATCHING_DIRECTION_CONFIGS],
			class:
				'bg-blue-500 bg-pattern-hatching bg-pattern-line-0.5 bg-pattern-spacing-16 bg-pattern-hatching-left-to-right'
		},
		{
			id: 'cross-hatching',
			name: 'Cross-Hatching',
			configClasses: [...LINE_CONFIGS, ...SPACING_CONFIGS, ...HATCHING_DIRECTION_CONFIGS],
			class: 'bg-blue-500 bg-pattern-cross-hatching bg-pattern-line-0.5 bg-pattern-spacing-16'
		},
		{
			id: 'polka-dot',
			name: 'Polka dot',
			configClasses: [...LINE_CONFIGS, ...SPACING_CONFIGS, ...HATCHING_DIRECTION_CONFIGS],
			class:
				'bg-blue-500 bg-pattern-polka-dot bg-pattern-dot-white bg-pattern-dot-8 bg-pattern-spacing-16'
		},
		{
			id: 'hexagonal-polka-dot',
			name: 'Hexagonal polka dot',
			configClasses: [...LINE_CONFIGS, ...SPACING_CONFIGS, ...HATCHING_DIRECTION_CONFIGS],
			class:
				'bg-blue-500 bg-pattern-hex-polka-dot bg-pattern-dot-white bg-pattern-dot-8 bg-pattern-spacing-16'
		}
	];
</script>

<svelte:head>
	{@html githubCodeStyle}
</svelte:head>

<Header />

<main class="px-4">
	<section class=" mx-auto" aria-label="All patterns">
		<h2 class="font-medium text-2xl text-center mb-2">Available patterns</h2>
		<ol class="flex flex-wrap justify-center px-2">
			{#each PATTERNS as pattern}
				<li class="text-blue-300 underline px-2 my-1">
					<a href={`#${pattern.id}`}>{pattern.name}</a>
				</li>
			{/each}
		</ol>
	</section>

	<ol class="grid content-start pb-64">
		{#each PATTERNS as pattern}
			<li class="border-b border-white/75 last-of-type:border-transparent py-6">
				<Pattern data={pattern} />
			</li>
		{/each}
	</ol>
</main>
