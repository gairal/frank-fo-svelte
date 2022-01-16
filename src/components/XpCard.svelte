<script lang="ts">
  import { intlFormat } from "date-fns";
  import { backOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  import Card from "./Card.svelte";
  import H2 from "./H2.svelte";

  export let dateIn: string;
  export let dateOut = "";
  export let description = "";
  export let headline: string;
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

  let expanded = false;
  const handleClick = () => {
    if (!description) {
      return;
    }

    expanded = !expanded;
  };
</script>

<Card class="mb-4 w-full hover:bg-pink-500 transition-colors">
  <button
    class:cursor-default={!description}
    class="flex space-x-4 w-full text-left"
    on:click={handleClick}
    type="button"
  >
    <img class="rounded" src="img/{img}" alt={name} />
    <div class="flex flex-col items-start">
      <div class="flex flex-col flex-1">
        <H2>{title}</H2>
        <div class="flex space-x-2 mb-3">
          <span class="px-2 rounded bg-pink-500 text-xs"
            >{inDate} - {outDate}</span
          >
          <span class="px-2 rounded bg-pink-500 text-xs">{place}</span>
        </div>
      </div>
      <p>{headline}</p>
    </div>
  </button>
  {#if description}
    {#if expanded}
      <p
        class="pt-2 italic font-mono"
        transition:slide={{ duration: 500, easing: backOut }}
      >
        {@html description}
      </p>
    {/if}
  {/if}
</Card>
