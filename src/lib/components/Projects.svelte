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
        A shopping list app built with Next.js, Chakra UI, React Hook Form, Zod
        and Firebase Authentication & Database. It allows users to create an
        account, log in, and manage their personal shopping list.
      </div>

      <ButtonLink
        text="View Project"
        className="mt-6"
        href="https://smartcartt.netlify.app/"
        target="_blank"
      />
    </div>

    <img
      src="assets/smartcart1.webp"
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
      <h3 class="mt-6 text-2xl font-normal">Plantpal</h3>

      <div class="prose prose-invert mt-4 max-w-xl text-gray-300">
        A vegan recipe app built with Next.js, Chakra UI, React Hook Form, Zod
        and a PostgreSQL database hosted with Supabase using Prisma. It allows
        users to create an account, log in, and view and create recipes.
      </div>

      <ButtonLink
        text="View Project"
        className="mt-6"
        href="https://veganplantpal.netlify.app"
        target="_blank"
      />
    </div>

    <img
      src="assets/plantpal.webp"
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
      <h3 class="mt-6 text-2xl font-normal">Hidden Gems</h3>

      <div class="prose prose-invert mt-4 max-w-xl text-gray-300">
        Hidden Gems is a user-friendly web application built with Next.js,
        shadcn/ui, Tailwind CSS, Leaflet and a PostgreSQL database hosted with
        Supabase. It allows users to discover popular places in Berlin.
      </div>

      <ButtonLink
        text="View Project"
        className="mt-6"
        href="https://hiddengemsberlin.netlify.app"
        target="_blank"
      />
    </div>

    <img
      src="assets/hiddengems.webp"
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
