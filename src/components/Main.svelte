<script lang="ts">
  import { Route } from "svelte-routing";

  import Education from "./Education/index.svelte";
  import Interests from "./Interests/index.svelte";
  import Skills from "./Skills/index.svelte";
  import Work from "./Work/index.svelte";
  import { title } from "../stores";
</script>

<h2
  class="md:absolute inset-x-0 flex justify-center text-4xl md:top-24 md:text-7xl font-cursive text-neon text-white z-10"
>
  {$title}
</h2>
<main
  class="flex-1 w-full rounded-2xl font-mono text-white mx-auto overflow-y-auto border-2 border-purple-200 border-neon"
>
  <Route path="/"><Work /></Route>
  <Route path="education" component={Education} />
  <Route path="skills"><Skills /></Route>
  <Route path="interests"><Interests /></Route>
</main>

<style>
  h2 {
    animation: flicker 1.5s infinite alternate;
  }
</style>
