<script context="module" lang="ts">
    import { getRole, getValidToken } from '@components/LoginCard/queries';
    import { api } from '@utils/api';
    import { logout } from '@utils/auth';
  
    export async function load({session}){
      console.log(session)
      const {data : { validToken : res}} = await api(getValidToken(session.token))
      
      if(!session.id || !res){
        logout()
        return {
          status: 302,
          redirect: '/'
        }
      }else{
        const { data: { giveMeRole: res2}} = await api(getRole(session.id))
        return{
          stuff: { userRole: res2}
        }
      }
      return {}
    }
</script>

<script>
    import { isSideMenuOpen, closeSideMenu, showModal, isDark, showModalLocations } from '@components/Layout/store';
    import SideBar from '@components/Layout/sidebar.svelte';
    import Header from '@components/Layout/header.svelte';
    import { fade } from 'svelte/transition';
  
    let show = false;
  
  </script>
  
  
  <section id="body" class="font-gt">
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900" class:overflow-hidden={$isSideMenuOpen}>
      <!-- Desktop sidebar -->
      <aside
        class="z-20 pt-5 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
      >
        <SideBar />
      </aside>
  
      <div class="flex flex-col flex-1 w-full">
        <Header />
        <div class="h-screen {$isDark? '':'bg-gray-100'} mt-20">
            <slot />
        </div>
        
      </div>
    </div>
  </section>
  

  