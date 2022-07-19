<script>
    export let value = '';
    export let label = '';
</script>


<div>
    <h1 class="text-gray-700 text-sm font-bold mb-2 ml-3">{label}</h1>
</div>
<div type="text" class="bg-[#f1f2f6] w-full rounded-lg h-12">
    <input type="text" id="email" bind:value class="bg-[#f1f2f6] outline-none h-12 rounded w-full text-gray-700 px-3">
</div>
