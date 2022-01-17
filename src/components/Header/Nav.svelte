<script lang="ts">
  import { slide } from "svelte/transition";
  import { backOut } from "svelte/easing";

  import Link from "./Link.svelte";

  let className: string;
  export { className as class };
</script>

<nav
  class={className}
  on:click
  transition:slide={{ duration: 300, easing: backOut }}
>
  <Link to="/">Work</Link>
  <Link to="education">Education</Link>
  <Link to="skills">Skills</Link>
  <Link to="interests">Interests</Link>
  <div />
</nav>
