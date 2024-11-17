<script lang="ts">
	import type { Snippet } from 'svelte';

	enum ButtonStyle {
		Filled
	}

	interface ButtonProperties {
		children: Snippet;
		style?: ButtonStyle;
		type?: 'submit' | 'reset' | 'button' | undefined | null;
	}
	let { children, style = ButtonStyle.Filled, type = 'button' }: ButtonProperties = $props();
</script>

<button
	{type}
	class={`flex w-fit items-center justify-center rounded-xl ${style === ButtonStyle.Filled ? 'hover:bg-lightBlackHover focus:ring-lightBlackHover bg-lightBlack text-lightBeige focus-visible:outline-lightBlack' : ''} px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
>
	{@render children()}
</button>
