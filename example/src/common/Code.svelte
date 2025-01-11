<script lang="ts">
	import { onDestroy } from 'svelte';
	import Highlight from 'svelte-highlight';
	import type { LanguageType } from 'svelte-highlight/languages';
	import { Icon } from 'svelte-icons-pack';
	import { FaCopy } from 'svelte-icons-pack/fa';

	export interface ICodeBaseProps {
		class?: string;
		code: string;

		noStyle?: boolean;
	}

	interface IProps extends ICodeBaseProps {
		language: LanguageType<string>;
	}

	let copyTimeout = $state<NodeJS.Timeout | null>(null);

	onDestroy(() => {
		if (copyTimeout != null) {
			clearTimeout(copyTimeout);
		}
	});

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);

			copyTimeout = setTimeout(() => {
				copyTimeout = null;
			}, 1000);
		} catch (e) {
			console.error(e);
			alert('Error copying code');
		}
	};

	const { code, language, noStyle = false, class: className }: IProps = $props();
</script>

<div class="relative group">
	<div
		class={{
			'absolute top-0 left-0 w-full h-full grid place-items-center text-lg font-medium bg-black/75 pointer-events-none transition-opacity': true,
			'opacity-100': copyTimeout != null,
			'opacity-0': copyTimeout == null
		}}
	>
		Copied code!
	</div>
	<button
		aria-label="Copy code"
		onclick={handleCopy}
		class={{
			'absolute right-2 top-2 size-10 grid place-items-center bg-code border border-white rounded transition-opacity': true,
			'opacity-0': copyTimeout != null,
			'opacity-0 group-hover:opacity-100': copyTimeout == null
		}}><Icon src={FaCopy} /></button
	>
	<Highlight
		class={[
			{
				'min-h-14 ~2xs/xs:~text-sm/base': true,
				'border border-white rounded overflow-hidden whitespace-break-spaces': !noStyle
			},
			className
		]}
		{language}
		{code}
	/>
</div>
