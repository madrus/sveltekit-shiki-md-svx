<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	// import Highlight from "$lib/components/Highlight.svx";
	import PageTitle from '$lib/components/PageTitle.svelte';
	const title = 'Сдать налоги в Нидерландах';
	const content = 'Здесь будет написан некий текст';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Container>
	<PageTitle {title} />
	<p class="text-3xl text-primary font-bold mb-5" />
	<p class="text-link text-lg">{content}</p>
	<!-- <Highlight /> -->
</Container>
