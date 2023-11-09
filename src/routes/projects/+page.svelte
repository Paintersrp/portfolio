<script lang="ts">
  import { slide } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';
  import type { NavigationTarget } from '@sveltejs/kit';
  import { writable, type Writable } from 'svelte/store';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { projectsDirIn, projectsDirOut } from '$lib/stores';
  import { Content } from '$comp';
  import { projects } from './const';

  const selectedProject = writable<Project>(projects[0]);

  const selectProject = (project: Project) => {
    $selectedProject = project;
  };

  const updateTransitionDirections = (
    to: NavigationTarget | null,
    directionStore: Writable<number>
  ) => {
    if (to) {
      const route = to.route.id;

      if (route === '/') {
        directionStore.set(750);
      } else if (route === '/blog') {
        directionStore.set(-750);
      }
    }
  };

  beforeNavigate(({ to }) => {
    updateTransitionDirections(to, projectsDirOut);
  });

  afterNavigate(({ to }) => {
    updateTransitionDirections(to, projectsDirIn);
  });
</script>

<Content yIn={$projectsDirIn} yOut={$projectsDirOut}>
  <div
    class="flex h-full w-full max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden p-3"
    style="background: rgba(255, 255, 255, 0.05);"
  >
    <!-- Sidebar Project Selection -->
    <aside class="w-1/3 lg:w-1/3 overflow-y-auto pr-2 text-white hidden md:block">
      <nav class="space-y-2">
        {#each projects as project (project.id)}
          <button
            on:click={() => selectProject(project)}
            disabled={project.id === $selectedProject.id}
            class={`group w-full text-left flex items-center p-3 transition-colors duration-150 rounded-lg ${
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
    <div class="w-full">
      {#key $selectedProject}
        <section
          class="flex flex-col justify-center text-white"
          in:slide={{ duration: 400, easing: sineOut }}
          out:slide={{ duration: 400, easing: sineOut }}
        >
          <div class="bg-white bg-opacity-10 rounded-lg p-6 space-y-4">
            <img
              class="w-2/3 h-64 object-cover rounded-lg shadow mx-auto"
              src={$selectedProject.imgUrl}
              alt={$selectedProject.title}
            />
            <h1 class="text-3xl font-bold text-center accent-color">{$selectedProject.title}</h1>
            <p class="text-base">{$selectedProject.details}</p>
            <div class="flex justify-center space-x-4 mt-6">
              <a
                href={$selectedProject.repoUrl}
                class="px-4 py-2 text-sm font-bold rounded-md bg-cyan-700 bg-opacity-25 hover:bg-cyan-900 hover:bg-opacity-25 shadow-md"
              >
                GitHub
              </a>
              <a
                href={$selectedProject.liveDemo}
                class="px-4 py-2 text-sm font-bold rounded-md bg-cyan-700 bg-opacity-25 hover:bg-cyan-900 hover:bg-opacity-25 shadow-md"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-2">
            <div class="bg-white bg-opacity-10 rounded-lg p-6">
              <h2 class="text-2xl font-semibold mb-4 text-cyan-100 text-center">Features</h2>
              <div class="flex flex-wrap gap-2">
                {#each $selectedProject.features as feature}
                  <span
                    class="bg-cyan-900 bg-opacity-25 text-cyan-100 rounded-full px-4 py-1 text-xs font-medium"
                    >{feature}</span
                  >
                {/each}
              </div>
            </div>

            <div class="bg-white bg-opacity-10 rounded-lg p-6">
              <h2 class="text-2xl font-semibold mb-4 text-cyan-100 text-center">Technologies</h2>
              <div class="flex flex-wrap gap-2">
                {#each $selectedProject.technologies as technology}
                  <span
                    class="bg-cyan-900 bg-opacity-25 text-cyan-100 rounded-full px-4 py-1 text-xs font-medium"
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
