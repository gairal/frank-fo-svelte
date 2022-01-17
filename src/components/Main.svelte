<script lang="ts">
  import { Route, Router } from "svelte-routing";

  import Education from "./Education/index.svelte";
  import Interests from "./Interests/index.svelte";
  import Skills from "./Skills/index.svelte";
  import Work from "./Work/index.svelte";
  import Sunset from "./Sunset.svelte";
</script>

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
