<script lang="ts">
  import { Route } from "svelte-routing";

  import Education from "./Education.svelte";
  import Work from "./Work.svelte";
</script>

<main
  class="w-full rounded-2xl text-white mx-auto p-4 border-2 border-purple-200 border-neon"
>
  <Route path="education" component={Education} />
  <Route path="/"><Work /></Route>
</main>
