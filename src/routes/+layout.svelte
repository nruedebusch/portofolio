<script>
  import "../app.css";

  import posthog from "posthog-js";
  import { browser } from "$app/environment";
  import { beforeNavigate, afterNavigate } from "$app/navigation";

  if (browser) {
    beforeNavigate(() => posthog.capture("$pageleave"));
    afterNavigate(() => posthog.capture("$pageview"));
  }
</script>

<svelte:head>
  <title>Niklas Rüdebusch | Frontend Developer - Modern Web Solutions</title>
  <meta
    name="description"
    content="Crafting modern web solutions with Sveltekit, Tailwind, and Firebase. Explore my portfolio to see how I bring ideas to life through clean, efficient code."
  />
  <link rel="preload" as="image" href="/assets/hero.webp" type="image/webp" />
  <link
    rel="preload"
    as="font"
    href="/fonts/DMSANS-Regular.woff2"
    type="font/woff2"
  />
  <link
    rel="preload"
    as="font"
    href="/fonts/DMSANS-Bold.woff2"
    type="font/woff2"
  />
  <link
    rel="preload"
    as="font"
    href="/fonts/DMSANS-Italic.woff2"
    type="font/woff2"
  />
  <link
    rel="preload"
    as="font"
    href="/fonts/DMSANS-Medium.woff2"
    type="font/woff2"
  />
</svelte:head>

<slot />
