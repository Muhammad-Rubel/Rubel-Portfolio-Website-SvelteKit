<script>
	const skills = [
		{
			name: 'HTML',
			value: 9
		},
		{
			name: 'CSS',
			value: 9
		},
		{
			name: 'JavaScript',
			value: 9
		},
		{
			name: 'Vue/Nuxt',
			value: 9
		},
		{
			name: 'Svelte/SvelteKit',
			value: 8
		},
		{
			name: 'React/Next',
			value: 7
		},
		{
			name: 'Tailwind CSS',
			value: 9
		},
		{
			name: 'Node/Express',
			value: 5
		}
	];
</script>

<section class="bg-light-gray pt-16 pb-24">
	<div class="max-w-1200 px-4 md:grid grid-cols-12">
		<div
			class="col-start-8 col-end-13 md:px-4 md:flex justify-center items-center lg:col-start-7 lg:col-end-13"
		>
			<img src="/images/skills.png" alt="" />
		</div>

		<!-- details -->
		<div class="mt-12 col-start-1 col-end-8 row-start-1 md:mt-0 lg:col-end-7 xl:pr-20">
			<h2 class="section-title">ABOUT ME</h2>

			<p class="leading-tight text-deep-blue mt-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet leo iaculis fames.
				Etiam imperdiet egestas eu quis. Aliquet aliquet varius nulla lacinia tellus, consectetur.
				Mauris ac nulla nisl porta.
			</p>

			<!-- skills -->
			<div class="mt-12">
				<h3 class="sub-title-1">SKILLS</h3>

				<div class="space-y-3 mt-6">
					{#each skills as skill}
						<div>
							<p class="font-medium text-light-green">{skill.name}</p>
							<div class="relative pt-2 bg-white rounded mt-1">
								<span
									class="absolute top-0 left-0 h-full bg-light-green rounded"
									style="width: {(100 * skill.value) / 10}%;"
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
