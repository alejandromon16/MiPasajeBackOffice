<script context="module">
    import { api }  from '@utils/api';
    import { getAllUsers } from '@components/UsersManager/queries';
  
    export async function load({stuff}){
        console.log('this is stuff', stuff);
        if(stuff.userRole === "CLIENT" || stuff.userRole === "ADMIN" || stuff.userRole === "REGULAR"){
            return{
                status: 302,
                redirect: '/cliente/'
            }
        }
        
        if(stuff.userRole == "SUPER_ADMIN"){
            const { data : { users: res}} = await api(getAllUsers())
            return {
                props: {
                    users:res,
                }
            }
        }

        return {}
      }
</script>

<script lang="ts">
    import UsersManager from '@components/UsersManager/index.svelte';
    import { user } from '@components/store';
    import { loadUsers } from '@components/store';
    
    const page = 'Usuarios';
    const category = 'Usuario';
    const title = 'Usuarios';
    let titles = [
        { 
            key: "_id",
            title: "ID",
            value: v => v._id,
            sortable: false,
        },
        { 
            key: "name",
            title: "Nombre",
        },
        {
            key: "email",
            title: "Email"
        },
        { 
            key: "role",
            title: "Rol",
            value: v => v.role,
            sortable: false,
            
        }
    ]
    export let users;
    $: values = users;

    const getAllUsersAgain = async () => {
        const { data : { users: res}} = await api(getAllUsers())
        values = res
        loadUsers.update((v) => v = false);
    }
    
    $:{
        if($loadUsers){
            getAllUsersAgain();
        }
    }
    
 </script>

<UsersManager {title} {titles} {values} {category}/>
