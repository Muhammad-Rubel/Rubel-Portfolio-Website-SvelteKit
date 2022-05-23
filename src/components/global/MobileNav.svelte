<script>
	import { createEventDispatcher } from 'svelte';
	import Icons from './Icons.svelte';

	const dispatch = createEventDispatcher();
	const navItems = [
		{
			name: 'Home',
			link: '#!'
		},
		{
			name: 'About',
			link: '#!'
		},
		{
			name: 'Service',
			link: '#!'
		},
		{
			name: 'Projects',
			link: '#!'
		},
		{
			name: 'Pricing',
			link: '#!'
		},
		{
			name: 'Contact',
			link: '#!'
		}
	];

	const closeMenu = () => {
		dispatch('close');
	};
</script>

<section class="h-full w-full relative">
	<!-- image -->
	<div class="flex justify-center pt-12">
		<div class="h-32 w-32 rounded-full bg-white border-4 border-white overflow-hidden">
			<img src="/images/profile.png" alt="" class="h-32 object-cover object-center" />
		</div>
	</div>

	<!-- navItems -->
	<div class="mt-6 flex flex-col justify-center items-center space-y-2">
		{#each navItems as item}
			<a
				href={item.link}
				class="text-xl px-4 py-1 font-semibold text-white hover:text-light-green custom-transition"
				>{item.name}</a
			>
		{/each}
	</div>

	<!-- contact icons -->
	<div class="mt-20 flex justify-center items-center space-x-3">
		<a href="#!" class="text-blue h-8 w-8 rounded-full bg-white flex justify-center items-center"
			><Icons name="facebook" classList="h-5" /></a
		>
		<a href="#!" class="text-blue h-8 w-8 rounded-full bg-white flex justify-center items-center"
			><Icons name="linkedin" classList="h-5" /></a
		>
		<a href="#!" class="text-blue h-8 w-8 rounded-full bg-white flex justify-center items-center"
			><Icons name="whatsapp" classList="h-5" /></a
		>
		<a href="#!" class="text-blue h-8 w-8 rounded-full bg-white flex justify-center items-center"
			><Icons name="mail" classList="h-4" /></a
		>
	</div>

	<button
		class="absolute top-2 right-4 text-4xl font-bold text-white leading-none"
		on:click={closeMenu}
	>
		&times;
	</button>
</section>
