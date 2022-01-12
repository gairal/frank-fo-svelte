<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import MenuIcon from "../icons/MenuIcon.svelte";

  const dispatch = createEventDispatcher();
</script>

<button
  aria-label="more"
  class="p-3 rounded-full hover:bg-purple-900 md:hidden"
  on:click={() => dispatch("click")}
  type="button"
>
  <MenuIcon />
</button>
