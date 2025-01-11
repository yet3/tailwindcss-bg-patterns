<script lang="ts">
	import BashCode from '$common/BashCode.svelte';
	import SimpleTabs from '$common/SimpleTabs.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { AiFillGithub } from 'svelte-icons-pack/ai';
</script>

<header class="mt-8 mb-12 flex flex-col items-center">
	<h1 class="font-medium ~xs/sm:~text-2xl/4xl text-center">@yet3/tailwindcss-bg-patterns</h1>
	<h3 class="text-lg text-white/50 mt-2 font-medium">IN-DEVELOPMENT</h3>
	<a
		href="https://github.com/yet3/tailwindcss-bg-patterns"
		rel="noopener noreferrer"
		target="_blank"
		class="mt-4"
	>
		<p class="flex items-center underline text-blue-300 ~xs/sm:~text-base/xl">
			Read more on <Icon className="ml-1 fill-white" src={AiFillGithub} size={28} />
		</p>
	</a>

	<SimpleTabs class="w-full max-w-[1000px] mt-12 px-4" tabs={['npm', 'pnpm', 'yarn']}>
		{#snippet tab(idx)}
			{#if idx === 1}
				<BashCode code="pnpm add -D @yet3/tailwindcss-bg-patterns" noStyle />
			{:else if idx === 2}
				<BashCode code="yarn add -D @yet3/tailwindcss-bg-patterns" noStyle />
			{:else}
				<BashCode code="npm install --save-dev @yet3/tailwindcss-bg-patterns" noStyle />
			{/if}
		{/snippet}
	</SimpleTabs>
</header>
