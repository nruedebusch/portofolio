<script>
  import Bounded from "$lib/components/Bounded.svelte";
  import Particles from "$lib/components/Particles.svelte";
  import ButtonLink from "$lib/components/ButtonLink.svelte";
</script>

<Bounded class="!pt-10">
  <div class="relative text-center w-full">
    <Particles className="absolute inset-0 -z-10 -mt-16" />
    <h1 class="mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">
      A dev you can trust, <br />
      <span>wholeheartedly.</span>
    </h1>

    <p class="mx-auto mt-6 max-w-md text-gray-300">
      I believe in building more than just websites; I build relationships based
      on honesty, reliability, and a genuine commitment to our success.
    </p>

    <ButtonLink
      text="Contact me"
      className="mt-6"
      href="/#contact"
      target="_self"
    />

    <div class="md:-mt-40 md:-mb-16 w-fit">
      <img
        src="assets/hero.webp"
        alt="Description"
        class=""
        width="1116"
        height="808"
      />
    </div>
  </div>
</Bounded>
