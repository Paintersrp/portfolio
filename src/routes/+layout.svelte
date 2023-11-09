<script lang="ts">
  import { writable } from 'svelte/store';
  import { Header, Gradient, MenuOverlay, Navigation, Socials } from '$comp';
  import '../app.css';
  import { onMount } from 'svelte';
  import { preloadCode } from '$app/navigation';

  export let data;

  const isMenuOpen = writable(false);

  function toggleMenu() {
    isMenuOpen.update((n) => !n);
  }

  const navItems: NavigationItems = [
    {
      title: 'Home',
      route: '/'
    },
    {
      title: 'Projects',
      route: '/projects'
    },
    {
      title: 'Blog',
      route: '/blog'
    },
    {
      title: 'Fourth',
      route: '/blog/fourth'
    }
  ];

  onMount(() => {
    const navRoutes = navItems.map((item) => item.route);
    preloadCode(...navRoutes);
  });

  $: pathname = data.url;
</script>

<Gradient>
  <Header {isMenuOpen} onClick={toggleMenu} />
  <Navigation {pathname} />
  <Socials />

  {#if $isMenuOpen}
    <MenuOverlay {navItems} onClick={toggleMenu} />
  {/if}

  <slot />
</Gradient>

<style>
  :root {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  }

  :global(body) {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  :global(body::-webkit-scrollbar) {
    display: none;
  }

  :global(main) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :global(p) {
    margin: 0;
    padding: 0;
  }
</style>
