<script lang="ts">
  import { link } from "svelte-routing";

  export let href: string;
</script>

<a
  class="flex justify-center item-center p-3 rounded-xl bg-purple-900"
  {href}
  use:link><slot /></a
>

<style>
  a {
    box-shadow: 5px 5px 10px #5d217b, -5px -5px 10px #7d2da7;
  }

  a:hover {
    background: linear-gradient(145deg, #622383, #752a9b);
    box-shadow: 5px 5px 10px #5d217b, -5px -5px 10px #7d2da7;
  }

  a:active {
    box-shadow: inset 5px 5px 10px #5d217b, inset -5px -5px 10px #7d2da7;
  }
</style>
