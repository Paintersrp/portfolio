<script lang="ts">
  import { fly } from 'svelte/transition';

  export let yIn: number;
  export let yOut: number;
</script>

<div in:fly={{ x: yIn, duration: 500, delay: 700 }} out:fly={{ x: yOut, duration: 500 }}>
  <slot />
</div>
