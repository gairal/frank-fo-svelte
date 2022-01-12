<script lang="ts">
  import { title } from "../stores/appStore";

  let pageTitle: string;
  $: {
    pageTitle = $title ? `Frank Gairal \u2014 ${$title}` : "Frank Gairal";
    document.title = pageTitle;
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVZYWskW77D4KBnltvWzEShaaiTUx3SwA&callback=initMap">
  </script>
</svelte:head>
