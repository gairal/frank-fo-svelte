<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";

  import Link from "./Link.svelte";

  const dispatch = createEventDispatcher();

  let className: string;
  export { className as class };
</script>

<nav
  class={className}
  on:click={() => dispatch("click")}
  transition:slide={{ duration: 300, easing: quintOut }}
>
  <Link to="/">Work</Link>
  <Link to="education">Education</Link>
  <Link to="skills">Skills</Link>
  <Link to="interests">Interests</Link>
  <div />
</nav>
