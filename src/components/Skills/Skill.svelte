<script lang="ts">
  import type { SkillByCategory } from "../../types";
  import Card from "../Education/Card.svelte";

  export let category: SkillByCategory;
</script>

<Card class="inline-block w-full mb-4">
  <p class="text-xl font-bold">{category.label}</p>
  <ul>
    {#each category.skills as skill (skill.label)}
      <li>{skill.label}</li>
    {/each}
  </ul>
</Card>
