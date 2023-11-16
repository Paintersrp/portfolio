<script lang="ts">
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { latestDirIn, latestDirOut } from '$lib/stores';
  import { adjustTransition } from '$lib/utils';
  import { Content } from '$comp';

  export let data;

  // let searchQuery = '';
  // let selectedCategory = '';
  // let posts = [];
  // let page = 1;
  // let totalPages = 1;

  const routesAbove = ['/', '/projects'];
  const routesBelow = [''];

  beforeNavigate(({ to }) => {
    adjustTransition(to, latestDirOut, routesAbove, routesBelow, -750);
  });

  afterNavigate(({ to }) => {
    adjustTransition(to, latestDirIn, routesAbove, routesBelow, -750);
  });
</script>

<Content yIn={$latestDirIn} yOut={$latestDirOut}>
  <main class="flex-grow p-4 md:p-12 space-y-6 max-w-5xl mx-auto mt-8">
    <h1 class="text-5xl font-bold text-center text-white mb-12">Latest</h1>

    <div class="flex gap-4">
      <!-- Filter and Search Section -->
      <aside class="w-1/4">
        <!-- Category Filter -->
        <!-- <select on:change={handleCategoryChange} class="mb-4 w-full p-2 rounded">
          <option value="">All Categories</option>
          {#each data.categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select> -->
        <!-- Search Input -->
        <!-- <input
          type="text"
          placeholder="Search articles..."
          bind:value={searchQuery}
          on:input={handleSearch}
          class="w-full p-2 mb-4 rounded"
        /> -->
      </aside>

      <!-- Blog List Section -->
      <section class="w-3/4">
        <div class="divide-y divide-gray-200">
          {#each data.posts as post}
            <article class="py-5 group">
              <a href={`/blog/${post.slug}`} class="flex flex-col md:flex-row items-center gap-4">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  class="object-cover w-full md:w-48 h-32 rounded-lg shadow-md transform group-hover:scale-105 transition-transform"
                />
                <div class="flex flex-col justify-between">
                  <h2 class="text-xl font-semibold text-white group-hover:underline">
                    {post.title}
                  </h2>
                  <p class="text-gray-300">{post.excerpt}</p>
                  <time class="block mt-2 text-sm font-medium text-gray-400">
                    {new Date(post.date).toLocaleDateString(undefined, {
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
      </section>
    </div>
  </main>
</Content>
