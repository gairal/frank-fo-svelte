<script lang="ts">
  import { Link } from "svelte-routing";
  import type { GetPropsParams } from "svelte-routing/types/Link";

  export let to: string;

  const getProps = ({ isCurrent }: GetPropsParams) => ({
    class: `flex justify-center items-center p-3 rounded-xl bg-indigo-900 nav-link${
      isCurrent ? " nav-link--active" : ""
    }`,
  });
</script>

<Link {to} {getProps}><slot /></Link>
