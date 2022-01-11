<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { educations, title } from "../../stores";

  onMount(() => {
    title.set("Education");

    if (!$educations.length) {
      fetchData("educations", educations);
    }
  });
</script>

{#each $educations as edu}
  <div>
    {edu.name}
  </div>
{:else}
  <progress />
{/each}
