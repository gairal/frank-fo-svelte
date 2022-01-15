<script lang="ts">
  let className = "";
  export { className as class };
</script>

<div class={`p-2 rounded hover:bg-pink-500 transition-colors ${className}`}>
  <slot />
</div>
