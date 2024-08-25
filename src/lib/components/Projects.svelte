<script>
  import Bounded from "./Bounded.svelte";
  import ButtonLink from "./ButtonLink.svelte";
</script>

<Bounded class="relative" id="projects">
  <div
    class="showcase__glow absolute -z-10 aspect-video w-full max-w-3xl rounded-full bg-violet-500 mix-blend-screen blur-[120px] filter opacity-30"
  />

  <h2
    class="showcase__heading text-balance text-center text-5xl font-medium md:text-7xl"
  >
    Projects
  </h2>

  <div class="text-center mx-auto mt-6 max-w-md text-gray-300">
    I've worked on a variety of projects, from simple websites to more complex
    web applications. Here are my favorites.
  </div>

  <div
    class="relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"
  >
    <div class="grid-background" />

    <div>
      <h3 class="mt-6 text-2xl font-normal">Smartcart</h3>

      <div class="prose prose-invert mt-4 max-w-xl text-gray-300">
        A shopping list app built with SvelteKit, Tailwind and Firebase
        Authentication and Database. It allows users to create an account, log
        in, and manage their personal shopping list.
      </div>

      <ButtonLink
        text="View Project"
        className="mt-6"
        href="https://smartcartt.netlify.app/"
        target="_blank"
      />
    </div>

    <img
      src="assets/smartcart.webp"
      alt="Showcase"
      class="opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]"
      loading="lazy"
    />
  </div>

  <div
    class="project2 relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"
  >
    <div class="grid-background" />

    <div>
      <h3 class="mt-6 text-2xl font-normal">Cinemate</h3>

      <div class="prose prose-invert mt-4 max-w-xl text-gray-300">
        CineMate is a user-friendly web application built with SvelteKit,
        Tailwind CSS, and The Movie Database API. It allows users to search for
        movies and discover new ones.
      </div>

      <ButtonLink
        text="View Project"
        className="mt-6"
        href="https://cinem8.netlify.app"
        target="_blank"
      />
    </div>

    <img
      src="assets/cinem8.webp"
      alt="Showcase"
      class="opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:order-1 lg:translate-x-[15%]"
      loading="lazy"
    />
  </div>

  <div
    class="relative mt-16 grid items-center gap-8 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"
  >
    <div class="grid-background" />

    <div>
      <h3 class="mt-6 text-2xl font-normal">Ringwerk</h3>

      <div class="prose prose-invert mt-4 max-w-xl text-gray-300">
        Ringwerk is an interactive website developed using Three.js, GSAP, and
        JavaScript. The combination of 3D graphics, smooth animations, and
        interactivity creates an immersive web experience.
      </div>

      <ButtonLink
        text="View Project"
        className="mt-6"
        href="https://ringwerk.netlify.app/"
        target="_blank"
      />
    </div>

    <img
      src="assets/ringw3rk.webp"
      alt="Showcase"
      class="opacity-90 rounded-md shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]"
      loading="lazy"
    />
  </div>
</Bounded>

<style>
  .grid-background {
    background-image: url("/assets/grid-pattern.png");
    position: absolute;
    inset: 0;
    background-repeat: repeat;
    z-index: -1;
    background-position: center;
    opacity: 0.15;
    mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
  }

  .project2 .grid-background {
    mask-image: radial-gradient(circle at 40% 50%, black 10%, transparent 40%);
  }
</style>
