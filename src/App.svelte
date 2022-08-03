<script>
	export let name;
	import { fade, fly } from 'svelte/transition';
	import Navbar from './Components/Navbar.svelte';
	import Footer from './Components/Footer.svelte';
import Masthead from './Components/Masthead.svelte';

let windowY;
let navWidth;
</script>
<svelte:window bind:scrollY={windowY}/>
<main>
	<head>
		<meta charset="UTF-8">
	</head>
		{#if windowY >= navWidth}
		<div in:fade="{{ y: 200, duration: 2000 }}" out:fade>
		<Navbar />
		</div>
		{/if}
	<div class="pb-1"><Masthead/></div>

	<div bind:clientHeight={navWidth} class="min-h-screen flex flex-col items-center justify-center overflow-hidden ">
		{windowY}
	</div>
	
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
* {
  box-sizing: border-box;
}
body {
    overflow: overlay;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #000000a1;
  border-radius: 20px;
}

</style>