<script lang="ts">
  let className = "";
  export { className as class };
</script>

<div class={`p-2 rounded ${className}`}>
  <slot />
</div>
