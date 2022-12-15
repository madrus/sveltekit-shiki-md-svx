<script lang='ts'>
	type ContainerProps = {
		class?: string;
		rest?: any;
	};

	export let props: ContainerProps = {};
	const {class: className = '', rest} = props
</script>

<section
	class={'container h-full mx-auto max-w-4xl md:px-4'.concat(' ', className)}
	{...rest}
>
	<slot />
</section>
