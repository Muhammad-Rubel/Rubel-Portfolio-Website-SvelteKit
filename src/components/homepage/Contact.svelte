<script>
	import Icons from '../global/Icons.svelte';
</script>

<section class="bg-light-gray pt-16 pb-24">
	<div class="max-w-1200 px-4">
		<h2 class="section-title text-center">CONTACT INFORMATION</h2>

		<div class="mt-10 md:grid grid-cols-2 gap-x-6 lg:gap-x-16">
			<!-- details -->
			<div class="">
				<div class="text-deep-blue mt-6">
					<address class="not-italic space-y-3">
						<!-- location -->
						<div class="grid grid-cols-12 gap-x-2">
							<div class="pt-1">
								<Icons name="location" classList="h-5" />
							</div>

							<span class="col-start-2 col-end-13"
								>Address: H-75, Kha-para Road (Tongi West Thana Road), Tongi, Gazipur-1712,
								Bangladesh.</span
							>
						</div>

						<!-- phone -->
						<div class="grid grid-cols-12 gap-x-2">
							<div class="pt-1">
								<Icons name="phone" classList="h-4" />
							</div>

							<span class="col-start-2 col-end-13">Phone: +88 01921 611 688</span>
						</div>

						<!-- whatsapp -->
						<div class="grid grid-cols-12 gap-x-2">
							<div class="pt-1">
								<Icons name="whatsapp" classList="h-5" />
							</div>

							<span class="col-start-2 col-end-13">Whatsapp: +88 01921 611 688</span>
						</div>

						<!-- skype -->
						<div class="grid grid-cols-12 gap-x-2">
							<div class="pt-1">
								<Icons name="skype" classList="h-5" />
							</div>

							<span class="col-start-2 col-end-13">Skype: live:rubelsdl88</span>
						</div>
					</address>
				</div>
			</div>

			<!-- mail -->
			<div class="mt-12 space-y-6 md:mt-0">
				<div>
					<label for="name" class="text-sm">Name</label>
					<input
						id="name"
						type="text"
						placeholder="Your name"
						class="bg-white w-full rounded px-4 py-2"
					/>
				</div>

				<div>
					<label for="email" class="text-sm">Email</label>
					<input
						id="email"
						type="text"
						placeholder="Your email"
						class="bg-white w-full rounded px-4 py-2"
					/>
				</div>

				<div>
					<label for="message" class="text-sm">Message</label>
					<textarea name="message" id="" class="bg-white h-32 w-full rounded px-4 py-2" />
				</div>

				<button
					class="mt-8 lg:text-lg text-light-green font-bold px-6 py-2 border-2 border-light-green rounded-full hover:bg-light-green hover:text-white custom-transition"
					>Send now</button
				>
			</div>
		</div>
	</div>
</section>
