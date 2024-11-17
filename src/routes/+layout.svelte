<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<header class="m-4 flex items-center justify-between px-20 py-2">
	<div class="flex space-x-10 text-lg">
		<h1 class="text-2xl">Luka</h1>
		<nav class="flex items-center">
			<ul class="flex space-x-4">
				<li>
					<a href="#Experience">Experience</a>
				</li>
				<li>
					<a href="#Work">Work</a>
				</li>
				<li>
					<a href="#Blog">Blog</a>
				</li>
			</ul>
		</nav>
	</div>
	<Button>Contact me</Button>
</header>

<main class="my-4 flex min-h-lvh flex-col">
	{@render children()}
</main>
