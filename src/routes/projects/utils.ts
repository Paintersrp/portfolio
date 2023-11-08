import type { NavigationTarget } from '@sveltejs/kit';
import type { Writable } from 'svelte/store';

export const updateTransitionDirections = (
  to: NavigationTarget | null,
  directionStore: Writable<number>
) => {
  if (to) {
    const route = to.route.id;

    if (route === '/') {
      directionStore.set(750);
    } else if (route === '/third') {
      directionStore.set(-750);
    }
  }
};
