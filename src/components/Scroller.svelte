<script lang="ts">
  import { dragscroll } from '$lib/actions';

  export let snap: boolean = false;
</script>

<div
  class="media-scroller snaps-inline"
  class:snaps-inline={snap}
  use:dragscroll={{ axis: 'x', snap, snapOffset: 20 }}
>
  <slot />
</div>

<style>
  .media-scroller {
    --_space: 2rem;
    padding: 0 var(--_space) var(--_space);

    display: grid;
    gap: var(--_space);
    grid-auto-flow: column;
    grid-auto-columns: 21%;

    overflow-x: auto;
    overscroll-behavior-inline: contain;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .media-scroller::-webkit-scrollbar {
    display: none;
  }

  .media-scroller:active {
    cursor: grabbing;
  }

  @media (max-width: 600px) {
    .media-scroller {
      --_space: 1rem;
      grid-auto-columns: 27.5%;
    }
  }

  .snaps-inline {
    /* scroll-snap-type: inline mandatory; */
    scroll-padding-inline: var(--_space, 1rem);
  }

  .snaps-inline > * {
    scroll-snap-align: start;
  }
</style>
