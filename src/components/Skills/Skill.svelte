<script lang="ts">
  import type { SkillByCategory } from "../../types";
  import Card from "../Education/Card.svelte";
  import H2 from "../H2.svelte";

  export let category: SkillByCategory;
</script>

<Card class="inline-block w-full mb-4">
  <H2 class="text-xl">{category.label}</H2>
  <ul>
    {#each category.skills as skill (skill.label)}
      <li
        class="relative border-l-2 border-l-pink-300 mb-2 opacity-60 hover:opacity-100"
      >
        {#if skill.level}
          <div
            class="absolute h-full bg-pink-500"
            style={`width: ${skill.level}%;`}
          />
        {/if}
        <p class="relative inline-block p-2 z-10">
          <span class="block">{skill.label}</span>
          {#if skill.description}
            <span class="block text-xs">{skill.description}</span>
          {/if}
        </p>
      </li>
    {/each}
  </ul>
</Card>
