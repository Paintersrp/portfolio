<script lang="ts">
  import { flip } from 'svelte/animate';
  import { blur } from 'svelte/transition';

  export let displayedProjects: Project[];
  export let onClick: (project: Project) => void;
</script>

<div
  class="overflow-hidden w-full lg:space-x-4 lg:flex-row items-center flex-col space-x-0 space-y-4 lg:space-y-0 sm:items-center hidden md:flex"
>
  {#each displayedProjects as project (project.id)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      role="button"
      tabindex="0"
      class="project-card flex flex-col min-w-[225px] max-w-[225px] md:min-w-[300px] md:max-w-[300px] items-center justify-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadowhover:-translate-y-2 hover:scale-105 hover:bg-opacity-20 hover:shadow-lg active:translate-y-0 active:scale-100 p-4 cursor-pointer"
      on:click={() => onClick(project)}
      in:blur={{ duration: 400, delay: 400 }}
      out:blur={{ duration: 400 }}
      animate:flip={{ duration: 1000, delay: 0 }}
    >
      <div class="w-[200px] h-36 mb-4 overflow-hidden rounded-lg">
        <img src={project.imgUrl} alt={project.title} class="w-full h-full object-cover" />
      </div>

      <h3 class="text-lg md:text-xl font-semibold accent-color text-center mb-2">
        {project.title}
      </h3>
      <p class="hidden md:block text-md text-white text-center whitespace-pre-wrap text-sm">
        {project.description}
      </p>
    </div>
  {/each}
</div>

<style>
  .project-card:hover {
    transform: translateY(-5px);
  }
</style>
