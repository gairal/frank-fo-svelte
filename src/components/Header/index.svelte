<script lang="ts">
  import Menu from "./Menu.svelte";
  import More from "./More.svelte";
  import { title } from "../../stores";
  import Nav from "./Nav.svelte";

  let expanded = false;

  const handleClick = () => {
    expanded = !expanded;
  };
</script>

<header
  class="relative w-full rounded-2xl mx-auto mb-8 px-4 text-white border-4 border-purple-200 font-cursive border-neon"
>
  <span class="absolute left-10 text-neon text-purple-200 bg-purple-900"
    >frank g.</span
  >
  <div class="h-24 flex items-center">
    <h1 class="text-3xl md:text-4xl flex-1 uppercase text-neon">{$title}</h1>
    <Nav class="hidden md:flex space-x-4" />
    <Menu {handleClick} />
    <More />
  </div>
  {#if expanded}
    <Nav class="flex flex-col md:hidden space-y-4" />
  {/if}
</header>

<style>
  span {
    top: -1rem;
  }
</style>
