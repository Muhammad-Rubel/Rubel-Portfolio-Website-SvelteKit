<script>
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const items = [
		{
			name: 'Syself',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit odio phasellus urna iaculis erat pretium gravida massa. Lacus, quis eu id nunc ac. At condimentum cursus sit vivamus et ut. Dignissim ultrices dignissim nisl, in nec. Proin adipiscing purus vel imperdiet sed ac duis sed feugiat. Massa est faucibus hendrerit molestie gravida suspendisse praesent sit. Facilisi pulvinar quam amet volutpat risus vulputate ultrices imperdiet.',
			image: '/images/client.png'
		},
		{
			name: 'Syself',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit odio phasellus urna iaculis erat pretium gravida massa. Lacus, quis eu id nunc ac. At condimentum cursus sit vivamus et ut. Dignissim ultrices dignissim nisl, in nec. Proin adipiscing purus vel imperdiet sed ac duis sed feugiat. Massa est faucibus hendrerit molestie gravida suspendisse praesent sit. Facilisi pulvinar quam amet volutpat risus vulputate ultrices imperdiet.',
			image: '/images/client.png'
		},
		{
			name: 'Syself',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit odio phasellus urna iaculis erat pretium gravida massa. Lacus, quis eu id nunc ac. At condimentum cursus sit vivamus et ut. Dignissim ultrices dignissim nisl, in nec. Proin adipiscing purus vel imperdiet sed ac duis sed feugiat. Massa est faucibus hendrerit molestie gravida suspendisse praesent sit. Facilisi pulvinar quam amet volutpat risus vulputate ultrices imperdiet.',
			image: '/images/client.png'
		}
	];

	const options = {
		type: 'loop',
		pagination: false
	};
</script>

<section class="max-w-1200 px-4 pt-16 pb-24 xl:py-24">
	<h2 class="section-title text-center">CLIENT SAY’S</h2>

	<div class="pt-16">
		<Splide {options}>
			{#each items as item}
				<SplideSlide>
					<div class="md:w-8/12 mx-auto">
						<div class="flex flex-col justify-center items-center">
							<!-- image -->
							<div class="h-40 w-40 border-2 border-blue rounded-full overflow-hidden">
								<img src={item.image} alt="" class="h-full w-full object-cover object-center" />
							</div>

							<!-- text -->
							<div class="mt-8">
								<h4 class="text-2xl text-deep-blue font-bold text-center">{item.name}</h4>
								<p class="text-deep-blue text-lg text-center mt-6">{item.details}</p>
							</div>
						</div>
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>
