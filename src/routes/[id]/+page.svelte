<script lang="ts">
  import { linear } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  import { FullSection, SubSection } from '$comp';
  export let data;

  //   let project: Project = data.project;
  let project = {
    id: 1,
    date: '11/10/2021',
    title: 'Personal Blog',
    description: 'Dive into my personal musings on life, technology, and continuous learning.',
    details:
      'This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.',
    concept: ['User-friendly UI', 'Intuitive Navigation', 'Engaging Content'],
    stack: ['SvelteKit', 'TailwindCSS', 'SEO Auditing Tools'],
    libraries: ['DaisyUI', 'Chart.js'],

    roadmap: [
      {
        version: 'v2',
        description: 'Interactive Features',
        status: 'In Progress',
        releaseDate: '06/30/2023',
        progress: 60,
        isExpanded: true,
        developmentJourney:
          'The focus for Version 2.0 is on enhancing user engagement through interactive features. This phase involves integrating a real-time commenting system, introducing user polls, and improving the overall user experience based on feedback from Version 1.0.',
        featureFocus: ['Real-Time Commenting System', 'User Polls', 'Performance Optimization'],
        technicalChallenges:
          'Key challenges include implementing real-time features without compromising website performance and maintaining user privacy.',
        skillsLearned:
          'Currently enhancing skills in real-time web technologies and learning about user data protection and privacy laws.'
      },
      {
        version: 'v1',
        description: 'Initial Launch',
        status: 'Completed',
        releaseDate: '01/02/2022',
        progress: 100,
        isExpanded: false,
        developmentJourney:
          'Version 1.0 marked the official launch of the blog. The primary focus was on establishing a solid foundation with essential blogging functionalities. The journey involved extensive planning, UI/UX design iterations, and initial SEO setup.',
        featureFocus: ['Basic Blogging Functionality', 'Responsive Design', 'SEO Foundations'],
        technicalChallenges:
          'Challenges included ensuring cross-browser compatibility and implementing a responsive design that adapts to various screen sizes.',
        skillsLearned:
          'Gained proficiency in SvelteKit and TailwindCSS, along with a deeper understanding of SEO principles.'
      }
    ],
    imgUrl: 'https://source.unsplash.com/random/600x400/?website',
    repoUrl: 'https://github.com/yourusername/personal-blog',
    isExpanded: false,
    liveDemo: 'https://yourpersonalblog.com'
  };

  function toggleDetails(index: number) {
    project.roadmap[index].isExpanded = !project.roadmap[index].isExpanded;
  }
</script>

<!-- <SubSection id={`project-${project.id}`} heading={`${project.title} JSON Data`}>
  <pre class="whitespace-pre-wrap accent-color tracking-wide text-xs">
    {JSON.stringify(project, undefined, 2)}
  </pre>
</SubSection> -->

<FullSection id="project-start">
  <div class="w-full mx-auto flex flex-col md:flex-row p-4">
    <figure class="flex">
      <img
        src={project.imgUrl}
        alt={project.title}
        class="rounded-lg shadow-md mb-4 md:mb-0 object-fit"
      />
    </figure>
    <div class="text-center md:text-left md:ml-6">
      <h1 class="text-4xl font-bold mb-2 accent-color">{project.title}</h1>
      <p class="text-lg mb-2">{project.description}</p>
      <div class="container mx-auto text-base mb-4">
        <p class="text-gray-300">{project.details}</p>
      </div>
      <time class="text-sm text-gray-300">Date: {project.date}</time>
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

          <!-- Roadmap Item Details -->
          {#if roadmapItem.isExpanded}
            <div transition:slide class="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
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

          <button class="accent-color text-sm mt-2" on:click={() => toggleDetails(index)}>
            {roadmapItem.isExpanded ? 'Hide Details' : 'View Details'}
          </button>
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
        {#each project.concept as concept}
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
<SubSection id="project-stats" heading="Statistics">
  <div class="mb-20">Git Statistics</div>
</SubSection>

<style>
</style>
