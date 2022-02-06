<script lang="ts">
  import CookieConsent from "./components/CookieConsent.svelte";
  import Head from "./components/Head.svelte";
  import Header from "./components/Header/index.svelte";
  import Main from "./components/Main.svelte";
</script>

<Head />
<Header />
<Main />
<CookieConsent />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
