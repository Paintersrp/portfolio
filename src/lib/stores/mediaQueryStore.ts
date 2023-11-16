/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export function mediaQueryStore(query: any) {
  const store = writable(false);

  onMount(() => {
    const mediaQueryList = window.matchMedia(query);

    const onChange = () => store.set(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', onChange);
    onChange();

    return () => mediaQueryList.removeEventListener('change', onChange);
  });

  return { subscribe: store.subscribe };
}
