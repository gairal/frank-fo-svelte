<script lang="ts">
  import Head from "./components/Head.svelte";
  import Header from "./components/Header/index.svelte";
  import Main from "./components/Main.svelte";
</script>

<Head />
<Header />
<Main />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
