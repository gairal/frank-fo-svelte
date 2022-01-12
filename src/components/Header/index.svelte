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
  class="relative w-full rounded-2xl mx-auto px-4 md:mb-8 text-white border-4 border-purple-200 font-cursive border-neon"
>
  <div class="h-20 flex items-center">
    <h1 class="text-3xl md:text-4xl flex-1 text-purple-200 text-neon">
      frank g.
    </h1>
    <Nav class="hidden md:flex space-x-4 z-20" />
    <Menu on:click={handleClick} />
    <More />
  </div>
  {#if expanded}
    <Nav on:click={handleClick} class="flex flex-col md:hidden space-y-4" />
  {/if}
</header>
