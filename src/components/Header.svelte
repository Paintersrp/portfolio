<script lang="ts">
  import type { Writable } from 'svelte/store';
  import MenuIcon from './MenuIcon.svelte';

  export let isMenuOpen: Writable<boolean>;
  export let onClick: () => void;
</script>

<header class="p-1 fixed flex top-0 right-0 justify-end z-50">
  <MenuIcon open={$isMenuOpen} {onClick} />
</header>
