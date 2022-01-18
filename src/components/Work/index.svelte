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

<section class="p-2 sm:p-4 pb-0" class:h-full={!$works.length}>
  {#each $works as { achievements, company, dateIn, dateOut, description, image, place, title } (`${company}-${dateIn}`)}
    <XpCard
      {dateIn}
      {dateOut}
      headline={description}
      img={image}
      name={company}
      {place}
      {title}
    >
      <ul class="pt-2">
        {#each achievements as achievement (achievement.description)}
          <li
            class="border border-l-2 rounded-r-sm border-transparent border-l-pink-300 hover:border-pink-300 p-1 mt-3"
          >
            {achievement.description}
            {#if achievement.highlights?.length}
              <ul class="pl-2">
                {#each achievement.highlights as highlight}
                  <li
                    class="border border-l-2 rounded-r-sm border-transparent border-l-pink-400 hover:border-pink-400 px-1 mt-2"
                  >
                    {highlight}
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </XpCard>
  {:else}
    <Loader />
  {/each}
</section>
