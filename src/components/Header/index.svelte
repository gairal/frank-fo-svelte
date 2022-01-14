<script lang="ts">
  import Menu from "./Menu.svelte";
  import More from "./More.svelte";
  import Nav from "./Nav.svelte";

  let expanded = false;

  const handleClick = () => {
    expanded = !expanded;
  };
</script>

<header
  class="relative w-full rounded-2xl mx-auto px-4 mb-4 sm:mb-6 md:mb-8 text-white border-4 border-purple-200 font-cursive border-neon"
>
  <div class="h-20 flex items-center">
    <p
      role="heading"
      class="text-2xl sm:text-3xl md:text-4xl flex-1 text-purple-200 text-neon"
    >
      frank g.
    </p>
    <Nav class="hidden md:flex space-x-4 z-10" />
    <Menu on:click={handleClick} />
    <More />
  </div>
  {#if expanded}
    <Nav on:click={handleClick} class="flex flex-col md:hidden space-y-4" />
  {/if}
</header>

<style>
  p {
    animation: flicker 1.5s infinite alternate;
  }
</style>
