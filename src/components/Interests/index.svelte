<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { interests, isMapReady, title, travels } from "../../stores";
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
  {#each $travels as travel}
    <span>
      {travel.place}
    </span>
  {:else}
    <progress />
  {/each}
</section>
