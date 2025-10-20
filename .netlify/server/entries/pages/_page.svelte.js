import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_object, h as escape_attribute_value, e as escape, i as null_to_empty, j as add_attribute, v as validate_component, b as subscribe, k as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Bounded = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let combinedClasses;
  let $$restProps = compute_rest_props($$props, ["tag", "class"]);
  let { tag = "section" } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  combinedClasses = `px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24 ${className || ""}`.trim();
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(combinedClasses)
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `<div class="mx-auto flex w-full max-w-6xl flex-col items-center">${slots.default ? slots.default({}) : ``}</div>`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const css$2 = {
  code: ".size-full.svelte-977r95{width:100%;height:100%}",
  map: '{"version":3,"file":"Particles.svelte","sources":["Particles.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from \\"svelte\\";\\r\\n\\r\\n  export let className = \\"\\";\\r\\n  export let quantity = 700;\\r\\n  export let staticity = 50;\\r\\n  export let ease = 50;\\r\\n  export let size = 0.4;\\r\\n  export const refresh = true;\\r\\n  export let color = \\"#2955a5\\";\\r\\n  export let vx = 0;\\r\\n  export let vy = 0;\\r\\n\\r\\n  let canvasRef;\\r\\n  let canvasContainerRef;\\r\\n  let context = null;\\r\\n  let circles = [];\\r\\n  let mouse = { x: 0, y: 0 };\\r\\n  let canvasSize = { w: 0, h: 0 };\\r\\n  const dpr = typeof window !== \\"undefined\\" ? window.devicePixelRatio : 1;\\r\\n\\r\\n  function hexToRgb(hex) {\\r\\n    hex = hex.replace(\\"#\\", \\"\\");\\r\\n\\r\\n    if (hex.length === 3) {\\r\\n      hex = hex\\r\\n        .split(\\"\\")\\r\\n        .map((char) => char + char)\\r\\n        .join(\\"\\");\\r\\n    }\\r\\n\\r\\n    const hexInt = parseInt(hex, 16);\\r\\n    const red = (hexInt >> 16) & 255;\\r\\n    const green = (hexInt >> 8) & 255;\\r\\n    const blue = hexInt & 255;\\r\\n    return [red, green, blue];\\r\\n  }\\r\\n\\r\\n  const rgb = hexToRgb(color);\\r\\n\\r\\n  function circleParams() {\\r\\n    const x = Math.floor(Math.random() * canvasSize.w);\\r\\n    const y = Math.floor(Math.random() * canvasSize.h);\\r\\n    const translateX = 0;\\r\\n    const translateY = 0;\\r\\n    const pSize = Math.floor(Math.random() * 2) + size;\\r\\n    const alpha = 0;\\r\\n    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));\\r\\n    const dx = (Math.random() - 0.5) * 0.1;\\r\\n    const dy = (Math.random() - 0.5) * 0.1;\\r\\n    const magnetism = 0.1 + Math.random() * 4;\\r\\n    return {\\r\\n      x,\\r\\n      y,\\r\\n      translateX,\\r\\n      translateY,\\r\\n      size: pSize,\\r\\n      alpha,\\r\\n      targetAlpha,\\r\\n      dx,\\r\\n      dy,\\r\\n      magnetism,\\r\\n    };\\r\\n  }\\r\\n\\r\\n  function resizeCanvas() {\\r\\n    if (canvasContainerRef && canvasRef && context) {\\r\\n      circles.length = 0;\\r\\n      canvasSize.w = canvasContainerRef.offsetWidth;\\r\\n      canvasSize.h = canvasContainerRef.offsetHeight;\\r\\n      canvasRef.width = canvasSize.w * dpr;\\r\\n      canvasRef.height = canvasSize.h * dpr;\\r\\n      canvasRef.style.width = `${canvasSize.w}px`;\\r\\n      canvasRef.style.height = `${canvasSize.h}px`;\\r\\n      context.scale(dpr, dpr);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function clearContext() {\\r\\n    if (context) {\\r\\n      context.clearRect(0, 0, canvasSize.w, canvasSize.h);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function drawCircle(circle, update = false) {\\r\\n    if (context) {\\r\\n      const { x, y, translateX, translateY, size, alpha } = circle;\\r\\n      context.translate(translateX, translateY);\\r\\n      context.beginPath();\\r\\n      context.arc(x, y, size, 0, 2 * Math.PI);\\r\\n      context.fillStyle = `rgba(${rgb.join(\\", \\")}, ${alpha})`;\\r\\n      context.fill();\\r\\n      context.setTransform(dpr, 0, 0, dpr, 0, 0);\\r\\n\\r\\n      if (!update) {\\r\\n        circles.push(circle);\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function drawParticles() {\\r\\n    clearContext();\\r\\n    for (let i = 0; i < quantity; i++) {\\r\\n      const circle = circleParams();\\r\\n      drawCircle(circle);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function remapValue(value, start1, end1, start2, end2) {\\r\\n    let remapped =\\r\\n      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;\\r\\n    return remapped > 0 ? remapped : 0;\\r\\n  }\\r\\n\\r\\n  function animate() {\\r\\n    clearContext();\\r\\n    circles.forEach((circle, i) => {\\r\\n      const edge = [\\r\\n        circle.x + circle.translateX - circle.size,\\r\\n        canvasSize.w - circle.x - circle.translateX - circle.size,\\r\\n        circle.y + circle.translateY - circle.size,\\r\\n        canvasSize.h - circle.y - circle.translateY - circle.size,\\r\\n      ];\\r\\n      const closestEdge = edge.reduce((a, b) => Math.min(a, b));\\r\\n      const remapClosestEdge = parseFloat(\\r\\n        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)\\r\\n      );\\r\\n      if (remapClosestEdge > 1) {\\r\\n        circle.alpha += 0.02;\\r\\n        if (circle.alpha > circle.targetAlpha) {\\r\\n          circle.alpha = circle.targetAlpha;\\r\\n        }\\r\\n      } else {\\r\\n        circle.alpha = circle.targetAlpha * remapClosestEdge;\\r\\n      }\\r\\n      circle.x += circle.dx + vx;\\r\\n      circle.y += circle.dy + vy;\\r\\n      circle.translateX +=\\r\\n        (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;\\r\\n      circle.translateY +=\\r\\n        (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;\\r\\n\\r\\n      drawCircle(circle, true);\\r\\n\\r\\n      if (\\r\\n        circle.x < -circle.size ||\\r\\n        circle.x > canvasSize.w + circle.size ||\\r\\n        circle.y < -circle.size ||\\r\\n        circle.y > canvasSize.h + circle.size\\r\\n      ) {\\r\\n        circles.splice(i, 1);\\r\\n        const newCircle = circleParams();\\r\\n        drawCircle(newCircle);\\r\\n      }\\r\\n    });\\r\\n    window.requestAnimationFrame(animate);\\r\\n  }\\r\\n\\r\\n  function onMouseMove(event) {\\r\\n    if (canvasRef) {\\r\\n      let rect = canvasRef.getBoundingClientRect();\\r\\n      let { w, h } = canvasSize;\\r\\n      let x = event.clientX - rect.left - w / 2;\\r\\n      let y = event.clientY - rect.top - h / 2;\\r\\n      let inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;\\r\\n      if (inside) {\\r\\n        mouse.x = x;\\r\\n        mouse.y = y;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n\\r\\n  onMount(() => {\\r\\n    if (canvasRef) {\\r\\n      context = canvasRef.getContext(\\"2d\\");\\r\\n      resizeCanvas();\\r\\n      animate();\\r\\n      window.addEventListener(\\"resize\\", resizeCanvas);\\r\\n      window.addEventListener(\\"mousemove\\", onMouseMove);\\r\\n    }\\r\\n\\r\\n    return () => {\\r\\n      window.removeEventListener(\\"resize\\", resizeCanvas);\\r\\n      window.removeEventListener(\\"mousemove\\", onMouseMove);\\r\\n    };\\r\\n  });\\r\\n\\r\\n  $: {\\r\\n    if (canvasRef) {\\r\\n      drawParticles();\\r\\n    }\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div class={className} bind:this={canvasContainerRef} aria-hidden=\\"true\\">\\r\\n  <canvas bind:this={canvasRef} class=\\"size-full\\"></canvas>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .size-full {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuME,wBAAW,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}'
};
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((char) => char + char).join("");
  }
  const hexInt = parseInt(hex, 16);
  const red = hexInt >> 16 & 255;
  const green = hexInt >> 8 & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}
const Particles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { quantity = 700 } = $$props;
  let { staticity = 50 } = $$props;
  let { ease = 50 } = $$props;
  let { size = 0.4 } = $$props;
  const refresh = true;
  let { color = "#2955a5" } = $$props;
  let { vx = 0 } = $$props;
  let { vy = 0 } = $$props;
  let canvasRef;
  let canvasContainerRef;
  hexToRgb(color);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.quantity === void 0 && $$bindings.quantity && quantity !== void 0) $$bindings.quantity(quantity);
  if ($$props.staticity === void 0 && $$bindings.staticity && staticity !== void 0) $$bindings.staticity(staticity);
  if ($$props.ease === void 0 && $$bindings.ease && ease !== void 0) $$bindings.ease(ease);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0) $$bindings.refresh(refresh);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.vx === void 0 && $$bindings.vx && vx !== void 0) $$bindings.vx(vx);
  if ($$props.vy === void 0 && $$bindings.vy && vy !== void 0) $$bindings.vy(vy);
  $$result.css.add(css$2);
  return `<div class="${escape(null_to_empty(className), true) + " svelte-977r95"}" aria-hidden="true"${add_attribute("this", canvasContainerRef, 0)}><canvas class="size-full svelte-977r95"${add_attribute("this", canvasRef, 0)}></canvas> </div>`;
});
const ButtonLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Contact me" } = $$props;
  let { className = "" } = $$props;
  let { href = "/" } = $$props;
  let { target = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  return `<a${add_attribute("href", href, 0)}${add_attribute("target", target, 0)} class="${"relative inline-flex h-fit w-fit rounded-full border border-violet-100/20 bg-violet-200/10 px-4 py-2 text-violet-200 outline-none ring-fuchsia-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-fuchsia-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-fuchsia-200/40 hover:text-fuchsia-300 after:hover:bg-opacity-15 focus:ring-2 " + escape(className, true)}">${escape(text)}</a>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Bounded, "Bounded").$$render($$result, { class: "!pt-10" }, {}, {
    default: () => {
      return `<div class="relative text-center w-full">${validate_component(Particles, "Particles").$$render(
        $$result,
        {
          className: "absolute inset-0 -z-10 -mt-16"
        },
        {},
        {}
      )} <h1 class="mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl" data-svelte-h="svelte-1ler0i6">A dev you can trust, <br> <span>wholeheartedly.</span></h1> <p class="mx-auto mt-6 max-w-lg text-gray-300" data-svelte-h="svelte-1lhfd6e">I build functional web applications that turn ideas into reliable, user‑friendly experiences by blending creativity with technology.</p> ${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          text: "Contact me",
          className: "mt-6",
          href: "/#contact",
          target: "_self"
        },
        {},
        {}
      )} <div class="md:-mt-40 md:-mb-16 w-fit" data-svelte-h="svelte-y18q3d"><img src="assets/hero.webp" alt="Description" class="" width="1116" height="808"></div></div>`;
    }
  })}`;
});
const IconClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>`;
});
const IconMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fff" stroke="#fff" stroke-width="8" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>`;
});
const WordMark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center" data-svelte-h="svelte-evr2q2"><div class="text-xl">Niklas Rüdebusch</div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isOpen = false;
  const navigation = [
    { label: "About me", link: "#about" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact" }
  ];
  const isActive = (path) => $page.url.pathname.includes(path);
  $$unsubscribe_page();
  return `<header class="p-4 md:p-6"><nav class="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center" aria-label="Main"><div class="flex items-center justify-between"><a href="/" class="z-50">${validate_component(WordMark, "WordMark").$$render($$result, {}, {}, {})} <span class="sr-only" data-svelte-h="svelte-170ew6t">home page</span></a> <button type="button" class="block p-2 text-3xl text-white md:hidden"${add_attribute("aria-expanded", isOpen, 0)} aria-label="Open menu">${validate_component(IconMenu, "IconMenu").$$render($$result, {}, {}, {})}</button></div>  <div${add_attribute("class", `fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden ${"translate-x-[100%]"}`, 0)}><button${add_attribute("aria-expanded", isOpen, 0)} type="button" class="block p-2 text-3xl text-white md:hidden" aria-label="Close menu">${validate_component(IconClose, "IconClose").$$render($$result, {}, {}, {})}</button> <ul class="grid justify-items-end gap-8">${each(navigation, (item) => {
    return `<li><a${add_attribute("href", item.link, 0)} class="block min-h-11 px-3 text-3xl first:mt-8"${add_attribute("aria-current", isActive(item.link) ? "page" : void 0, 0)}>${escape(item.label)}</a> </li>`;
  })}</ul></div>  <ul class="hidden gap-8 md:flex">${each(navigation, (item) => {
    return `<li>${item.cta_button ? `${validate_component(ButtonLink, "ButtonLink").$$render(
      $$result,
      {
        href: item.link,
        "aria-current": isActive(item.link) ? "page" : void 0
      },
      {},
      {
        default: () => {
          return `${escape(item.label)} `;
        }
      }
    )}` : `<a${add_attribute("href", item.link, 0)} class="inline-flex min-h-11 items-center"${add_attribute("aria-current", isActive(item.link) ? "page" : void 0, 0)}>${escape(item.label)} </a>`} </li>`;
  })}</ul></nav></header>`;
});
const css$1 = {
  code: '.grid-background.svelte-1r4hxox.svelte-1r4hxox{background-image:url("/assets/grid-pattern.png");position:absolute;inset:0;background-repeat:repeat;z-index:-1;background-position:center;opacity:0.15;-webkit-mask-image:radial-gradient(circle at 60% 50%, black 10%, transparent 40%);mask-image:radial-gradient(circle at 60% 50%, black 10%, transparent 40%)}.project2.svelte-1r4hxox .grid-background.svelte-1r4hxox{-webkit-mask-image:radial-gradient(circle at 40% 50%, black 10%, transparent 40%);mask-image:radial-gradient(circle at 40% 50%, black 10%, transparent 40%)}',
  map: `{"version":3,"file":"Projects.svelte","sources":["Projects.svelte"],"sourcesContent":["<script>\\r\\n  import Bounded from \\"./Bounded.svelte\\";\\r\\n  import ButtonLink from \\"./ButtonLink.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Bounded class=\\"relative\\" id=\\"projects\\">\\r\\n  <div\\r\\n    class=\\"showcase__glow absolute -z-10 aspect-video w-full max-w-3xl rounded-full bg-violet-500 mix-blend-screen blur-[120px] filter opacity-30\\"\\r\\n  />\\r\\n\\r\\n  <h2\\r\\n    class=\\"showcase__heading text-balance text-center text-5xl font-medium md:text-7xl\\"\\r\\n  >\\r\\n    Projects\\r\\n  </h2>\\r\\n\\r\\n  <div class=\\"text-center mx-auto mt-6 max-w-md text-gray-300\\">\\r\\n    I've worked on a variety of projects, from simple websites to more complex\\r\\n    web applications. Here are my favorites.\\r\\n  </div>\\r\\n\\r\\n  <div\\r\\n    class=\\"relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12\\"\\r\\n  >\\r\\n    <div class=\\"grid-background\\" />\\r\\n\\r\\n    <div>\\r\\n      <h3 class=\\"mt-6 text-2xl font-normal\\">Smartcart</h3>\\r\\n\\r\\n      <div class=\\"prose prose-invert mt-4 max-w-xl text-gray-300\\">\\r\\n        A shopping list app built with Next.js, Chakra UI, React Hook Form, Zod\\r\\n        and Firebase Authentication & Database. It allows users to create an\\r\\n        account, log in, and manage their personal shopping list.\\r\\n      </div>\\r\\n\\r\\n      <ButtonLink\\r\\n        text=\\"View Project\\"\\r\\n        className=\\"mt-6\\"\\r\\n        href=\\"https://smartcartt.netlify.app/\\"\\r\\n        target=\\"_blank\\"\\r\\n      />\\r\\n    </div>\\r\\n\\r\\n    <img\\r\\n      src=\\"assets/smartcart1.webp\\"\\r\\n      alt=\\"Showcase\\"\\r\\n      class=\\"opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]\\"\\r\\n      loading=\\"lazy\\"\\r\\n    />\\r\\n  </div>\\r\\n\\r\\n  <div\\r\\n    class=\\"project2 relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12\\"\\r\\n  >\\r\\n    <div class=\\"grid-background\\" />\\r\\n\\r\\n    <div>\\r\\n      <h3 class=\\"mt-6 text-2xl font-normal\\">Plantpal</h3>\\r\\n\\r\\n      <div class=\\"prose prose-invert mt-4 max-w-xl text-gray-300\\">\\r\\n        A vegan recipe app built with Next.js, Chakra UI, React Hook Form, Zod\\r\\n        and a PostgreSQL database hosted with Supabase using Prisma. It allows\\r\\n        users to create an account, log in, and view and create recipes.\\r\\n      </div>\\r\\n\\r\\n      <ButtonLink\\r\\n        text=\\"View Project\\"\\r\\n        className=\\"mt-6\\"\\r\\n        href=\\"https://veganplantpal.netlify.app\\"\\r\\n        target=\\"_blank\\"\\r\\n      />\\r\\n    </div>\\r\\n\\r\\n    <img\\r\\n      src=\\"assets/plantpal.webp\\"\\r\\n      alt=\\"Showcase\\"\\r\\n      class=\\"opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:order-1 lg:translate-x-[15%]\\"\\r\\n      loading=\\"lazy\\"\\r\\n    />\\r\\n  </div>\\r\\n\\r\\n  <div\\r\\n    class=\\"relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12\\"\\r\\n  >\\r\\n    <div class=\\"grid-background\\" />\\r\\n\\r\\n    <div>\\r\\n      <h3 class=\\"mt-6 text-2xl font-normal\\">Hidden Gems</h3>\\r\\n\\r\\n      <div class=\\"prose prose-invert mt-4 max-w-xl text-gray-300\\">\\r\\n        Hidden Gems is a user-friendly web application built with Next.js,\\r\\n        shadcn/ui, Tailwind CSS, Leaflet and a PostgreSQL database hosted with\\r\\n        Supabase. It allows users to discover popular places in Berlin.\\r\\n      </div>\\r\\n\\r\\n      <ButtonLink\\r\\n        text=\\"View Project\\"\\r\\n        className=\\"mt-6\\"\\r\\n        href=\\"https://hiddengemsberlin.netlify.app\\"\\r\\n        target=\\"_blank\\"\\r\\n      />\\r\\n    </div>\\r\\n\\r\\n    <img\\r\\n      src=\\"assets/hiddengems.webp\\"\\r\\n      alt=\\"Showcase\\"\\r\\n      class=\\"opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]\\"\\r\\n      loading=\\"lazy\\"\\r\\n    />\\r\\n  </div>\\r\\n</Bounded>\\r\\n\\r\\n<style>\\r\\n  .grid-background {\\r\\n    background-image: url(\\"/assets/grid-pattern.png\\");\\r\\n    position: absolute;\\r\\n    inset: 0;\\r\\n    background-repeat: repeat;\\r\\n    z-index: -1;\\r\\n    background-position: center;\\r\\n    opacity: 0.15;\\r\\n    -webkit-mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);\\r\\n            mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);\\r\\n  }\\r\\n\\r\\n  .project2 .grid-background {\\r\\n    -webkit-mask-image: radial-gradient(circle at 40% 50%, black 10%, transparent 40%);\\r\\n            mask-image: radial-gradient(circle at 40% 50%, black 10%, transparent 40%);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiHE,8CAAiB,CACf,gBAAgB,CAAE,+BAA+B,CACjD,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,iBAAiB,CAAE,MAAM,CACzB,OAAO,CAAE,EAAE,CACX,mBAAmB,CAAE,MAAM,CAC3B,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,gBAAgB,MAAM,CAAC,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CAC1E,UAAU,CAAE,gBAAgB,MAAM,CAAC,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CACnF,CAEA,wBAAS,CAAC,+BAAiB,CACzB,kBAAkB,CAAE,gBAAgB,MAAM,CAAC,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CAAC,CAC1E,UAAU,CAAE,gBAAgB,MAAM,CAAC,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC,WAAW,CAAC,GAAG,CACnF"}`
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Bounded, "Bounded").$$render($$result, { class: "relative", id: "projects" }, {}, {
    default: () => {
      return `<div class="showcase__glow absolute -z-10 aspect-video w-full max-w-3xl rounded-full bg-violet-500 mix-blend-screen blur-[120px] filter opacity-30"></div> <h2 class="showcase__heading text-balance text-center text-5xl font-medium md:text-7xl" data-svelte-h="svelte-1e7gn2v">Projects</h2> <div class="text-center mx-auto mt-6 max-w-md text-gray-300" data-svelte-h="svelte-1ufcnx8">I&#39;ve worked on a variety of projects, from simple websites to more complex
    web applications. Here are my favorites.</div> <div class="relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"><div class="grid-background svelte-1r4hxox"></div> <div><h3 class="mt-6 text-2xl font-normal" data-svelte-h="svelte-1muhli9">Smartcart</h3> <div class="prose prose-invert mt-4 max-w-xl text-gray-300" data-svelte-h="svelte-12g5hw1">A shopping list app built with Next.js, Chakra UI, React Hook Form, Zod
        and Firebase Authentication &amp; Database. It allows users to create an
        account, log in, and manage their personal shopping list.</div> ${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          text: "View Project",
          className: "mt-6",
          href: "https://smartcartt.netlify.app/",
          target: "_blank"
        },
        {},
        {}
      )}</div> <img src="assets/smartcart1.webp" alt="Showcase" class="opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]" loading="lazy"></div> <div class="project2 relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12 svelte-1r4hxox"><div class="grid-background svelte-1r4hxox"></div> <div><h3 class="mt-6 text-2xl font-normal" data-svelte-h="svelte-1hcr8ps">Plantpal</h3> <div class="prose prose-invert mt-4 max-w-xl text-gray-300" data-svelte-h="svelte-v8xwld">A vegan recipe app built with Next.js, Chakra UI, React Hook Form, Zod
        and a PostgreSQL database hosted with Supabase using Prisma. It allows
        users to create an account, log in, and view and create recipes.</div> ${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          text: "View Project",
          className: "mt-6",
          href: "https://veganplantpal.netlify.app",
          target: "_blank"
        },
        {},
        {}
      )}</div> <img src="assets/plantpal.webp" alt="Showcase" class="opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:order-1 lg:translate-x-[15%]" loading="lazy"></div> <div class="relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"><div class="grid-background svelte-1r4hxox"></div> <div><h3 class="mt-6 text-2xl font-normal" data-svelte-h="svelte-10j7xdo">Hidden Gems</h3> <div class="prose prose-invert mt-4 max-w-xl text-gray-300" data-svelte-h="svelte-57v0g1">Hidden Gems is a user-friendly web application built with Next.js,
        shadcn/ui, Tailwind CSS, Leaflet and a PostgreSQL database hosted with
        Supabase. It allows users to discover popular places in Berlin.</div> ${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          text: "View Project",
          className: "mt-6",
          href: "https://hiddengemsberlin.netlify.app",
          target: "_blank"
        },
        {},
        {}
      )}</div> <img src="assets/hiddengems.webp" alt="Showcase" class="opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]" loading="lazy"></div>`;
    }
  })}`;
});
const css = {
  code: ".contact-txt.svelte-4jxyxm.svelte-4jxyxm{display:grid;justify-items:start}.flex.svelte-4jxyxm.svelte-4jxyxm{display:flex;flex-direction:column;gap:var(--spacer);align-items:center}@media(min-width: 40em){.flex.svelte-4jxyxm.svelte-4jxyxm{flex-direction:row}.flex.svelte-4jxyxm>.svelte-4jxyxm{flex-basis:100%}}",
  map: '{"version":3,"file":"Contact.svelte","sources":["Contact.svelte"],"sourcesContent":["<script>\\r\\n  import Bounded from \\"./Bounded.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Bounded class=\\"text-center md:text-left contact\\" id=\\"contact\\">\\r\\n  <div class=\\"container\\">\\r\\n    <div class=\\"flex\\">\\r\\n      <div class=\\"contact-txt justify-center md:justify-start\\">\\r\\n        <h2 class=\\"text-balance text-center text-5xl font-medium md:text-7xl\\">\\r\\n          Contact\\r\\n        </h2>\\r\\n        <p class=\\"text-gray-300 mt-6\\">\\r\\n          Want to chat? <br />\\r\\n          Feel free to contact me!\\r\\n        </p>\\r\\n        <p class=\\"text-gray-300 mt-6\\">n.ruedebusch@web.de</p>\\r\\n      </div>\\r\\n      <div class=\\"contact-img\\">\\r\\n        <img src=\\"/assets/contact.webp\\" alt=\\"contact\\" loading=\\"lazy\\" />\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</Bounded>\\r\\n\\r\\n<style>\\r\\n  .contact-txt {\\r\\n    display: grid;\\r\\n    justify-items: start;\\r\\n  }\\r\\n\\r\\n  .flex {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: var(--spacer);\\r\\n    align-items: center;\\r\\n  }\\r\\n  @media (min-width: 40em) {\\r\\n    .flex {\\r\\n      flex-direction: row;\\r\\n    }\\r\\n    .flex > * {\\r\\n      flex-basis: 100%;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyBE,wCAAa,CACX,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,KACjB,CAEA,iCAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,QAAQ,CAAC,CAClB,WAAW,CAAE,MACf,CACA,MAAO,YAAY,IAAI,CAAE,CACvB,iCAAM,CACJ,cAAc,CAAE,GAClB,CACA,mBAAK,CAAG,cAAE,CACR,UAAU,CAAE,IACd,CACF"}'
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Bounded, "Bounded").$$render(
    $$result,
    {
      class: "text-center md:text-left contact",
      id: "contact"
    },
    {},
    {
      default: () => {
        return `<div class="container" data-svelte-h="svelte-ewtanc"><div class="flex svelte-4jxyxm"><div class="contact-txt justify-center md:justify-start svelte-4jxyxm"><h2 class="text-balance text-center text-5xl font-medium md:text-7xl">Contact</h2> <p class="text-gray-300 mt-6">Want to chat? <br>
          Feel free to contact me!</p> <p class="text-gray-300 mt-6">n.ruedebusch@web.de</p></div> <div class="contact-img svelte-4jxyxm"><img src="/assets/contact.webp" alt="contact" loading="lazy"></div></div></div>`;
      }
    }
  )}`;
});
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Bounded, "Bounded").$$render($$result, { id: "about" }, {}, {
    default: () => {
      return `<h2 class="text-center text-5xl font-medium md:text-7xl" data-svelte-h="svelte-nsila5">About me</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" data-svelte-h="svelte-frjd16"><h3 class="text-2xl font-normal text-right md:col-span-1">Hello, I&#39;m Niklas, webdeveloper based in Bremen – I create digital
      projects with knowledge and passion.</h3> <p class="text-gray-300 mt-6 md:mt-0 md:col-span-2 max-w-[65ch]">With nearly three years of professional experience, I create meaningful and
      impactful web products. Leveraging solid frontend knowledge in TypeScript and Next.js alongside backend proficiency with PostgreSQL and Prisma, solutions are built high-performing, user-friendly, and accessible that comply with web standards and best practices. <br> <br>
      My goal is to develop webapps that are visually appealing, accessible, and
      optimized for both users and search engines, ensuring a positive experience
      and high visibility on the web.</p></div> <h3 class="text-center text-sm font-semibold mt-16 uppercase text-gray-400" data-svelte-h="svelte-fyzgnh">Tools I like to use</h3> <div class="flex flex-wrap items-center justify-center mt-6 gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white" data-svelte-h="svelte-1eujud1"><div class="flex items-center gap-2"><img src="/assets/nextjs.svg" alt="Next.js" class="w-8 h-8 mx-auto" width="32" height="32" loading="lazy"> <p class="font-bold text-lg">Next.js</p></div> <div class="flex items-center gap-2"><img src="/assets/chakra.svg" alt="chakra" class="w-8 h-8 mx-auto" width="32" height="32" loading="lazy"> <p class="font-bold text-lg">Chakra Ui</p></div> <div class="flex items-center gap-2"><img src="/assets/supabase.webp" alt="Supabase" class="w-8 h-8 mx-auto" width="32" height="32" loading="lazy"> <p class="font-bold text-lg">Supabase</p></div> <div class="flex items-center gap-2"><img src="/assets/prisma.svg" alt="prisma" class="w-8 h-8 mx-auto" width="32" height="32" loading="lazy"> <p class="font-bold text-lg">Prisma</p></div> <div class="flex items-center gap-2"><img src="/assets/framer-motion.svg" alt="framer-motion" class="w-8 h-8 mx-auto" width="32" height="32" loading="lazy"> <p class="font-bold text-lg">Framer Motion</p></div> <div class="flex items-center gap-2"><img src="/assets/Threejs.svg" alt="Three JS" class="w-8 h-8 mx-auto" width="32" height="32" loading="lazy"> <p class="font-bold text-lg">Three.js</p></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
