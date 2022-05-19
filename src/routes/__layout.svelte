<script>
	import Footer from '../components/global/Footer.svelte';
	import Header from '../components/global/Header.svelte';
	import '../css/app.css';
</script>

<div>
	<Header />
	<p class="text-6xl text-red-900">Hello from layout</p>

	<slot />

	<Footer />
</div>
