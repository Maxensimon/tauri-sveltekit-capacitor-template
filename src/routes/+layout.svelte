<script lang="ts">
	import { onMount } from 'svelte';

	let isReady = false;

	onMount(() => {
		isReady = true;
	});
</script>

<!-- Wait DOM to be ready -->
{#if isReady}
	<slot />
{:else}
	<div />
{/if}

<style>
	@import '../app.css';
</style>
