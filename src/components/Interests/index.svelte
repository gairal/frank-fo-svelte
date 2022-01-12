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

{#if $isMapReady}<Map />{/if}
<section class="p-4">
  {#each $travels as travel (travel.place)}
    <span>
      {travel.place}
    </span>
  {:else}
    <Loader />
  {/each}
</section>
