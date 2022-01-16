<script lang="ts">
  import { onMount } from "svelte";

  import { travels } from "../stores/apiStore";

  let container: HTMLDivElement;
  let map: google.maps.Map;
  onMount(() => {
    map = new window.google.maps.Map(container, {
      backgroundColor: "#5271ff",
      center: { lat: 48.856149, lng: 2.3386383 },
      clickableIcons: false,
      disableDefaultUI: true,
      gestureHandling: "none",
      mapId: "2c0abd81847fd58d",
      zoom: 8,
    });
  });

  const travel = (index = 0) => {
    const { place, coordinates } = $travels[index] ?? {};
    if (!place) {
      return;
    }

    const position = new google.maps.LatLng({
      lat: coordinates.latitude,
      lng: coordinates.longitude,
    });
    // eslint-disable-next-line no-new
    new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      map,
      position,
      title: place,
    });

    map.setCenter(position);

    setTimeout(() => travel(index + 1), 2000);
  };

  $: if (map && $travels.length) {
    travel();
  }
</script>

<div class="w-full h-1/3" bind:this={container} />
