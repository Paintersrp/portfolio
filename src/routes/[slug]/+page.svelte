<script lang="ts">
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  import { Icon, FullSection, SubSection, Tooltip } from '$comp';

  export let data;

  let project: Project = data.project;

  onMount(() => {
    project.roadmap[0].isExpanded = true;
  });

  function toggleDetails(index: number) {
    project.roadmap[index].isExpanded = !project.roadmap[index].isExpanded;
  }

  function normalizeDate(dateStr: string): string {
    const date = new Date(dateStr);
    return `${date.toLocaleString('default', {
      month: 'long'
    })} ${date.getDate()}, ${date.getFullYear()}`;
  }
</script>

<FullSection id="project-start">
  <div class="w-full mx-auto flex flex-col md:flex-row p-4 items-center">
    <figure class="flex-grow-0 flex-shrink-0 md:flex-grow md:flex-shrink w-full md:w-3/5">
      <img
        src={project.imgUrl}
        alt={project.title}
        class="rounded-lg shadow-md w-full h-auto object-cover mb-4 md:mb-0"
      />
    </figure>
    <div class="flex-grow md:w-[37.5%] text-center md:text-left md:ml-6">
      <div class="text-sm text-gray-300 mb-2">
        <time datetime={project.date}>
          {`${normalizeDate(project.date)} - ${
            normalizeDate(project.roadmap[0]?.releaseDate) ?? ''
          }`}
        </time>
      </div>
      <h1 class="text-4xl font-bold mb-4 accent-color transition duration-300">
        {project.title}
      </h1>
      <p class="text-base mb-4 leading-relaxed">{project.description}</p>
      <div class="text-sm text-gray-300 mb-6">
        <p>{project.details}</p>
      </div>
      <div class="flex justify-center md:justify-start gap-4">
        <a type="button" href={project.repoUrl} class="">
          <Tooltip content="Repository">
            <Icon
              type="github"
              size="lg"
              iconClass="hover:text-opacity-90 text-amber-300 scale-95 hover:scale-100 transition-transform ease-in-out"
            />
          </Tooltip>
        </a>
        <a href={project.liveDemo} type="button" class="">
          <Tooltip content="Demo">
            <Icon
              type="deployed"
              size="lg"
              iconClass="hover:text-opacity-90 text-amber-300 scale-95 hover:scale-100 transition-transform ease-in-out"
            />
          </Tooltip>
        </a>
      </div>
    </div>
  </div>
</FullSection>

<SubSection id="project-roadmap" heading="Roadmap">
  <div class="container mx-auto">
    {#each project.roadmap as roadmapItem, index}
      <div class="mb-8">
        <div class="flex justify-between items-center">
          <h4 class="text-xl font-bold text-white">{roadmapItem.version}</h4>
          <span class="text-sm text-gray-300">{roadmapItem.status}</span>
        </div>
        <div class="mt-2">
          <div class="h-2 bg-gray-500 rounded-full">
            <div class="bg-amber-300 h-2 rounded-full" style="width: {roadmapItem.progress}%" />
          </div>
          <p class="text-gray-200 mt-2">{roadmapItem.description}</p>

          <button class="accent-color text-sm mt-2" on:click={() => toggleDetails(index)}>
            {roadmapItem.isExpanded ? 'Hide Details' : 'View Details'}
          </button>

          <!-- Roadmap Item Details -->
          {#if roadmapItem.isExpanded}
            <div transition:slide class="mt-2 bg-gray-800 p-4 rounded-lg shadow-lg">
              <div class="space-y-4">
                <div>
                  <h5 class="font-semibold text-amber-300">Development Journey</h5>
                  <p class="text-gray-300">{roadmapItem.developmentJourney}</p>
                </div>
                <div>
                  <h5 class="font-semibold text-amber-300">Feature Focus</h5>
                  <ul class="list-disc pl-5 text-gray-300">
                    {#each roadmapItem.featureFocus as feature}
                      <li>{feature}</li>
                    {/each}
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-amber-300">Technical Challenges</h5>
                  <p class="text-gray-300">{roadmapItem.technicalChallenges}</p>
                </div>
                <div>
                  <h5 class="font-semibold text-amber-300">Learning and Skills Acquired</h5>
                  <p class="text-gray-300">{roadmapItem.skillsLearned}</p>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</SubSection>

<SubSection id="project-tech" heading="Technology">
  <div class="flex justify-between flex-wrap md:flex-nowrap">
    <!-- Stack -->
    <div class="mb-6 md:w-[47%]">
      <h3 class="text-gray-50 font-bold uppercase">Stack</h3>
      <ul class="text-gray-300">
        {#each project.stack as stack}
          <li class="my-[6px] text-sm">{stack}</li>
        {/each}
      </ul>
    </div>

    <!-- Concept -->
    <div class="mb-6 md:w-[47%]">
      <h3 class="text-gray-50 font-bold uppercase">Concepts</h3>
      <ul class="text-gray-300">
        {#each project.concepts as concept}
          <li class="my-[6px] text-sm">{concept}</li>
        {/each}
      </ul>
    </div>

    <!-- Libraries -->
    <div class="mb-6 md:w-[47%]">
      <h3 class="text-gray-50 font-bold uppercase">Libraries</h3>
      <ul class="text-gray-300">
        {#each project.libraries as library}
          <li class="my-[6px] text-sm">{library}</li>
        {/each}
      </ul>
    </div>
  </div>
</SubSection>

<SubSection id="project-highlights" heading="Highlights">
  <div>Screenshots (expandable)</div>
  <div>REPLs</div>
</SubSection>

<SubSection id="project-highlights" heading="Highlights">
  <div>Screenshots (expandable)</div>
  <div>REPLs</div>
</SubSection>

<style>
</style>
