<script lang="ts">
  import { Route } from "svelte-routing";

  import Education from "./Education/index.svelte";
  import Interests from "./Interests/index.svelte";
  import Skills from "./Skills/index.svelte";
  import Work from "./Work/index.svelte";
</script>

<main
  class="w-full rounded-2xl font-mono text-white mx-auto p-4 border-2 border-purple-200 border-neon"
>
  <Route path="/"><Work /></Route>
  <Route path="education" component={Education} />
  <Route path="skills"><Skills /></Route>
  <Route path="interests"><Interests /></Route>
</main>
