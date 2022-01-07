<script lang="ts">
  import { link } from "svelte-routing";

  import More from "./More.svelte";
</script>

<header
  class="w-full h-24 rounded-2xl mx-auto mb-8 flex items-center px-8 font-cursive text-white border-4 border-purple-200 border-neon"
>
  <h1 class="text-5xl text-neon flex-1">work</h1>
  <nav>
    <a class="neu-button" href="/" use:link>Work</a>
    <a class="neu-button" href="education" use:link>Education</a>
  </nav>
  <More />
</header>

<style>
  .neu-button {
  }
</style>
