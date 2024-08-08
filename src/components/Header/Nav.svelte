<script lang="ts">
import { quintInOut as easing } from "svelte/easing";
import { slide } from "svelte/transition";

import Link from "./Link.svelte";

let className: string;
export { className as class };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class={className} on:click transition:slide={{ duration: 300, easing }}>
  <Link to="/">Work</Link>
  <Link to="education">Education</Link>
  <Link to="skills">Skills</Link>
  <Link to="interests">Interests</Link>
  <div />
</nav>
