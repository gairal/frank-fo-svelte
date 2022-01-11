<script lang="ts">
  import { Route } from "svelte-routing";

  import Education from "./Education/index.svelte";
  import Interests from "./Interests/index.svelte";
  import Skills from "./Skills/index.svelte";
  import Work from "./Work/index.svelte";
  import { title } from "../stores";
</script>

<h2
  class="flex justify-center text-2xl md:text-3xl text-neon font-cursive uppercase text-white"
>
  {$title}
</h2>
<main
  class="flex-1 w-full rounded-2xl font-mono text-white mx-auto p-4 overflow-y-auto border-2 border-purple-200 border-neon"
>
  <Route path="/"><Work /></Route>
  <Route path="education" component={Education} />
  <Route path="skills"><Skills /></Route>
  <Route path="interests"><Interests /></Route>
</main>
