<script>
	import ErrorNoti from './error.svelte'

	export let error = false;
</script>

<div class="mainCard">
	<ErrorNoti {error} />
    <slot />
</div>


<style>
	.mainCard {
		@apply bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl font-gt;
	}
</style>