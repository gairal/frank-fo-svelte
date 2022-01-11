<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { title, works } from "../../stores";

  onMount(() => {
    title.set("Work");

    if (!$works.length) {
      fetchData("works", works);
    }
  });
</script>

{#each $works as work}
  <section>
    {work.name}
  </section>
{:else}
  <progress />
{/each}
