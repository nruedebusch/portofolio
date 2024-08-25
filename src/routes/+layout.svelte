<script>
  import "../app.css";
  import "@fontsource-variable/dm-sans";
  import dmSansWoff2 from "@fontsource-variable/dm-sans/files/dm-sans-latin-400-normal.woff2?url";
</script>

<svelte:head>
  <title>Niklas Rüdebusch | Frontend Developer - Modern Web Solutions</title>
  <meta
    name="description"
    content="Crafting modern web solutions with Sveltekit, Tailwind, and Firebase. Explore my portfolio to see how I bring ideas to life through clean, efficient code."
  />
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={dmSansWoff2}
    crossorigin="anonymous"
  />
  <link rel="preload" as="image" href="/assets/hero.webp" type="image/webp" />
</svelte:head>

<slot />
