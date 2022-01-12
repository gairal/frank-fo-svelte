<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { title, works } from "../../stores/index";
  import Loader from "../Loader.svelte";
  import XpCard from "../XpCard.svelte";

  onMount(() => {
    title.set("Work");

    if (!$works.length) {
      fetchData("works", works);
    }
  });
</script>

<section class="h-full p-4">
  {#each $works as work (work.name)}
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
    <Loader />
  {/each}
</section>
