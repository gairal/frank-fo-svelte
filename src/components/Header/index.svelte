<script lang="ts">
  import { link, Router } from "svelte-routing";

  import { title } from "../../stores/appStore";
  import Menu from "./Menu.svelte";
  import More from "./More.svelte";
  import Nav from "./Nav.svelte";

  let expanded = false;

  const handleClick = () => {
    expanded = !expanded;
  };
</script>

<Router>
  <header
    class="relative w-full rounded-2xl mx-auto px-4 mb-4 sm:mb-6 md:mb-8 text-white border-4 border-purple-200 font-cursive border-neon"
  >
    <div class="h-20 flex items-center justify-between">
      <a
        class="md:flex-1 text-2xl sm:text-3xl md:text-4xl text-purple-200 text-neon"
        href="/"
        use:link>frank g.</a
      >
      <h1
        class="md:absolute md:inset-x-0 top-[4.6rem] md:top-[4.2rem] lg:top-[3.6rem] flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cursive text-neon text-white z-10"
      >
        {$title}
      </h1>
      <Nav class="hidden md:flex space-x-4 z-20" />
      <div>
        <Menu on:click={handleClick} />
        <More />
      </div>
    </div>
    {#if expanded}
      <Nav on:click={handleClick} class="flex flex-col md:hidden space-y-4" />
    {/if}
  </header>
</Router>

<style>
  a {
    animation: flicker 1.5s infinite alternate;
  }

  h1 {
    animation: pulsate 1.5s infinite alternate;
  }
</style>
