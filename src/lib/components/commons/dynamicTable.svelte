<script>
	import { goto } from '$app/navigation';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
  import { createEventDispatcher } from 'svelte';
  import ModalDelete from './modal.svelte';

	export let values = [];
	export let titles;
    export let category;
    let dispatch = createEventDispatcher();
	let filterValues = [];
	let currentPage = 1;
	let pageSize = 7;
	$: items = filterValues;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
	$: console.log(paginatedItems);

	let filterWord = '';

	$: {
		if (filterWord) {
			filterValues = values.filter((value) => {
				let valid = titles.some((v) =>
					value[v.key].toLowerCase().includes(filterWord.toLocaleLowerCase())
				);
				if (valid) {
					return value;
				}
			});
		} else {
			filterValues = values;
		}
	}
</script>

<div class="grid ml-9 mr-10">
	<div class="px-4 sm:px-8">
		<div class="py-8">
			<div class="pl-2 bg-gray-100 flex">
				<input
					bind:value={filterWord}
					type="text"
					placeholder="Filtra algun dato"
					class="input input-ghost w-full max-w-xs"
				/>
			</div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								{#each titles as { title }}
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
									>
										{title}
									</th>
								{/each}
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
								>
									ACCIONES
								</th>
							</tr>
						</thead>
						<tbody>
							{#each paginatedItems as value}
								<tr>
									{#each titles as { key }}
										<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div class="flex">
												<p class="text-gray-900 whitespace-no-wrap select-all">
													{value[key]}
												</p>
											</div>
										</td>
									{/each}
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div class="dropdown dropdown-hover absolute">
											<label tabindex="0" class="bg-gray-300 rounded-full p-2 px-4 text-gray-800"
												>acciones</label
											>
											<ul
												tabindex="0"
												class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
											>
												<li>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="h-6 w-6"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
															stroke-width="2"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
															/>
														</svg>
												</li>
												<li>
														><ModalDelete {category} idTagName={value.email} on:click={() => {
															dispatch('deleteItem',value._id);
															console.log('this is value', value);
															}}/>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
					<LightPaginationNav
						totalItems={items.length}
						{pageSize}
						{currentPage}
						limit={1}
						showStepOptions={true}
						on:setPage={(e) => (currentPage = e.detail.page)}
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <script>
  import { paginate, LightPaginationNav } from 'svelte-paginate'
 
  export let values;
  $: items = values;
  let currentPage = 1
  let pageSize = 2
  $: paginatedItems = paginate({ items, pageSize, currentPage })
</script> 
 
<ul class="items">
  {#each paginatedItems as item}
    <li class="item">
      {item}hol
    </li>
  {/each}
</ul>
 
<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/> -->
