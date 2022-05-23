<script>
	const services = [
		{
			title: 'CREATIVE DESIGN',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc, in elementum massa egestas. Enim pellentesque nunc nec pellentesque.',
			icon: '/images/services/1.svg'
		},
		{
			title: 'UNLIMITED FEATURES',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc, in elementum massa egestas. Enim pellentesque nunc nec pellentesque.',
			icon: '/images/services/2.svg'
		},
		{
			title: 'ULTRA RESPONSIVE',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc, in elementum massa egestas. Enim pellentesque nunc nec pellentesque.',
			icon: '/images/services/3.svg'
		},
		{
			title: 'CREATIVE IDEAS',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc, in elementum massa egestas. Enim pellentesque nunc nec pellentesque.',
			icon: '/images/services/4.svg'
		},
		{
			title: 'EASY CUSTOMIZATION',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc, in elementum massa egestas. Enim pellentesque nunc nec pellentesque.',
			icon: '/images/services/5.svg'
		},
		{
			title: 'SUPPER SUPPORT',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc, in elementum massa egestas. Enim pellentesque nunc nec pellentesque.',
			icon: '/images/services/6.svg'
		}
	];
</script>

<section class="max-w-1200 px-4 pt-16 pb-24 xl:py-24">
	<h2 class="section-title text-center">SERVICES AND SOLUTIONS</h2>

	<div
		class="pt-10 space-y-6 md:space-y-0 md:grid grid-cols-2 lg:pt-16 lg:grid-cols-3 gap-10 lg:gap-12"
	>
		{#each services as item}
			<div class="flex justify-start items-start">
				<!-- icon -->
				<div class="w-[20%] pr-5 pt-1.5">
					<img src={item.icon} alt="" />
				</div>

				<!-- text -->
				<div class="w-[80%]">
					<h3 class="sub-title-2">{item.title}</h3>
					<p class="text-deep-blue mt-2">{item.details}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
