<script lang="ts">
  let className = "";
  export { className as class };
</script>

<h2 class={`text-pink-50 font-bold mb-2 ${className}`}><slot /></h2>
