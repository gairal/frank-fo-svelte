<script lang="ts">
  import { onMount } from "svelte";

  import { fetchData } from "../../fetch";
  import { skills, title } from "../../stores/index";
  import Loader from "../Loader.svelte";
  import Skill from "./Skill.svelte";

  onMount(() => {
    title.set("Skills");

    if (!$skills.length) {
      fetchData("skills", skills);
    }
  });
</script>

<section class="p-4 pb-0 columns-1 md:columns-2 xl:columns-3">
  {#each $skills as category (category.label)}
    <Skill {category} />
  {:else}
    <Loader />
  {/each}
</section>
