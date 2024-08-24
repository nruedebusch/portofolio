<script>
  import IconClose from "$lib/components/IconClose.svelte";
  import IconMenu from "$lib/components/IconMenu.svelte";
  import WordMark from "$lib/components/WordMark.svelte";
  import ButtonLink from "$lib/components/ButtonLink.svelte";
  import { page } from "$app/stores";

  let isOpen = false;
  const toggleOpen = () => (isOpen = !isOpen);
  const close = () => (isOpen = false);

  const navigation = [
    { label: "About me", link: "#about" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact" },
  ];

  const isActive = (path) => $page.url.pathname.includes(path);
</script>

<header class="p-4 md:p-6">
  <nav
    class="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center"
    aria-label="Main"
  >
    <div class="flex items-center justify-between">
      <a href="/" on:click={close} class="z-50">
        <WordMark />
        <span class="sr-only">home page</span>
      </a>

      <button
        type="button"
        class="block p-2 text-3xl text-white md:hidden"
        aria-expanded={isOpen}
        on:click={toggleOpen}
        aria-label="Open menu"
      >
        <IconMenu />
      </button>
    </div>

    <!-- Mobile Nav -->
    <div
      class={`fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}
    >
      <button
        aria-expanded={isOpen}
        type="button"
        class="block p-2 text-3xl text-white md:hidden"
        on:click={toggleOpen}
        aria-label="Close menu"
      >
        <IconClose />
      </button>
      <ul class="grid justify-items-end gap-8">
        {#each navigation as item}
          <li>
            <a
              href={item.link}
              on:click={close}
              class="block min-h-11 px-3 text-3xl first:mt-8"
              aria-current={isActive(item.link) ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Desktop Nav -->
    <ul class="hidden gap-8 md:flex">
      {#each navigation as item}
        <li>
          {#if item.cta_button}
            <ButtonLink
              href={item.link}
              on:click={close}
              aria-current={isActive(item.link) ? "page" : undefined}
            >
              {item.label}
            </ButtonLink>
          {:else}
            <a
              href={item.link}
              on:click={close}
              class="inline-flex min-h-11 items-center"
              aria-current={isActive(item.link) ? "page" : undefined}
            >
              {item.label}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</header>
