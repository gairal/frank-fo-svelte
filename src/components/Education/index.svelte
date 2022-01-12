<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { educations, title } from "../../stores";
  import XPCard from "../XPCard.svelte";

  onMount(() => {
    title.set("Education");

    if (!$educations.length) {
      fetchData("educations", educations);
    }
  });
</script>

<section class="p-4">
  {#each $educations as edu}
    <XPCard
      dateIn={edu.dateIn}
      dateOut={edu.dateOut}
      description={edu.diploma}
      img={edu.image}
      name={edu.name}
      place={edu.place}
      title={`${edu.name} | ${edu.shortDescription}`}
    />
  {:else}
    <progress />
  {/each}
</section>
