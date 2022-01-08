<script lang="ts">
  import { onMount } from "svelte";

  import { title } from "../stores";

  onMount(() => {
    title.set("Education");
  });
</script>

<div>EDUT</div>
