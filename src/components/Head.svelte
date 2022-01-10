<script lang="ts">
  import { title } from "../stores";

  let pageTitle: string;
  $: {
    pageTitle = $title ? `Frank Gairal \u2014 ${$title}` : "Frank Gairal";
    document.title = pageTitle;
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>
