<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import Link from "./Link.svelte";

  let className: string;
  export { className as class };
  export let onClick: () => void = () => undefined;
</script>

<nav
  class={className}
  on:click={onClick}
  transition:slide={{ duration: 300, easing: quintOut }}
>
  <Link to="/">Work</Link>
  <Link to="education">Education</Link>
  <Link to="skills">Skills</Link>
  <Link to="interests">Interests</Link>
  <div />
</nav>
