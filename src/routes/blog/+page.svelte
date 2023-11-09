<script lang="ts">
  import type { NavigationTarget } from '@sveltejs/kit';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { Content } from '$comp';
  import { latestDirIn, latestDirOut } from '$lib/stores';
  import type { Writable } from 'svelte/store';

  export let data;

  const updateTransitionDirections = (
    to: NavigationTarget | null,
    directionStore: Writable<number>
  ) => {
    if (to) {
      const route = to.route.id;

      if (route === '/' || route === '/projects') {
        directionStore.set(750);
      } else {
        directionStore.set(-750);
      }
    }
  };

  beforeNavigate(({ to }) => {
    updateTransitionDirections(to, latestDirOut);
  });

  afterNavigate(({ to }) => {
    updateTransitionDirections(to, latestDirIn);
  });
</script>

<Content yIn={$latestDirIn} yOut={$latestDirOut}>
  <main class="flex-grow p-4 md:p-12 space-y-6 max-w-5xl mx-auto mt-8">
    <h1 class="text-5xl font-bold text-center text-white mb-12">Latest</h1>

    <div class="divide-y divide-gray-200">
      {#each data.posts as post}
        <article class="py-5 group">
          <a href={`/blog/${post.path}`} class="flex flex-col md:flex-row items-center gap-4">
            <img
              src={post.meta.coverImage}
              alt={post.meta.title}
              class="object-cover w-full md:w-48 h-32 rounded-lg shadow-md transform group-hover:scale-105 transition-transform"
            />
            <div class="flex flex-col justify-between">
              <h2 class="text-xl font-semibold text-white group-hover:underline">
                {post.meta.title}
              </h2>
              <p class="text-gray-300">{post.meta.excerpt}</p>
              <time class="block mt-2 text-sm font-medium text-gray-400">
                {new Date(post.meta.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </a>
        </article>
      {/each}
    </div>
  </main>
</Content>
