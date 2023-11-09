<script lang="ts">
  import { sineIn, sineOut } from 'svelte/easing';
  import { blur } from 'svelte/transition';
  import MenuOverlayLink from './MenuOverlayLink.svelte';

  export let navItems: NavigationItems;
  export let onClick: () => void;
</script>

<div
  in:blur={{ easing: sineOut, amount: 15, duration: 300 }}
  out:blur={{ easing: sineIn, amount: 15, duration: 300 }}
  class="fixed inset-0 bg-gradient-to-br to-cyan-500 from-blue-700 flex items-center justify-center p-4 z-40"
>
  <div class="flex flex-col" data-sveltekit-preload-data="tap" data-sveltekit-preload-code="tap">
    {#each navItems as item}
      <MenuOverlayLink {onClick} link={item.route} linkText={item.title} />
    {/each}
  </div>
</div>
