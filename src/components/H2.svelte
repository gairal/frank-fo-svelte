<script lang="ts">
let className = "";
export { className as class };
</script>

<h2 class={`text-purple-200 text-xl font-bold ${className}`}><slot /></h2>
