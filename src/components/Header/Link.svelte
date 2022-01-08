<script lang="ts">
  import { Link } from "svelte-routing";
  import type { GetPropsParams } from "svelte-routing/types/Link";

  export let to: string;

  const handleGetProps = ({ isCurrent }: GetPropsParams) => ({
    class: `flex justify-center item-center p-3 rounded-xl bg-purple-900 nav-link${
      isCurrent ? " nav-link--active" : ""
    }`,
  });
</script>

<Link {to} getProps={handleGetProps}><slot /></Link>
