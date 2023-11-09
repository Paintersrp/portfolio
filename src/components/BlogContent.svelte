<script lang="ts">
  import { fade } from 'svelte/transition';

  export let duration: number = 500;
  export let delay: number = 700;
</script>

<div
  class="flex-grow flex flex-col items-center justify-center p-12 md:p-12 space-y-6 max-w-full lg:p-4 mx-auto overflow-x-hidden overflow-y-hidden w-full"
  in:fade={{ duration, delay }}
  out:fade={{ duration }}
>
  <slot />
</div>
