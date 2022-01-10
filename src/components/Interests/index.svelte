<script lang="ts">
  import { onMount } from "svelte";

  import { title } from "../../stores";

  onMount(() => {
    title.set("Interests");
  });
</script>

<div>INTERES</div>
