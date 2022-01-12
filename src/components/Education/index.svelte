<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { educations, title } from "../../stores";

  onMount(() => {
    title.set("Education");

    if (!$educations.length) {
      fetchData("educations", educations);
    }
  });
</script>

<p>interest</p>
{#each $educations as edu}
  <section class="shadow p-2 rounded flex space-x-2">
    <img class="rounded" src="img/{edu.image}" alt={edu.name} />
    <div class="flex flex-col justify-between">
      <h3>{edu.name} | {edu.shortDescription}</h3>
      <div class="flex space-x-2">
        <span class="px-2 rounded bg-pink-400">{edu.dateIn}-{edu.dateOut}</span
        ><span class="px-2 rounded bg-pink-400">{edu.place}</span>
      </div>
      <p>{edu.diploma}</p>
    </div>
  </section>
{:else}
  <progress />
{/each}
