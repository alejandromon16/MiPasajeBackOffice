<script>
    import ViewUsers from "./viewUsers.svelte";
    import CreateUser from "./createUser.svelte";
    import { beforeNavigate } from '$app/navigation';
    import { loadUsers } from './store';
    export let values;
    export let titles;
    export let title;
    export let category;

    let component = ViewUsers;

    const goViewUsers = () => {
        loadUsers.update((v) => v = true)
        component = ViewUsers;
    }
</script>

<svelte:component 
    on:createUser={() => component=CreateUser}
    on:userCreated={() => goViewUsers()}
    on:cancelCreateUser={() => goViewUsers()}
    this={component} {values} {titles} {title} {category}/>
