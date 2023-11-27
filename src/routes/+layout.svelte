<script lang="ts">
  import '$lib/styles/app.css';
  import '$lib/styles/keyframes.css';

  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { blur, fly } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';

  import {
    afterNavigate,
    beforeNavigate,
    disableScrollHandling,
    preloadCode
  } from '$app/navigation';
  import { mediaQueryStore } from '$lib/stores';
  import { navItems } from '$lib/const';
  import { MenuIcon, Icon } from '$comp';
  import type { NavigationTarget } from '@sveltejs/kit';
  import { page } from '$app/stores';

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
  const currentPage = writable<string | null>('/');

  let iconSize: IconSize;

  const toggleMenu = () => {
    isMenuOpen.update((n) => !n);
  };

  onMount(() => {
    const allRoutes = navItems.flatMap((item) =>
      item.children ? item.children.map((child) => child.route) : [item.route]
    );
    preloadCode(...(allRoutes as string[]));

    console.log('here');

    if ($page.params) {
      if ($page.params?.slug) {
        $currentPage = '/' + $page.params.slug;
      }
    } else {
      if ($page.route) {
        $currentPage = $page.route?.id;
      }
    }
  });

  beforeNavigate(({ to }) => {
    if (to?.params?.slug) {
      $currentPage = '/' + to.params.slug;
    } else {
      if (to?.route) {
        $currentPage = to?.route?.id;
      }
    }
  });

  afterNavigate(({ to }) => {
    disableScrollHandling();

    setTimeout(() => {
      scrollTo({ top: 0, behavior: 'instant' });
    }, 400);
  });

  $: iconSize = $small ? 'sm' : 'md';
  $: pathname = data.url;
  $: console.log($currentPage);
</script>

<main class="flex flex-col bg-[#1d1d20] min-h-screen w-full overflow-x-hidden">
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
      <div class="flex flex-col justify-start items-start w-[300px]">
        {#each navItems as item, index (index)}
          {#if item.route}
            <a
              on:click={toggleMenu}
              href={item.route}
              class="route group flex items-center text-4xl md:text-5xl font-bold accent-color text-center leading-tight mb-4"
              class:active={$currentPage === item.route}
            >
              <span
                class="nav-indicator mr-4 h-px w-8 bg-amber-100 transition-all group-hover:w-16 group-hover:bg-amber-300 group-focus-visible:w-16 group-focus-visible:bg-amber-300 motion-reduce:transition-none"
              />
              <span
                class="nav-text text-2xl font-bold uppercase tracking-widest text-gray-100 group-hover:text-white group-focus-visible:text-slate-200"
              >
                {item.title}
              </span>
            </a>
          {/if}
          {#if item.children}
            {#each item.children as child}
              <a
                on:click={toggleMenu}
                href={child.route}
                class="route group flex items-center text-4xl md:text-5xl font-bold accent-color text-center leading-tight mb-4"
                class:active={$currentPage === child.route}
              >
                <span
                  class="nav-indicator mr-4 h-px w-8 bg-amber-100 transition-all group-hover:w-16 group-hover:bg-amber-300 group-focus-visible:w-16 group-focus-visible:bg-amber-300 motion-reduce:transition-none"
                />
                <span
                  class="nav-text text-2xl font-bold uppercase tracking-widest text-gray-100 group-hover:text-white group-focus-visible:text-slate-200"
                >
                  {child.title}
                </span>
              </a>
            {/each}
          {/if}
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

<style>
  .nav-indicator {
    display: inline-block;
    height: 2px;
    width: 2rem;
    transition: all 0.3s ease;
  }

  .route:hover .nav-indicator {
    width: 4rem;
    --tw-bg-opacity: 1;
    background-color: rgb(252 211 77 / 1);
  }

  .route {
    position: relative;
    overflow: hidden;
  }

  .nav-text {
    position: relative;
    display: inline-block;
  }

  .active .nav-indicator {
    width: 4rem;
    --tw-bg-opacity: 1;
    background-color: rgb(252 211 77 / 1);
  }

  .active .nav-text {
    --tw-text-opacity: 1;
    color: rgb(252 211 77 / 1);
  }
</style>
