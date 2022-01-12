<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { skills, title } from "../../stores";
  import Loader from "../Loader.svelte";

  onMount(() => {
    title.set("Skills");

    if (!$skills.length) {
      fetchData("skills", skills);
    }
  });
</script>

{#each $skills as skill (skill.label)}
  <section>
    {skill.label}
  </section>
{:else}
  <Loader />
{/each}
