<script lang="ts">
  import { inview } from 'svelte-inview';
  import { Icon } from '$comp';

  export let handleAboutInView: (event: CustomEvent<ObserverEventDetails>) => void;
</script>

<section
  id="about"
  class="text-white py-10 px-2 md:px-0"
  use:inview={{ threshold: 0.1 }}
  on:inview_change={(event) => handleAboutInView(event)}
>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- About Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">More About Me</h2>
      <p class="text-lg sm:text-xl font-light accent-color mb-8">
        Discover my journey, interests, and achievements
      </p>
    </div>

    <!-- Professional Background -->
    <div
      class="flex flex-col lg:flex-row justify-center mb-10 gap-6 md:gap-8 items-center md:items-start"
    >
      <div
        class="flex-1 px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20 max-w-[550px] mb-4 md:mb-0"
      >
        <Icon size="lg" type="code" iconClass="accent-color mb-3 mt-3" />
        <figure class="px-0 sm:px-6">
          <img
            src="https://source.unsplash.com/random/600x400/?code"
            alt="Project"
            class="w-full lg:w-full h-64 object-fit rounded shadow mx-auto"
          />
        </figure>
        <h3 class="text-lg lg:text-xl font-semibold mt-3 mb-3 accent-color">
          Professional Background
        </h3>
        <p class="text-sm lg:text-base text-white mb-4 font-light">
          With a strong foundation in TypeScript, Python, and React, I've contributed to numerous
          projects ranging from web applications to data-driven platforms.
        </p>
      </div>

      <!-- Personal Interests -->
      <div class="flex-1 px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20 max-w-[550px]">
        <Icon size="lg" type="landscape" iconClass="accent-color mb-3" />
        <figure class="px-0 sm:px-6">
          <img
            src="https://source.unsplash.com/random/600x400/?hiking"
            alt="Project"
            class="w-full h-64 object-cover rounded shadow mx-auto"
          />
        </figure>
        <h3 class="text-lg lg:text-xl font-semibold mt-3 mb-3 accent-color">Personal Interests</h3>
        <p class="text-sm lg:text-base text-white mb-4 font-light">
          Outside of coding, I'm passionate about hiking, open-source contribution, and exploring
          new technologies.
        </p>
      </div>
    </div>
  </div>
</section>
