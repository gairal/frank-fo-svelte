<script lang="ts">
  import { Route, Router } from "svelte-routing";

  import Education from "./Education/index.svelte";
  import Interests from "./Interests/index.svelte";
  import Skills from "./Skills/index.svelte";
  import Work from "./Work/index.svelte";
  import { title } from "../stores/appStore";
  import Sunset from "./Sunset.svelte";
</script>

<h1
  class="absolute inset-x-0 top-10 sm:top-9 md:top-28 lg:top-24 flex justify-center text-4xl sm:text-5xl lg:text-7xl font-cursive text-neon text-white z-10"
>
  {$title}
</h1>
<main
  class="flex-1 w-full rounded-2xl font-sans text-white mx-auto overflow-y-auto border border-purple-200 border-neon"
>
  <Router>
    <Route path="/"><Work /></Route>
    <Route path="education"><Education /></Route>
    <Route path="skills"><Skills /></Route>
    <Route path="interests"><Interests /></Route>
  </Router>
</main>

<Sunset />

<style>
  h1 {
    animation: pulsate 1.5s infinite alternate;
  }
</style>
