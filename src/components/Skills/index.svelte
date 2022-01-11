<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { skills, title } from "../../stores";

  onMount(() => {
    title.set("Skills");

    if (!$skills.length) {
      fetchData("skills", skills);
    }
  });
</script>

{#each $skills as skill}
  <div>
    {skill.label}
  </div>
{:else}
  <progress />
{/each}
