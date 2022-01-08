<script>
  import { onMount } from "svelte";

  import { title } from "./stores";

  onMount(() => {
    title.set("Work");
  });
</script>

<div>WORK</div>
