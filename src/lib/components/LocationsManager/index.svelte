<script>
    import Table from '@components/commons/dynamicTable.svelte';
    import Title from '@components/commons/pageTitle.svelte';
    export let title;
    export let titles;
    export let values;
    let text = '+ Ubicacion';
</script>

<div class="flex justify-between">
    <Title {title} />
    <div class="mt-10 pr-20">
        <button class="btn btn-primary px-10 rounded-2xl">{text}</button>
    </div>
</div>

<Table {titles} {values}/>