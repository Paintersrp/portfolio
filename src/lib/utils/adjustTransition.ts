import type { NavigationTarget } from '@sveltejs/kit';
import type { Writable } from 'svelte/store';

export const adjustTransition = (
  to: NavigationTarget | null,
  directionStore: Writable<number>,
  routesAbove: string[],
  routesBelow: string[],
  defaultDirection: number = 750
) => {
  if (to) {
    const route = to.route.id;

    if (route) {
      if (routesAbove.includes(route)) {
        directionStore.set(750);
      } else if (routesBelow.includes(route)) {
        directionStore.set(-750);
      } else {
        directionStore.set(defaultDirection);
      }
    }
  }
};
