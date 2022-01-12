<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { title, works } from "../../stores";
  import XpCard from "../XpCard.svelte";

  onMount(() => {
    title.set("Work");

    if (!$works.length) {
      fetchData("works", works);
    }
  });
</script>

<section class="p-4">
  {#each $works as work}
    <XpCard
      dateIn={work.dateIn}
      dateOut={work.dateOut}
      description={work.description}
      img={work.image}
      name={work.name}
      place={work.place}
      title={work.title}
    />
  {:else}
    <progress />
  {/each}
</section>
