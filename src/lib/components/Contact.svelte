<script>
  import Bounded from "./Bounded.svelte";
</script>

<Bounded class="text-center md:text-left contact" id="contact">
  <div class="container">
    <div class="flex">
      <div class="contact-txt justify-center md:justify-start">
        <h2 class="text-balance text-center text-5xl font-medium md:text-7xl">
          Contact
        </h2>
        <p class="text-gray-300 mt-6">
          Want to chat? <br />
          Feel free to contact me!
        </p>
        <p class="text-gray-300 mt-6">n.ruedebusch@web.de</p>
      </div>
      <div class="contact-img">
        <img src="/assets/contact.webp" alt="contact" loading="lazy" />
      </div>
    </div>
  </div>
</Bounded>

<style>
  .contact-txt {
    display: grid;
    justify-items: start;
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: var(--spacer);
    align-items: center;
  }
  @media (min-width: 40em) {
    .flex {
      flex-direction: row;
    }
    .flex > * {
      flex-basis: 100%;
    }
  }
</style>
