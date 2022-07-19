<script context="module">
  import { getValidToken } from '@components/LoginCard/queries';
  import { api } from '@utils/api';

  export async function load({session}){
    const {data : { validToken : res}} = await api(getValidToken(session.token))
    if (session.id && res) {
      return {
        status: 302,
        redirect: '/cliente/'
      }
    }
    return {}
  }
</script>
  

<script lang="ts">
    import LoginCard from '@components/LoginCard/index.svelte';
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';


    const redirectToHome = () => {
      location.href = '/cliente/'
    }
</script>

<div out:fade={{duration:350}} class="snap-start h-screen w-full">
  <div class="relative h-2/5 bg-gradient-to-b from-[#7A2EF8] to-[#7293db]">
    <div class="pt-5 ml-6">
      <span class="font-gt font-bold text-4xl text-white font-gt">MiPasaje</span>
    </div>
    <div class="pt-24 mx-4">
      <LoginCard on:success={redirectToHome}/>
    </div>
  </div>
  <div class="h-3/5 bg-[#f1f2f6]" />
</div>

<img src="/logo.png" alt="">