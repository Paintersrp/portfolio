<script lang="ts">
  import '$lib/styles/app.css';
  import '$lib/styles/keyframes.css';

  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { blur, fly } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';

  import { afterNavigate, disableScrollHandling, preloadCode } from '$app/navigation';
  import { scrollToSection } from '$lib/utils';
  import { mediaQueryStore } from '$lib/stores';
  import { navItems } from '$lib/const';
  import { MenuIcon, Icon } from '$comp';

  // Preloaded data from +layout.server.ts
  export let data;

  const socials: Socials = [
    { name: 'github', url: 'https://github.com/' },
    { name: 'linkedin', url: 'https://linkedin.com/' },
    { name: 'twitter', url: 'https://twitter.com/' },
    { name: 'email', url: 'paintersrp@gmail.com' }
  ];

  const isMenuOpen = writable(false);
  const small = mediaQueryStore('(max-width: 600px)');

  let iconSize: IconSize;

  const toggleMenu = () => {
    isMenuOpen.update((n) => !n);
  };

  const navigateToSection = (route: string) => {
    toggleMenu();
    scrollToSection(route);
  };

  onMount(() => {
    const navRoutes = navItems.map((item) => item.route);
    preloadCode(...navRoutes);
  });

  afterNavigate(() => {
    disableScrollHandling();
    setTimeout(() => {
      scrollTo({ top: 0, behavior: 'instant' });
    }, 400);
  });

  $: iconSize = $small ? 'sm' : 'md';
  $: pathname = data.url;
  $: console.log(pathname);
</script>

<main class="flex flex-col bg-[#1d1d20] min-h-screen overflow-x-hidden overflow-y-hidden w-full">
  <!-- Application Header -->
  <header class="p-1 fixed top-0 right-0 justify-end z-50">
    <MenuIcon open={$isMenuOpen} onClick={toggleMenu} />
  </header>

  <!-- Menu Overlay -->
  {#if $isMenuOpen}
    <div
      in:blur={{ easing: sineOut, amount: 15, duration: 300 }}
      out:blur={{ easing: sineIn, amount: 15, duration: 300 }}
      class="fixed inset-0 flex items-center bg-[#1d1d20] justify-center p-4 z-40"
    >
      <div class="flex flex-col">
        {#each navItems as item}
          <a
            on:click={toggleMenu}
            href={item.route}
            class="text-5xl md:text-6xl font-bold accent-color hover:text-amber-300 text-center leading-tight mb-4 hover:underline"
          >
            {item.title}
          </a>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Page Slot -->
  {#key pathname}
    <div
      in:fly={{ x: '50%', duration: 400, delay: 500, easing: sineOut }}
      out:fly={{ x: '-50%', duration: 400, easing: sineIn }}
    >
      <slot />
    </div>
  {/key}

  <!-- Application Footer -->
  <footer
    class="block md:flex md:justify-between md:items-center py-12 px-7 md:px-20 bg-opacity-[1.5%] bg-white"
  >
    <div class="font-bold w-auto text-center mb-6 md:w-[200px] md:text-left md:mb-0 text-gray-200">
      <div class="text-sm">
        <span class="accent-color">©</span>
        Copyright
        <span class="">2023</span>
      </div>
      <div class="text-sm">
        <span>
          Made by
          <a href="/" class="underline-link accent-color !font-extrabold"> Ryan Painter </a>
        </span>
      </div>
    </div>
    <div class="flex justify-center">
      {#each socials as social, index (index)}
        <a
          href={social.url}
          class="uppercase font-bold mx-3 lg:mx-4"
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
        >
          <Icon
            type={social.name}
            size="md"
            iconClass="accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
          />
        </a>
      {/each}
    </div>
  </footer>
</main>
