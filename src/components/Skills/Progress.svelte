<script lang="ts">
  import { quartOut } from "svelte/easing";

  export let level: number;

  const expand = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    node: Element,
    { duration, width }: { duration: number; width: number }
  ) => ({
    css: (t: number) => `width: ${width * t}%;`,
    duration,
    easing: quartOut,
  });
</script>

<div
  class="absolute h-full bg-pink-700 rounded-r-sm transition-all ease-in-out delay-1000"
  style={`width: ${level}%;`}
  in:expand={{ duration: level * 10, width: level }}
/>
