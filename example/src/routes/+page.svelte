<script lang="ts">
	import Pattern, { type IPattern, type IPatternConfig } from '$common/Pattern.svelte';
	import Footer from '$modules/Footer.svelte';
	import Header from '$modules/Header.svelte';
	import githubCodeStyle from 'svelte-highlight/styles/github-dark';

	const LINE_CONFIGS: IPatternConfig[] = [
		{
			name: 'bg-pattern-line',
			options: [
				{ name: '-2', description: 'Lines width' },
				{ name: '-[321]', description: 'Custom lines width (in px without unit)' },
				{ name: '-red-500', description: 'Lines colors' },
				{ name: '-[#a8a8a8]', description: 'Custom lines color' }
			]
		}
	];

	const DOT_CONFIGS: IPatternConfig[] = [
		{
			name: 'bg-pattern-dot',
			options: [
				{ name: '-2', description: 'Dots width' },
				{ name: '-[321]', description: 'Custom dots width (in px without unit)' },
				{ name: '-red-500', description: 'Dots colors' },
				{ name: '-[#a8a8a8]', description: 'Custom dots color' }
			]
		}
	];

	const SPACING_CONFIGS: IPatternConfig[] = [
		{
			name: 'bg-pattern-spacing',
			options: [
				{ name: '-2', description: 'Spacing' },
				{ name: '-[321]', description: 'Custom spacing (in px without unit)' }
			]
		}
	];

	const HATCHING_DIRECTION_CONFIGS: IPatternConfig[] = [
		{
			name: 'bg-pattern-hatching',
			options: [
				{ name: '-left-to-right', description: 'Start hatching from top left' },
				{ name: '-right-to-left', description: 'Start hatching from top right' }
			]
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
			configClasses: [...DOT_CONFIGS, ...SPACING_CONFIGS],
			class:
				'bg-blue-500 bg-pattern-polka-dot bg-pattern-dot-white bg-pattern-dot-8 bg-pattern-spacing-32'
		},
		{
			id: 'hexagonal-polka-dot',
			name: 'Hexagonal polka dot',
			configClasses: [...DOT_CONFIGS, ...SPACING_CONFIGS],
			class:
				'bg-blue-500 bg-pattern-hex-polka-dot bg-pattern-dot-white bg-pattern-dot-8 bg-pattern-spacing-32'
		}
	];
</script>

<svelte:head>
	{@html githubCodeStyle}
</svelte:head>

<Header />

<main class="px-4">
	<section class="mb-12 mx-auto" aria-label="All patterns">
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

<Footer />
