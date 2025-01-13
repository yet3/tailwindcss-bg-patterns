<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProps {
		class?: string;
		href: string;
		ariaLabel: string;

		children: Snippet;
	}

	const { children, href, ariaLabel, class: className }: IProps = $props();
</script>

<a {href} aria-label={ariaLabel} rel="noopener noreferrer" target="_blank" class={className}>
	{@render children()}
</a>
