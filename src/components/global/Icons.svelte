<script>
	export let name = '';
	export let classList = '';
</script>

<div>
	{#if name === 'menu'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 {classList}"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	{/if}

	{#if name === 'facebook'}
		<svg
			class={classList}
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 320 512"
			><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
				d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
			/></svg
		>
	{/if}
</div>
