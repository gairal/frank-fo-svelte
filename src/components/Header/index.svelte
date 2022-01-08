<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import Link from "./Link.svelte";
  import Menu from "./Menu.svelte";
  import More from "./More.svelte";
  import { title } from "../stores";

  let expanded = false;

  const handleClick = () => (expanded = !expanded);
</script>

<header
  class="w-full rounded-2xl mx-auto mb-8 px-4 text-white border-4 border-purple-200 font-cursive border-neon"
>
  <div class="h-24 flex items-center">
    <h1 class="text-3xl md:text-4xl flex-1 uppercase text-neon">{$title}</h1>
    <nav class="hidden md:flex space-x-4 mr-2">
      <Link to="/">Work</Link>
      <Link to="education">Education</Link>
      <Link to="skills">Skills</Link>
      <Link to="interests">Interests</Link>
    </nav>
    <Menu {handleClick} />
    <More />
  </div>
  {#if expanded}
    <nav
      class="flex flex-col md:hidden space-y-4"
      transition:slide={{ duration: 300, easing: quintOut }}
    >
      <Link to="/">Work</Link>
      <Link to="education">Education</Link>
      <Link to="skills">Skills</Link>
      <Link to="interests">Interests</Link>
      <div />
    </nav>
  {/if}
</header>
