<script lang="ts">
  import { fade } from "svelte/transition";
  import ClickOutside from "svelte-click-outside/src/index.svelte";

  import BuildIcon from "../icons/BuildIcon.svelte";
  import EmailIcon from "../icons/EmailIcon.svelte";
  import LinkIcon from "../icons/LinkIcon.svelte";
  import MoreIcon from "../icons/MoreIcon.svelte";
  import ResumeIcon from "../icons/ResumeIcon.svelte";

  let showMore = false;
  let button;

  const toggleMore = () => {
    showMore = !showMore;
  };
</script>

<button
  aria-label="more"
  bind:this={button}
  class="p-3 rounded-full hover:bg-pink-500 z-20"
  type="button"
  on:click={toggleMore}
>
  <MoreIcon />
</button>

{#if showMore}
  <ClickOutside exclude={[button]} on:clickoutside={toggleMore}>
    <ul
      class="absolute px-4 py-2 bg-indigo-900 border-neon top-16 right-5 z-20"
      transition:fade={{ duration: 200 }}
    >
      <li class="hover:text-pink-500">
        <a
          class="flex w-full p-3 justify-between"
          href="mailto:frank@gairal.com"
          rel="noopener noreferrer"
          title="frank@gairal.com"
          target="_blank"
          tabindex="0"
          ><EmailIcon class="fill-current" fill="" /><span class="ml-2"
            >frank@gairal.com</span
          ></a
        >
      </li>
      <li class="hover:text-pink-500">
        <a
          class="flex w-full p-3 justify-between"
          href="https://linkedin.com/in/gairal"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          tabindex="-1"><LinkIcon class="fill-current" fill="" />LinkedIn</a
        >
      </li>
      <li class="hover:text-pink-500">
        <a
          class="flex w-full p-3 justify-between"
          href="/pdf/frank.gairal.pdf"
          download=""
          target="_blank"
          rel="noopener noreferrer"
          title="CV"
          tabindex="-1"><ResumeIcon class="fill-current" fill="" />resume.pdf</a
        >
      </li>
      <li
        class="flex w-full p-3 justify-between hover:text-pink-500 border-t border-t-pink-500"
      >
        <BuildIcon class="fill-current" fill="" />v5.0.0-svelte
      </li>
    </ul></ClickOutside
  >
{/if}
