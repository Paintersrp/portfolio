<script lang="ts">
  import { fly } from 'svelte/transition';

  export let yIn: number;
  export let yOut: number;
</script>

<div
  class="flex-grow flex flex-col items-center justify-center p-12 md:p-12 space-y-6 max-w-full lg:p-4 mx-auto overflow-x-hidden overflow-y-hidden w-full"
  in:fly={{ y: yIn, duration: 500, delay: 700 }}
  out:fly={{ y: yOut, duration: 500 }}
>
  <slot />
</div>
