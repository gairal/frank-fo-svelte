<script lang="ts">
  import Link from "./Link.svelte";
  import Menu from "./Menu.svelte";
  import More from "./More.svelte";
</script>

<header
  class="w-full h-24 rounded-2xl mx-auto mb-8 flex items-center px-4 text-white border-4 border-purple-200 font-cursive border-neon"
>
  <h1 class="text-5xl flex-1 uppercase text-neon">work</h1>
  <nav class="flex flex-col md:flex-row space-x-4 mr-2">
    <Link to="/">Work</Link>
    <Link to="education">Education</Link>
    <Link to="skills">Skills</Link>
    <Link to="interests">Interests</Link>
  </nav>
  <Menu />
  <More />
</header>
