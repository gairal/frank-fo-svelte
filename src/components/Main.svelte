<script lang="ts">
  import { Route, Router } from "svelte-routing";

  import Education from "./Education/index.svelte";
  import Interests from "./Interests/index.svelte";
  import Skills from "./Skills/index.svelte";
  import Work from "./Work/index.svelte";
  import { title } from "../stores/appStore";
</script>

<h1
  class="absolute inset-x-0 top-[5.7rem] md:top-24 flex justify-center text-4xl sm:text-5xl md:text-7xl font-cursive text-neon text-white z-10"
>
  {$title}
</h1>
<main
  class="flex-1 w-full rounded-2xl font-mono text-white mx-auto overflow-y-auto border border-purple-200 border-neon"
>
  <Router>
    <Route path="/"><Work /></Route>
    <Route path="education"><Education /></Route>
    <Route path="skills"><Skills /></Route>
    <Route path="interests"><Interests /></Route>
  </Router>
</main>

<style>
  h1 {
    animation: pulsate 1.5s infinite alternate;
  }
</style>
