<script lang="ts">
  import { onMount } from "svelte";

  import { title } from "../../stores";

  onMount(() => {
    title.set("Skills");
  });
</script>

<div>SKILlS</div>
