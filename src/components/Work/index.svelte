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

<section class="p-4 pb-0" class:h-full={!$works.length}>
  {#each $works as work (`${work.company}-${work.dateIn}`)}
    <XpCard
      dateIn={work.dateIn}
      dateOut={work.dateOut}
      headline={work.description}
      img={work.image}
      name={work.company}
      place={work.place}
      title={work.title}
      >{#each work.achievements as achievement (achievement.description)}
        {achievement.description}
      {/each}</XpCard
    >
  {:else}
    <Loader />
  {/each}
</section>
