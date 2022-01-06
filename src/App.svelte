<script lang="ts">
  import { Router } from "svelte-routing";

  import Header from "./components/Header/index.svelte";
  import Main from "./components/Main.svelte";

  // export let url = "";
</script>

<Router>
  <Header />
  <Main />
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
