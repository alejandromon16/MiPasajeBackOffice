<script context="module">
    import { api }  from '@utils/api';
    import { getAllLocations } from '@components/LocationsManager/queries';
  
    export async function load({stuff}){
        if(!stuff.userRole === "ADMIN" || !stuff.userRole ==="SUPER_ADMIN"){
            return{
                status: 302,
                redirect: '/cliente/'
            }
        }else if(stuff.userRole == "SUPER_ADMIN"){
            const { data : { locations: res}} = await api(getAllLocations())
            return {
                props: {
                    locations:res
                }
            }
        }

        return {}
      }
</script>

<script lang="ts">
    import LocationsManager from '@components/LocationsManager/index.svelte';
    
    
    const page = 'Usuarios';
    const title = 'Ubicaciones';
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
            value: v => v.name,
            sortable: false,
        },
    ]
    export let locations;
    $: values = locations;
    console.log(values)
 </script>

<LocationsManager {title} {titles} {values} />