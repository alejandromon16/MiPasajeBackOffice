<script>
    import {slide} from 'svelte/transition';
    export let error = false;
</script>
<section>
    {#if error}
        <h2 in:slide={{ duration: 500 }} class="mb-4 text-red-400">
            Ingrese una cuenta o contrasena valida.
        </h2>
    {/if}
    <h3 class="font-bold text-2xl text-black">Bienvenido a Mi Pasaje</h3>
    <p class="text-gray-600 pt-2">Ingresa a tu cuenta.</p>
</section>