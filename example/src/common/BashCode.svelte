<script lang="ts">
	import language from 'svelte-highlight/languages/bash';
	import type { ICodeBaseProps } from './Code.svelte';
	import Code from './Code.svelte';

	const props: ICodeBaseProps = $props();
</script>

<Code {...props} {language} />
