<script lang="ts">
	import UserLoginController from './UserLoginController';
	import UserLoginService from './UserLoginService';
	import InputText from '@components/commons/inputText.svelte';
	import Card from './components/card.svelte';
	import { user } from './store';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { authenticate } from '@utils/auth';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let userLoginController = new UserLoginController(new UserLoginService());

	$: error = userLoginController.wrongData;

	const tryLogin = async () => {
		const res = await userLoginController.login();
		error = userLoginController.wrongData;

		if (res) {
			user.update((v) => {
				v.token = res.token;
				v.id = res._id;
				v.role = res.role;
				return v;
			});
			console.log('this reees',res)
			await authenticate(res);
			dispatch('success');
		}
	};

</script>

<Card {error}>
	<section class="mt-10">
		<div class="flex flex-col">
			<div class="flex flex-col space-y-4">
				<div class="">
					<InputText bind:value={userLoginController.email} label={'Email'} />
				</div>

				<div class="mt-20">
					<InputText bind:value={userLoginController.password} label={'Contrasena'} />
				</div>
			</div>

			<div class="flex justify-end mt-5">
				<a href=" " class="text-sm text-black hover:text-purple-700 hover:underline mb-6"
					>te olvidaste tu contrasena?</a
				>
			</div>
			<button on:click={() => tryLogin()} class="btn btn-primary">Ingresar</button>
		</div>
	</section>
</Card>

<div class="max-w-lg mx-auto text-center text-black mt-12 mb-6">
	<p class="">No tienes cuenta? <a href=" " class="font-bold hover:underline">Contactanos</a>.</p>
</div>

<style>
	.mainCard {
		@apply bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl font-gt;
	}
</style>
