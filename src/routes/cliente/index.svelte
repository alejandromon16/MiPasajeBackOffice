<script context="module">
    import { api } from '@utils/api';
    
    export async function load({stuff}){

        return{
            props: {
                userRole: stuff.userRole
            }
        }
    }
</script>

<script>
    import { user } from '@components/store';
    import { beforeNavigate } from '$app/navigation';

    beforeNavigate((v) => {
        console.log(v)
    })

    export let userRole;
</script>

{JSON.stringify($user)}
