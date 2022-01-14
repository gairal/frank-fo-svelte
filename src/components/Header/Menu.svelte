<script lang="ts">
  import MenuIcon from "../icons/MenuIcon.svelte";
</script>

<button
  aria-label="menu"
  class="p-3 rounded-full hover:bg-purple-900 md:hidden"
  on:click
  type="button"
>
  <MenuIcon />
</button>
