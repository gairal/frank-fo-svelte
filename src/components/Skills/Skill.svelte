<script lang="ts">
import type { SkillByCategory } from "../../types";
import Card from "../Card.svelte";
import H2 from "../H2.svelte";
import Progress from "./Progress.svelte";

export let category: SkillByCategory;
</script>

<Card class="inline-block w-full">
  <H2 class="mb-2">{category.label}</H2>
  <ul>
    {#each category.skills as { description, label, level } (label)}
      <li
        class="relative border-l-2 border-l-purple-300 mb-2 lg:opacity-60 hover:opacity-100"
      >
        {#if level}
          <Progress {level} />
        {/if}
        <p class="relative inline-block p-2 z-10">
          <span class="block">{label}</span>
          {#if description}
            <span class="block text-xs">{description}</span>
          {/if}
        </p>
      </li>
    {/each}
  </ul>
</Card>
