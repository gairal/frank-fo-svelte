<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { educations, title } from "../../stores/index";
  import Loader from "../Loader.svelte";
  import XpCard from "../XpCard.svelte";

  onMount(() => {
    title.set("Education");

    if (!$educations.length) {
      fetchData("educations", educations);
    }
  });
</script>

<section class="h-full p-4">
  {#each $educations as edu (edu.name)}
    <XpCard
      dateIn={edu.dateIn}
      dateOut={edu.dateOut}
      description={edu.extra}
      headline={edu.diploma}
      img={edu.image}
      name={edu.name}
      place={edu.place}
      title={`${edu.name} | ${edu.shortDescription}`}
    />
  {:else}
    <Loader />
  {/each}
</section>
