<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProps {
		class?: string;
		tabs: string[];
		tab: Snippet<[number]>;
	}

	let selectedTab = $state(0);

	const handleTabChange = (idx: number) => {
		selectedTab = idx;
	};

	const { class: className, tabs, tab }: IProps = $props();
</script>

<div class={className}>
	<ol class="grid grid-flow-col border border-b-0 border-white rounded-t divide-x w-fit">
		{#each tabs as tabName, idx}
			<li>
				<button
					class={{
						'w-full text-center px-4 py-1': true,
						'text-white': selectedTab === idx,
						'text-white/50': selectedTab !== idx
					}}
					onclick={() => handleTabChange(idx)}>{tabName}</button
				>
			</li>
		{/each}
	</ol>

	<div class="border border-white rounded-b overflow-hidden">
		{@render tab(selectedTab)}
	</div>
</div>
