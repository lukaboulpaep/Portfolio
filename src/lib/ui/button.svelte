<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProperties {
		children: Snippet;
	}
	let { children }: ButtonProperties = $props();
</script>

<button class="rounded-full bg-lightBlack px-3 py-2 text-lightBeige">
	{@render children()}
</button>
