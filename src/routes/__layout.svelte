<script>
	import Footer from '../components/global/Footer.svelte';
	import Header from '../components/global/Header.svelte';
	import '../css/app.css';

	export const prerender = true;
</script>

<div>
	<Header />

	<slot />

	<Footer />
</div>
