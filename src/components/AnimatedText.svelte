<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { sineIn, sineOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  export let messages: string[];
  export let textClass: string = '';
  export let duration: number = 2000;

  let index = 0;
  let roller: NodeJS.Timeout;

  onMount(() => {
    roller = setInterval(() => {
      if (index === messages.length - 1) index = 0;
      else index++;
    }, duration);
  });

  onDestroy(() => {
    clearInterval(roller);
  });
</script>

{#key index}
  <h1
    class={textClass}
    in:slide={{ duration: 400, delay: 400, easing: sineOut }}
    out:slide={{ duration: 400, easing: sineIn }}
  >
    {messages[index]}
  </h1>
{/key}
