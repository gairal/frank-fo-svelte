<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { interests, title, travels } from "../../stores";

  onMount(() => {
    title.set("Interests");

    if (!$travels.length) {
      Promise.all([
        fetchData("interests", interests),
        fetchData("travels", travels),
      ]);
    }
  });
</script>

{#each $travels as travel}
  <div>
    {travel.place}
  </div>
{:else}
  <progress />
{/each}
