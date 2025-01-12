<script lang="ts">
	import HtmlCode from './HtmlCode.svelte';

	export interface IPatternConfig {
		name: string;
		description: string;
	}
	export interface IPattern {
		name: string;
		class: string;
		configClasses: IPatternConfig[];
	}

	interface IProps {
		data: IPattern;
	}

	const { data }: IProps = $props();
	const { name, configClasses, class: className } = data;
</script>

<section class="grid lg:grid-cols-[2fr_minmax(400px,1fr)] gap-x-8 gap-y-4">
	<article class="flex flex-col justify-center">
		<h2 class="mb-4 text-3xl font-medium">{name}</h2>

		<h3 class="font-medium text-white/90 ~2xs/xs:~text-base/lg">Configuration classes:</h3>
		<ul class="ml-2 mb-4 ~2xs/xs:~text-sm/base grid content-start gap-1">
			{#each configClasses as config}
				<li class="flex max-xl:flex-col">
					<code class="ml-1 font-medium text-class">.{config.name}</code>
					<p class="ml-3 text-white/75">{config.description}</p>
				</li>
			{/each}
		</ul>

		<HtmlCode code={`<div class="${className}"></div>`} />
	</article>
	<article class="border-4 border-white w-full h-full min-h-48 rounded">
		<div class={['size-full', className]}></div>
	</article>
</section>
