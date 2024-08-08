<script lang="ts">
import { quartOut as easing } from "svelte/easing";

export let level: number;

const expand = (
  node: Element,
  { duration, width }: { duration: number; width: number },
) => ({
  css: (t: number) => `width: ${width * t}%;`,
  duration,
  easing,
});
</script>

<div
  class="absolute h-full bg-pink-500 rounded-r-sm transition-all ease-in-out delay-1000"
  style={`width: ${level}%;`}
  in:expand={{ duration: level * 10, width: level }}
/>
