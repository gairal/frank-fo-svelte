<script lang="ts">
  import Link from "./Link.svelte";
  import More from "./More.svelte";
</script>

<header
  class="w-full h-24 rounded-2xl mx-auto mb-8 flex items-center px-8 text-white border-4 border-purple-200 font-cursive border-neon"
>
  <h1 class="text-5xl flex-1 text-neon">work</h1>
  <nav class="flex space-x-4 mr-2">
    <Link href="/">Work</Link>
    <Link href="education">Education</Link>
    <Link href="skill">Skills</Link>
    <Link href="interests">Interests</Link>
  </nav>
  <More />
</header>
