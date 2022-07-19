<script>
    import PageTitle from "@components/commons/pageTitle.svelte";
    import { createEventDispatcher } from "svelte";
    import UsersManagerController from './UsersManagerController';
    import UsersManagerService from './UsersManagerService';
    import validator from 'validator';

    let dispatch = createEventDispatcher();

    import Select from 'svelte-select';
    let title = 'Nuevo Usuario';
    let placeholder = 'Selecciona un Rol';
    let items = [
        {value: 'CLIENT', label: 'CLIENT'},
        {value: 'ADMIN', label: 'ADMIN'},
        {value: 'SUPER_ADMIN', label: 'SUPER_ADMIN'}
    ];


    let usersManager = new UsersManagerController(new UsersManagerService);
    let errors = usersManager.getErrors();
    console.log('e121,',errors)
    const creation = async () => {
        if(usersManager.validData()){
            let res = await usersManager.createUser();
            if(res){
                dispatch('userCreated');
            }
        }else{
            errors =  usersManager.getErrors();;
        }
    };

</script>

<PageTitle {title} />

<div class="grid mx-20 mt-10">
    <div class="bg-white outline-none rounded-lg shadow-lg px-20 py-10 space-y-10">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
            <input bind:value={usersManager.name} class="bg-gray-50 outline-purple-400 border  border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required oninvalid="this.setCustomValidity('Por favor Ingresa el nombre')">
            <h1 class="font-light text-red-500 text-xs">{errors.name}</h1>
        </div>
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input bind:value={usersManager.email} class="bg-gray-50 outline-purple-400 border  border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required oninvalid="this.setCustomValidity('Por favor Ingresa el nombre')">
            <h1 class="font-light text-red-500 text-xs">{errors.email}</h1>
        </div>
        <div class="flex space-x-5">
            <div class="w-1/2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contraseña</label>
            <input bind:value={usersManager.password} type="password"class="bg-gray-50 outline-purple-400 border  border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required oninvalid="this.setCustomValidity('Por favor Ingresa el nombre')">
            <h1 class="font-light text-red-500 text-xs">{errors.password}</h1>
        </div><div class="w-1/2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repetir Contraseña</label>
            <input bind:value={usersManager.passwordValid} class="bg-gray-50 outline-purple-400 border  border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required oninvalid="this.setCustomValidity('Por favor Ingresa el nombre')">
            <h1 class="font-light text-red-500 text-xs">{errors.password}</h1>
        </div>
        </div>

         <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rol</label>
            <Select {placeholder} {items} on:select={(e) => usersManager.role = e.detail.value} isClearable={false} />
        </div>
        <div class="flex justify-between pt-2">
            <button on:click={() => dispatch('cancelCreateUser')} class="btn bg-red-500 hover:bg-red-600">Cancelar</button>
            <div>
                 <button on:click={() => creation()} class="btn btn-primary">Crear Usuario</button>
            </div>
            
        </div>
       

        
    </div>  
</div>