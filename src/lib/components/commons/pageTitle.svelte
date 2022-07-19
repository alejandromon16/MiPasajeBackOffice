<script lang="ts">
	export let title

	if( title == undefined){
		title = 'Punto de venta'
	}
</script>

<div>
    <div class="ml-20 mt-10" >
        <h1 class="font-semibold text-2xl text-[#181c32]">{title}</h1>
        <h1 class="text-sm text-[#767988]">Home / {title} /</h1>
    </div>
</div>
