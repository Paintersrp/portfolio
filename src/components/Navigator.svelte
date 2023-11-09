<script lang="ts">
  import { fly } from 'svelte/transition';
  import Icon from './Icon.svelte';

  export let position: 'top' | 'bottom';
  export let link: string;

  let yValue = position === 'top' ? -50 : 50;
  let classes = `fixed ${
    position === 'top' ? 'top-0' : 'bottom-0'
  } left-0 w-full p-4 z-40 flex justify-center ${position === 'top' ? 'pt-4' : 'pb-4'}`;
</script>

<div class={classes} in:fly={{ y: yValue, delay: 700 }} out:fly={{ y: yValue, duration: 700 }}>
  <a
    href={link}
    class="bg-cyan-900 bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300 flex flex-col"
    aria-label="Navigate"
  >
    <Icon type={position === 'top' ? 'up' : 'down'} iconClass="text-white" size="sm" />
  </a>
</div>
