<script lang="ts">
  let className = "";
  export { className as class };
</script>

<div
  class={`p-2 rounded shadow-md hover:shadow-lg border border-pink-500 ${className}`}
>
  <slot />
</div>
