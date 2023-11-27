<script lang="ts">
  import tippy, { type Instance, type Props } from 'tippy.js';
  import { onMount } from 'svelte';
  import 'tippy.js/dist/tippy.css';
  import 'tippy.js/themes/material.css';
  import 'tippy.js/animations/scale.css';

  export let content: string;
  export let placement: Props['placement'] = 'bottom';
  export let animation: Props['animation'] = 'scale';
  export let arrow: boolean | string = false;
  export let delay: number | [number, number] = 0;
  export let options: Partial<Props> = {};

  let tooltipElement: HTMLElement;
  let tippyInstance: Instance<Props>;

  onMount(() => {
    tippyInstance = tippy(tooltipElement, {
      content,
      placement,
      animation,
      arrow,
      delay,
      theme: 'material',
      ...options
    });
  });
</script>

<span bind:this={tooltipElement}>
  <slot />
</span>
