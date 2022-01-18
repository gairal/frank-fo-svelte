<script lang="ts">
  import { intlFormat } from "date-fns";
  import { backOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  import Card from "./Card.svelte";
  import H2 from "./H2.svelte";
  import FoldIcon from "./icons/FoldIcon.svelte";
  import UnfoldIcon from "./icons/UnfoldIcon.svelte";

  export let dateIn: string;
  export let dateOut = "";
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
    expanded = !expanded;
  };
</script>

<Card class="mb-2 sm:mb-4 w-full hover:bg-pink-500 transition-colors">
  <button
    class:cursor-default={!$$slots.default}
    class="flex space-x-4 w-full text-left"
    on:click={$$slots.default ? handleClick : undefined}
    type="button"
  >
    <img class="rounded" src="img/{img}" alt={name} />
    <div class="flex flex-col items-start flex-1">
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

    {#if $$slots.default}
      <div class="hidden sm:block self-center">
        {#if expanded}
          <FoldIcon class="w-12" />
        {:else}
          <UnfoldIcon class="w-12" />
        {/if}
      </div>
    {/if}
  </button>
  {#if $$slots.default}
    {#if expanded}
      <div
        class="font-mono text-sm"
        transition:slide={{ duration: 500, easing: backOut }}
      >
        <slot />
      </div>
    {/if}
  {/if}
</Card>
