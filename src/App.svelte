<script>
	export let name;
	import Mastiff from './Components/Masthead.svelte';
	import Footer from './Components/Footer.svelte';
import Masthead from './Components/Masthead.svelte';
</script>

<main>
	<head>
		<meta charset="UTF-8">
	</head>
	
	<div class="pb-1"><Masthead/></div>

	<footer class="pt-6 text-center"><Footer/></footer>
</main>

<style global>
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
 @font-face {
  font-family: "Dalton";
  src: url("/font/DaltonMarine.ttf");

  font-family: "Warp";
  src: url("/font/warp.otf");
}
</style>