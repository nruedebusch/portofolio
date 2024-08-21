<script>
  export let text = "Contact me";
  export let className = "";
  export let href = "/";
  export let target = "";
</script>

<a
  {href}
  {target}
  class="relative inline-flex h-fit w-fit rounded-full border border-violet-100/20 bg-violet-200/10 px-4 py-2 text-violet-200 outline-none ring-fuchsia-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-fuchsia-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-fuchsia-200/40 hover:text-fuchsia-300 after:hover:bg-opacity-15 focus:ring-2 {className}"
>
  {text}
</a>
