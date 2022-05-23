<script>
	import { slide } from 'svelte/transition';

	import Icons from './Icons.svelte';
	import MobileNav from './MobileNav.svelte';

	let showMobileMenu = false;
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

	$: console.log(showMobileMenu);
</script>

<header class="fixed top-0 left-0 right-0 bg-blue z-50 shadow-lg">
	<div class="max-w-1200 px-4 p-3 flex justify-between items-center relative">
		<a href="/" class="text-2xl md:text-3xl font-bold text-white">
			Muhammad <span class="text-light-green">Rubel</span>
		</a>

		<!-- mobile menu -->
		<button class="text-light-green lg:hidden" on:click={() => (showMobileMenu = true)}>
			<Icons name="menu" />
		</button>

		<!-- extend nav -->
		<div class="hidden lg:flex justify-end items-center space-x-1">
			{#each navItems as item}
				<a
					href={item.link}
					class="text-xl px-4 py-1 font-semibold text-white hover:text-light-green custom-transition"
					>{item.name}</a
				>
			{/each}
		</div>
	</div>

	{#if showMobileMenu}
		<div transition:slide class="border absolute top-0 right-0 bg-blue w-screen h-screen">
			<MobileNav on:close={() => (showMobileMenu = false)} />
		</div>
	{/if}
</header>
