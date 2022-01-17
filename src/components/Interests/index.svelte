<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { interests, isMapReady, title, travels } from "../../stores/index";
  import Loader from "../Loader.svelte";
  import Map from "../Map.svelte";

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

<section class="h-full flex flex-col">
  {#if $isMapReady}<Map />{/if}
  <div class="flex-1 p-4 flex justify-center items-center">
    {#if $interests.length}
      <ul class="text-center font-semibold">
        {#each $interests as { description, label } (label)}
          <li title={description}>
            {label}
          </li>
        {/each}
        <li>...</li>
      </ul>
    {:else}
      <Loader />
    {/if}
  </div>
</section>
