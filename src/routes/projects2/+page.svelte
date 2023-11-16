<script lang="ts">
  import { fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  import { writable } from 'svelte/store';
  
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { projectsDirIn, projectsDirOut } from '$lib/stores';
  import { adjustTransition } from '$lib/utils';
  import { Carousel, Content } from '$comp';
  import { projects } from '../projects/const';

  const selectedProject = writable<Project>(projects[0]);
  const routesAbove = ['/'];
  const routesBelow = ['/blog'];

  const selectProject = (project: Project) => {
    $selectedProject = project;
  };

  beforeNavigate(({ to }) => {
    adjustTransition(to, projectsDirOut, routesAbove, routesBelow);
  });

  afterNavigate(({ to }) => {
    adjustTransition(to, projectsDirIn, routesAbove, routesBelow);
  });
</script>

<Content yIn={$projectsDirIn} yOut={$projectsDirOut}>
  <div
    class="flex flex-col md:flex-row h-full w-full max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden p-3"
    style="background: rgba(255, 255, 255, 0.05);"
  >
    <!-- Mobile Carousel Display -->
    <Carousel {projects} />

    <!-- Sidebar Project Selection -->
    <aside class="w-full md:w-1/3 lg:w-1/3 overflow-y-auto pr-2 text-white hidden md:block">
      <nav class="space-y-2">
        {#each projects as project (project.id)}
          <button
            on:click={() => selectProject(project)}
            disabled={project.id === $selectedProject.id}
            class={`w-full text-left flex items-center p-3 transition-colors duration-150 rounded-lg ${
              project.id === $selectedProject.id ? '' : 'hover:!bg-cyan-700'
            } ${project.id === $selectedProject.id ? '' : 'hover:!bg-opacity-25'}`}
            style={project.id === $selectedProject.id
              ? 'background: rgba(255, 255, 255, 0.3);'
              : 'background: rgba(255, 255, 255, 0.1);'}
          >
            <img
              src={project.imgUrl}
              alt={project.title}
              class="w-14 h-14 object-cover rounded-lg mr-3"
            />
            <div>
              <h3 class="font-semibold text-sm">{project.title}</h3>
              <p class="text-xs">{project.technologies.join(', ')}</p>
            </div>
          </button>
        {/each}
      </nav>
    </aside>

    <!-- Project Showcase -->
    <div class="relative w-full min-h-[680px] hidden md:block">
      {#key $selectedProject}
        <section
          class="showcase-item flex flex-col justify-center text-white"
          in:fly={{ x: '-5%', duration: 400, delay: 400, easing: cubicOut }}
          out:fly={{ x: '100%', duration: 400, easing: cubicIn }}
        >
          <div class="bg-white bg-opacity-10 rounded-lg p-4 md:p-6 space-y-2 md:space-y-4">
            <img
              class="w-3/4 md:w-2/3 h-32 md:h-64 object-cover rounded-lg shadow mx-auto"
              src={$selectedProject.imgUrl}
              alt={$selectedProject.title}
            />
            <h1 class="text-xl md:text-3xl font-bold text-center accent-color">
              {$selectedProject.title}
            </h1>
            <p class="text-sm md:text-base">{$selectedProject.details}</p>
            <div class="flex justify-center space-x-3 md:space-x-4 mt-2 md:mt-6">
              <a
                href={$selectedProject.repoUrl}
                class="px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-25 hover:bg-cyan-900 hover:bg-opacity-25 shadow-md"
              >
                GitHub
              </a>
              <a
                href={$selectedProject.liveDemo}
                class="px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-25 hover:bg-cyan-900 hover:bg-opacity-25 shadow-md"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-2">
            <div class="bg-white bg-opacity-10 rounded-lg p-2 md:p-6">
              <h2 class="text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-white text-center">
                Features
              </h2>
              <div class="flex flex-wrap gap-1 md:gap-2">
                {#each $selectedProject.features as feature}
                  <span
                    class="bg-cyan-900 bg-opacity-25 text-cyan-100 rounded-full px-2 md:px-4 py-1 text-[11px] md:text-xs font-bold md:font-medium"
                    >{feature}</span
                  >
                {/each}
              </div>
            </div>
            <div class="bg-white bg-opacity-10 rounded-lg p-2 md:p-6">
              <h2 class="text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-white text-center">
                Technologies
              </h2>
              <div class="flex flex-wrap gap-1 md:gap-2">
                {#each $selectedProject.technologies as technology}
                  <span
                    class="bg-cyan-900 bg-opacity-25 text-cyan-100 rounded-full px-2 md:px-4 py-1 text-[11px] md:text-xs font-bold md:font-medium"
                  >
                    {technology}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </section>
      {/key}
    </div>
  </div>
</Content>

<style>
  .showcase-item {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>
