<script lang="ts">
  import MoreIcon from "../icons/MoreIcon.svelte";

  let showMore = false;

  const toggleMore = () => {
    showMore = !showMore;
  };
</script>

<button
  aria-label="more"
  class="p-3 rounded-full hover:bg-purple-900"
  type="button"
  on:click={toggleMore}
>
  <MoreIcon />
</button>
{#if showMore}
  SHOW ME
{/if}
