<script lang="ts">
	import Anchor from '$common/Anchor.svelte';
	import BashCode from '$common/BashCode.svelte';
	import BuyMeCoffee from '$common/BuyMeCoffee.svelte';
	import SimpleTabs from '$common/SimpleTabs.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { AiFillGithub } from 'svelte-icons-pack/ai';
	import { TrFillBriefcase2 } from 'svelte-icons-pack/tr';
</script>

<header class="mt-8 mb-12 flex flex-col items-center">
	<h1 class="font-medium ~xs/sm:~text-2xl/4xl text-center">@yet3/tailwindcss-bg-patterns</h1>
	<h3 class="text-lg text-white/50 mt-2 font-medium">IN-DEVELOPMENT</h3>
	<ul class="mt-4 grid grid-flow-col items-center gap-4" aria-label="My links">
		<li>
			<Anchor
				href="https://github.com/yet3/tailwindcss-bg-patterns"
				ariaLabel="Github (opens in a new tab)"
				class="flex items-center"
			>
				<Icon className="mr-1 fill-white" src={AiFillGithub} size={28} />
				Github
			</Anchor>
		</li>
		<li>
			<Anchor
				href="https://github.com/yet3/tailwindcss-bg-patterns"
				ariaLabel="Github (opens in a new tab)"
				class="flex items-center"
			>
				<Icon className="mr-1 fill-white" src={TrFillBriefcase2} size={24} />
				Portfolio
			</Anchor>
		</li>
		<li>
			<BuyMeCoffee />
		</li>
	</ul>

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
