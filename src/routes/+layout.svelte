<script lang="ts">
  import '$lib/styles/app.css';
  import '$lib/styles/keyframes.css';

  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';

  import { preloadCode } from '$app/navigation';
  import { scrollToSection } from '$lib/utils';
  import { mediaQueryStore } from '$lib/stores';
  import { MenuIcon, Icon } from '$comp';

  // Preloaded data from +layout.server.ts
  export let data;

  export const navItems: NavigationItems = [
    {
      title: 'Landing',
      route: 'landing'
    },
    {
      title: 'About',
      route: 'about'
    },
    {
      title: 'Projects',
      route: 'projects'
    }
    // {
    //   title: 'Blog',
    //   route: '/blog'
    // }
  ];

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

  $: iconSize = $small ? 'sm' : 'md';
  $: pathname = data.url;
</script>

<main
  class="flex flex-col bg-gradient-to-l from-cyan-500 to-blue-600 min-h-screen overflow-x-hidden overflow-y-hidden w-full"
>
  <!-- Application Header -->
  <header class="p-1 fixed top-0 right-0 justify-end z-50">
    <MenuIcon open={$isMenuOpen} onClick={toggleMenu} />
  </header>

  <!-- <Navigation {pathname} /> -->

  <!-- Social Aside -->
  <aside
    class="fixed top-1/2 right-0 transform -translate-y-1/2 md:flex flex-col items-center space-y-3 md:space-y-4 p-2 md:p-3 bg-opacity-20 bg-white rounded-l-lg z-50 hidden"
  >
    {#each socials as social}
      <a href={social.url} class="" target="_blank" rel="noopener noreferrer" title={social.name}>
        <Icon
          size={iconSize}
          type={social.name}
          iconClass="accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
        />
      </a>
    {/each}
  </aside>

  <!-- Menu Overlay -->
  {#if $isMenuOpen}
    <div
      in:blur={{ easing: sineOut, amount: 15, duration: 300 }}
      out:blur={{ easing: sineIn, amount: 15, duration: 300 }}
      class="fixed inset-0 bg-gradient-to-l to-cyan-500 from-blue-600 flex items-center justify-center p-4 z-40"
    >
      <div class="flex flex-col">
        {#each navItems as item}
          <button
            on:click={() => navigateToSection(item.route)}
            class="text-5xl md:text-6xl font-bold accent-color hover:text-amber-300 text-center leading-tight mb-4 hover:underline"
          >
            {item.title}
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Page Slot -->
  <slot />

  <!-- Footer ? -->
</main>
