<script>
  import Bounded from "./Bounded.svelte";
</script>

<Bounded id="about">
  <h2 class="text-center text-5xl font-medium md:text-7xl">About me</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    <h3 class="text-2xl font-normal text-right md:col-span-1">
      Hello, I'm Niklas, webdeveloper based in Münster – I create digital
      frontends with knowledge and passion.
    </h3>
    <p class="text-gray-300 mt-6 md:mt-0 md:col-span-2 max-w-[65ch]">
      With nearly two years of professional experience, I create meaningful and
      impactful web products. My solid knowledge of HTML, CSS, and JavaScript,
      combined with my experience using frameworks like Next.js and component
      libraries like Chakra UI, enables me to develop high-performance,
      user-friendly, and accessible interfaces that comply with web standards
      and best practices. <br />
      <br />
      My goal is to develop websites that are visually appealing, accessible, and
      optimized for both users and search engines, ensuring a positive experience
      and high visibility on the web.
    </p>
  </div>

  <h3 class="text-center text-sm font-semibold mt-16 uppercase text-gray-400">
    Tools I like to use
  </h3>
  <div
    class="flex flex-wrap items-center justify-center mt-6 gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white"
  >
    <div class="flex items-center gap-2">
      <img
        src="/assets/nextjs.svg"
        alt="Next.js"
        class="w-8 h-8 mx-auto"
        width="32"
        height="32"
        loading="lazy"
      />
      <p class="font-bold text-lg">Next.js</p>
    </div>
    <div class="flex items-center gap-2">
      <img
        src="/assets/chakra.svg"
        alt="chakra"
        class="w-8 h-8 mx-auto"
        width="32"
        height="32"
        loading="lazy"
      />
      <p class="font-bold text-lg">Chakra Ui</p>
    </div>
    <div class="flex items-center gap-2">
      <img
        src="/assets/supabase.webp"
        alt="Supabase"
        class="w-8 h-8 mx-auto"
        width="32"
        height="32"
        loading="lazy"
      />
      <p class="font-bold text-lg">Supabase</p>
    </div>
    <div class="flex items-center gap-2">
      <img
        src="/assets/gsap.svg"
        alt="GSAP"
        class="w-8 h-8 mx-auto"
        width="32"
        height="32"
        loading="lazy"
      />
      <p class="font-bold text-lg">GSAP</p>
    </div>
    <div class="flex items-center gap-2">
      <img
        src="/assets/Threejs.svg"
        alt="Three JS"
        class="w-8 h-8 mx-auto"
        width="32"
        height="32"
        loading="lazy"
      />
      <p class="font-bold text-lg">Three.js</p>
    </div>
    <div class="flex items-center gap-2">
      <img
        src="/assets/prismic.svg"
        alt="prismic"
        class="w-8 h-8 mx-auto"
        width="32"
        height="32"
        loading="lazy"
      />
      <p class="font-bold text-lg">Prismic</p>
    </div>
  </div>
</Bounded>
