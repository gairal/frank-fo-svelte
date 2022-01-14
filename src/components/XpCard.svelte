<script lang="ts">
  import { intlFormat } from "date-fns";

  import Card from "./Education/Card.svelte";
  import H2 from "./H2.svelte";

  export let dateIn: string;
  export let dateOut = "";
  export let description: string;
  export let img: string;
  export let name: string;
  export let place: string;
  export let title: string;

  let inDate: string;
  $: inDate = intlFormat(new Date(dateIn), {
    month: "numeric",
    year: "numeric",
  });

  let outDate: string;
  $: {
    if (dateOut) {
      outDate = intlFormat(new Date(dateOut), {
        month: "numeric",
        year: "numeric",
      });
    } else outDate = "current";
  }
</script>

<Card class="flex space-x-4 mb-4">
  <img class="rounded self-start" src="img/{img}" alt={name} />
  <div class="flex flex-col justify-between">
    <div>
      <H2>{title}</H2>
      <div class="flex space-x-2">
        <span class="px-2 rounded bg-pink-400 text-xs">{inDate}-{outDate}</span>
        <span class="px-2 rounded bg-pink-400 text-xs">{place}</span>
      </div>
    </div>
    <p>{description}</p>
  </div>
</Card>
