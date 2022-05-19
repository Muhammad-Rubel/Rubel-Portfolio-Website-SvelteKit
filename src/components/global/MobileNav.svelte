<script>
	import Icons from './Icons.svelte';

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
</script>

<section>
	<!-- image -->
	<div class="flex justify-center mt-12">
		<div class="h-32 w-32 rounded-full bg-white border-4 border-white overflow-hidden">
			<img src="/images/profile.png" alt="" class="h-32 object-cover object-center" />
		</div>
	</div>

	<!-- navItems -->
	<div class="flex flex-col justify-center items-center space-y-2">
		{#each navItems as item}
			<a
				href={item.link}
				class="text-xl px-4 py-1 font-semibold text-white hover:text-light-green custom-transition"
				>{item.name}</a
			>
		{/each}
	</div>

	<!-- contact icons -->
	<div>
		<a href="#!" class="text-blue h-7 w-7 rounded-full bg-white flex justify-center items-center"
			><Icons name="facebook" classList="h-5" /></a
		>
	</div>
</section>
