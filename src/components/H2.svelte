<script lang="ts">
  let className = "";
  export { className as class };
</script>

<h2 class={`text-purple-200 font-bold ${className}`}><slot /></h2>
