<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { cubicIn, linear, sineIn, sineOut } from 'svelte/easing';
  import { blur, slide } from 'svelte/transition';

  export let selectedProject: Writable<Project>;
</script>

<section class="items-center bg-white bg-opacity-10 shadow-lg rounded-lg p-8 mb-6 w-full max-w-2xl">
  {#key $selectedProject}
    <div
      class="flex flex-col space-y-1"
      in:slide={{ duration: 400, delay: 400, easing: linear }}
      out:slide={{ duration: 400, easing: linear }}
    >
      <img
        src={$selectedProject.imgUrl}
        alt={$selectedProject.title}
        class="w-full md:w-1/3 lg:w-1/3 mx-auto mb-4 object-cover rounded-lg"
      />
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-bold accent-color mb-4 text-center">{$selectedProject.title}</h2>

        <p class="text-white mb-2">{$selectedProject.description}</p>
        <p class="text-white">{$selectedProject.details}</p>
      </div>
    </div>
  {/key}
</section>
