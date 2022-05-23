<script>
	const projects = [
		{
			name: 'Project name',
			url: '#!',
			image: '/images/project.png'
		},
		{
			name: 'Project name',
			url: '#!',
			image: '/images/project.png'
		},
		{
			name: 'Project name',
			url: '#!',
			image: '/images/project.png'
		},
		{
			name: 'Project name',
			url: '#!',
			image: '/images/project.png'
		},
		{
			name: 'Project name',
			url: '#!',
			image: '/images/project.png'
		},
		{
			name: 'Project name',
			url: '#!',
			image: '/images/project.png'
		}
	];
</script>

<section class="bg-light-gray pt-16 pb-24 xl:py-24">
	<div class="max-w-1200 px-4 ">
		<h2 class="section-title text-center">RECENT WORKS</h2>

		<div
			class="pt-10 space-y-6 md:space-y-0 md:grid grid-cols-2 lg:pt-16 lg:grid-cols-3 gap-10 lg:gap-12"
		>
			{#each projects as item}
				<div class="h-[28rem] overflow-hidden group relative rounded">
					<a href={item.url}>
						<!-- icon -->
						<img src={item.image} alt="" class="h-full w-full object-cover object-center" />

						<!-- text -->
						<div
							class="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80 p-6 opacity-0 hover:opacity-100 transition ease-in-out duration-500 flex flex-col justify-end"
						>
							<!-- opacity-0 hover:opacity-100 -->
							<h4 class="text-2xl text-deep-blue font-bold">{item.name}</h4>

							<a
								href={item.url}
								class="text-deep-blue font-semibold mt-2 inline-block text-sm underline"
								>View details</a
							>
						</div>
					</a>
				</div>
			{/each}
		</div>

		<div class="flex justify-center items-center mt-16">
			<a
				href="#!"
				class="lg:text-lg text-blue font-bold px-6 py-2 border-2 border-blue rounded-full hover:bg-blue hover:text-white custom-transition"
				>See All Projects</a
			>
		</div>
	</div>
</section>
