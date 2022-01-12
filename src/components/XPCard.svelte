<script lang="ts">
  import { intlFormat } from "date-fns";

  export let dateIn: string;
  export let dateOut: string;
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
  $: outDate = intlFormat(new Date(dateOut), {
    month: "numeric",
    year: "numeric",
  });
</script>

<div
  class="p-2 mb-4 rounded flex space-x-4 shadow-md hover:shadow-xl border border-pink-400"
>
  <img class="rounded self-start" src="img/{img}" alt={name} />
  <div class="flex flex-col justify-between">
    <div>
      <h3 class="font-bold text-sm">{title}</h3>
      <div class="flex space-x-2">
        <span class="px-2 rounded bg-pink-400 text-xs">{inDate}-{outDate}</span
        ><span class="px-2 rounded bg-pink-400 text-xs">{place}</span>
      </div>
    </div>
    <p>{description}</p>
  </div>
</div>
