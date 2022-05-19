<script>
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
	<div class="flex flex-col justify-center items-center space-y-2">
		{#each navItems as item}
			<a
				href={item.link}
				class="text-xl px-4 py-1 font-semibold text-white hover:text-light-green custom-transition"
				>{item.name}</a
			>
		{/each}
	</div>
</section>
