<script lang="ts">
  import { browser } from '$app/environment';
  import Content from '$comp/Content.svelte';

  export let data;

  console.log(data);

  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
    data.meta;
  const { PostContent } = data;

  const navigateBack = () => {
    if (browser) window.history.back();
  };
</script>

<!-- SEO -->
<svelte:head>
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />

  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={excerpt} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<Content yIn={750} yOut={750}>
  <article class="flex-grow flex flex-col p-4 md:p-12 space-y-6 max-w-3xl mx-auto mt-16">
    <figure class="flex justify-center">
      <img
        src={coverImage}
        alt={title}
        class="w-4/5 object-cover rounded"
        style={`aspect-ratio: ${coverWidth} / ${coverHeight};`}
      />
    </figure>

    <div class="text-white">
      <h1 class="text-4xl font-bold text-center my-8">{title}</h1>
      <div class="meta space-y-2 text-sm text-gray-200">
        <p><strong>Published:</strong> {date}</p>
        <p><strong>Updated:</strong> {updated}</p>
      </div>
    </div>

    <!-- Markdown Content as Svelte Component -->
    <div class="prose">
      <svelte:component this={PostContent} />
    </div>

    {#if categories}
      <aside class="post-footer mt-12">
        <h2 class="text-2xl font-semibold mb-4 text-white">Posted in:</h2>
        <ul class="flex flex-wrap gap-2">
          {#each categories as category}
            <li>
              <a
                href="/blog/category/{category}/"
                class="text-blue-200 hover:text-blue-100 hover:underline"
              >
                {category}
              </a>
            </li>
          {/each}
        </ul>
      </aside>
    {/if}
  </article>
</Content>
