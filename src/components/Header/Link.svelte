<script lang="ts">
  import { Link } from "svelte-routing";
  import type { GetPropsParams } from "svelte-routing/types/Link";

  export let to: string;

  const getProps = ({ isCurrent }: GetPropsParams) => ({
    class: `flex justify-center item-center p-3 rounded-xl bg-purple-900 uppercase text-xs nav-link${
      isCurrent ? " nav-link--active" : ""
    }`,
  });
</script>

<Link {to} {getProps}><slot /></Link>
