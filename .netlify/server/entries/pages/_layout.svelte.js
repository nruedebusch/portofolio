import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1tae8dh_START -->${$$result.title = `<title>Niklas Rüdebusch | Web Developer from Münster</title>`, ""}<meta name="description" content="Crafting modern web solutions with state-of-the-art technologies. Explore my portfolio to see how I bring ideas to life through clean, efficient code."><link rel="preload" as="image" href="/assets/hero.webp" type="image/webp"><link rel="preload" as="font" href="/fonts/DMSANS-Regular.woff2" type="font/woff2"><link rel="preload" as="font" href="/fonts/DMSANS-Bold.woff2" type="font/woff2"><link rel="preload" as="font" href="/fonts/DMSANS-Italic.woff2" type="font/woff2"><link rel="preload" as="font" href="/fonts/DMSANS-Medium.woff2" type="font/woff2"><!-- HEAD_svelte-1tae8dh_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
