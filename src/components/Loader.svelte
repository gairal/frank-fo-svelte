<div class="h-full flex items-center"><div class="loader">Loading...</div></div>

<style>
  @keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  .loader,
  .loader:before,
  .loader:after {
    @apply bg-pink-300;
    animation: loading 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  .loader {
    @apply relative text-pink-300 text-xs;
    text-indent: -9999em;
    margin: 88px auto;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }

  .loader:before,
  .loader:after {
    @apply absolute top-0;
    content: "";
  }

  .loader:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  .loader:after {
    left: 1.5em;
  }
</style>
