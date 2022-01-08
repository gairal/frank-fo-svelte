<script lang="ts">
  import MenuIcon from "../icons/MenuIcon.svelte";

  export let handleClick: () => void;
</script>

<button
  aria-label="more"
  class="p-3 rounded-full hover:bg-purple-900 md:hidden"
  on:click={handleClick}
  type="button"
>
  <MenuIcon />
</button>
