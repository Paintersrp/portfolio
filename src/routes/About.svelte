<script lang="ts">
  import { inview } from 'svelte-inview';
  import { Icon } from '$comp';

  export let handleAboutInView: (event: CustomEvent<ObserverEventDetails>) => void;
</script>

<section
  id="about"
  class="text-white py-10"
  use:inview={{ threshold: 0.1 }}
  on:inview_change={(event) => handleAboutInView(event)}
>
  <div class="container mx-auto px-6">
    <!-- About Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">More About Me</h2>
      <p class="text-xl font-light accent-color mb-8">
        Discover my journey, interests, and achievements
      </p>
    </div>

    <!-- Professional Background -->
    <div class="container flex flex-col md:flex-row justify-center mb-10 gap-8 mx-auto px-6">
      <div class="flex-1 flex-grow px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20">
        <Icon size="xl" type="code" iconClass="accent-color mb-3" />
        <figure class="px-4">
          <img
            src="https://source.unsplash.com/random/600x400/?code"
            alt="Project"
            class="w-full h-32 md:h-64 object-cover rounded shadow mx-auto"
          />
        </figure>
        <h3 class="text-2xl font-semibold mt-3 mb-3 accent-color">Professional Background</h3>
        <p class="text-base text-white mb-4">
          With a strong foundation in TypeScript, Python, and React, I've contributed to numerous
          projects ranging from web applications to data-driven platforms.
        </p>
      </div>

      <!-- Personal Interests -->
      <div class="flex-1 flex-grow px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20">
        <Icon size="xl" type="landscape" iconClass="accent-color mb-3" />
        <figure class="px-4">
          <img
            src="https://source.unsplash.com/random/600x400/?hiking"
            alt="Project"
            class="w-full h-32 md:h-64 object-cover rounded shadow mx-auto"
          />
        </figure>
        <h3 class="text-2xl font-semibold mt-3 mb-3 accent-color">Personal Interests</h3>
        <p class="text-base text-white mb-4">
          Outside of coding, I'm passionate about hiking, open-source contribution, and exploring
          new technologies.
        </p>
      </div>
    </div>
  </div>
</section>
