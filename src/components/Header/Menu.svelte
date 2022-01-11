<script lang="ts">
  import MenuIcon from "../icons/MenuIcon.svelte";

  export let onClick: () => void;
</script>

<button
  aria-label="more"
  class="p-3 rounded-full hover:bg-purple-900 md:hidden"
  on:click={onClick}
  type="button"
>
  <MenuIcon />
</button>
