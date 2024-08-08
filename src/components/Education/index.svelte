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

<section class="p-2 sm:p-4 pb-0" class:h-full={!$educations.length}>
  {#each $educations as { dateIn, dateOut, diploma, extra, image, name, place, shortDescription } (name)}
    {#if extra}
      <XpCard
        {dateIn}
        {dateOut}
        headline={diploma}
        img={image}
        {name}
        {place}
        title={`${name} | ${shortDescription}`}
      >
        <p class="pt-4">{extra}</p>
      </XpCard>
    {:else}
      <XpCard
        {dateIn}
        {dateOut}
        headline={diploma}
        img={image}
        {name}
        {place}
        title={`${name} | ${shortDescription}`}
      />
    {/if}
  {:else}
    <Loader />
  {/each}
</section>
