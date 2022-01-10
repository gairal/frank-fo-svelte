<script lang="ts">
  import { onMount } from "svelte";

  import { API_URL } from "../../constants";
  import { education, title } from "../../stores";

  onMount(() => {
    title.set("Education");

    if (!$education.length) {
      const url = new URL("educations", API_URL);
      fetch(url.href)
        .then((response) => response.json())
        .then((data) => {
          education.set(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  });
</script>

{#each $education as edu}
  <div>
    {edu.name}
  </div>
{/each}
