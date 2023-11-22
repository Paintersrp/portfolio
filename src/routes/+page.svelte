<script lang="ts">
  import { flip } from 'svelte/animate';
  import { sineOut } from 'svelte/easing';

  import { projects as _projects, skills } from '$lib/const';
  import { AnimatedText, Icon, FullSection, SubSection } from '$comp';

  const messagesToAnimate = [
    'TypeScript',
    'Python',
    'React',
    'Svelte',
    'Backend Systems',
    'Cloud Services',
    'Database Management',
    'RESTful & GraphQL APIs',
    'Progressive Web Apps',
    'Machine Learning',
    'Data Engineering',
    'Data Visualization'
  ];

  let projects = _projects;

  const toggleProject = (toggledProject: Project) => {
    projects = projects.map((project) => {
      return project.title === toggledProject.title
        ? { ...project, isExpanded: !project.isExpanded }
        : project;
    });
  };
</script>

<div class="w-full">
  <FullSection id="landing">
    <h2 class="intro__tagline">
      I'm <span class="font-black accent-color">Ryan Painter</span>, Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Necessitatibus eos dolores modi quisquam voluptatum eum magni
      quod nostrum obcaecati blanditiis.
    </h2>
    <div class="container min-h-[70px]">
      <AnimatedText
        messages={messagesToAnimate}
        textClass="intro__tagline !font-bold accent-color"
      />
    </div>
    <h3 class="intro__contact">
      Contact me at:
      <a href="mailto:paintersrp@gmail.com" class="highlight-link">paintersrp@gmail.com</a>
    </h3>
  </FullSection>

  <SubSection id="background" heading="Background">
    <p class="mt-0 mb-6 text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sint ex, similique facere
      sequi accusamus assumenda tempore nulla dignissimos a facilis excepturi magni consequatur
      necessitatibus deleniti vero odio earum praesentium. Natus repellendus deserunt laborum
      dolores a unde ipsum neque nostrum voluptates sapiente, facilis in cum, provident veniam enim
      corporis similique!
    </p>
    <p class="mt-0 mb-6 text-gray-300">
      Lorem ipsum dolor sit amet <a href="/" class="underline-link text-white">consectetur</a>,
      adipisicing elit. Repellendus veritatis optio odio eveniet vel, quia quod. Consectetur,
      maiores cumque? Animi provident officiis veniam in minus natus assumenda veritatis incidunt
      aliquid.
    </p>

    <p class="mt-0 mb-6 text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione et consectetur rem
      temporibus nulla?
    </p>
  </SubSection>

  <!-- Interactive Grid of Skills, animated by FLIP -->
  <SubSection id="projects" heading="Projects">
    <div class="skills-grid">
      {#each projects as project (project.id)}
        <button
          animate:flip={{ duration: 400, easing: sineOut }}
          class={`skill-card text-amber-50 bg-white bg-opacity-[5%] rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-[10%] relative ${
            project.isExpanded ? 'justify-center p-6' : 'p-4'
          }`}
          class:expanded={project.isExpanded}
          on:click={() => toggleProject(project)}
        >
          <figure class="flex justify-center mb-4">
            <img
              class={`object-cover rounded shadow mx-auto  ${
                project.isExpanded ? 'w-full' : 'w-full'
              }`}
              src={project.imgUrl}
              alt={project.title}
            />
          </figure>
          <span class={`font-semibold ${project.isExpanded ? 'text-xl' : ' text-sm'}`}>
            {project.title}
          </span>
          {#if project.isExpanded}
            <div class="faster-in-blur mt-3 !flex">
              <a
                href={`/${project.id}`}
                class="min-w-[75px] px-2 md:px-4 my-auto py-2 text-sm bg-amber-300 bg-opacity-90 hover:bg-opacity-80 shadow-md text-white font-extrabold"
              >
                Details
              </a>
              <a
                on:click|stopPropagation
                href={project.repoUrl}
                class="min-w-[75px] px-2 md:px-4 my-auto py-2 text-sm bg-amber-300 bg-opacity-90 hover:bg-opacity-80 shadow-md text-white font-extrabold"
              >
                GitHub
              </a>
              <a
                on:click|stopPropagation
                href={project.liveDemo}
                class="min-w-[75px] px-2 md:px-4 my-auto py-2 text-sm bg-amber-300 bg-opacity-90 hover:bg-opacity-80 shadow-md text-white font-extrabold"
              >
                Demo
              </a>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </SubSection>

  <SubSection id="skills" heading="Skills">
    <div class="flex justify-between flex-wrap md:flex-nowrap">
      {#each skills as skillset, index (index)}
        <div class="mb-6 md:w-[47%]">
          <div class="text-gray-50 font-bold uppercase">{skillset.title}</div>
          <ul>
            {#each skillset.items as item, index (index)}
              <li class="my-[6px] text-sm text-gray-300">
                <div class="flex gap-3 items-center">
                  {#if item.icon}
                    <Icon type={item.icon} size="sm" iconClass="accent-color" />
                  {/if}
                  {item.text}
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </SubSection>
</div>

<style>
  :global(main) {
    background: #1d1d20 !important;
  }

  .skills-grid {
    --_space: 1rem;
    padding: 0;
    display: grid;
    gap: var(--_space);
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    grid-auto-rows: minmax(100px, auto);
  }

  @media (max-width: 1200px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    }
  }

  @media (max-width: 980px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    }
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    }
  }

  @media (max-width: 600px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
    }
  }

  .skill-card {
    position: relative;
  }

  .skill-card:hover {
    transform: scale(1.01);
  }

  .expanded {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media (max-width: 600px) {
    .expanded {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  .skill-details {
    display: none;
  }

  .expanded .skill-details {
    display: block;
  }
</style>
