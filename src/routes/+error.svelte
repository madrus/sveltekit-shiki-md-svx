
<script lang='ts'>
	import { page } from '$app/stores';

	const {
		status,
		error,
	} = $page;
	const title = `${status}: ${error?.message}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

