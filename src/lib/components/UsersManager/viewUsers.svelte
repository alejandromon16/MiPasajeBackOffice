<script>
    import Table from '@components/commons/dynamicTable.svelte';
    import Title from '@components/commons/pageTitle.svelte';
    import { createEventDispatcher } from 'svelte';
    import UsersManagerController from './UsersManagerController';
    import UsersManagerService from './UsersManagerService';

    let dispatch = createEventDispatcher();

    export let title;
    export let titles;
    export let values;
    export let category;
    let text = '+ Usuario';

    let usersManager = new UsersManagerController(new UsersManagerService)

    const deleteItem = (e) => {
        console.log('this is e', e)
    }
</script>

<div class="flex justify-between">
    <Title {title} />
    <div class="mt-10 pr-20">
        <button on:click={() => dispatch('createUser')} class="btn btn-primary px-10 rounded-2xl">{text}</button>
    </div>
</div>

<Table {titles} {values} {category} on:deleteItem={(e) => deleteItem(e) }/>