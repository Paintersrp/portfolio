<script lang="ts">
  import { flip } from 'svelte/animate';

  import { projects as _projects, skills } from '$lib/const';
  import { AnimatedText, Icon, FullSection, SubSection, Tooltip } from '$comp';

  const messagesToAnimate = [
    'TypeScript',
    'Python',
    'Java',
    'React',
    'Svelte',
    'Vue',
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
    <h2
      class="font-light max-w-[700px] text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]"
    >
      Hi, I'm <span class="font-black accent-color">Ryan Painter</span> — a Full Stack Developer and
      UI Designer. I specialize in developing engaging web experiences. From dynamic backends to intuitive
      user interfaces, my goal is to bring innovative ideas to life.
    </h2>
    <div class="container min-h-[70px]">
      <AnimatedText
        messages={messagesToAnimate}
        textClass="max-w-[700px] text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] font-bold accent-color"
      />
    </div>
    <h3 class="text-base md:text-xl">
      Connect with me:
      <a href="mailto:paintersrp@gmail.com" class="highlight-link">paintersrp@gmail.com</a>
    </h3>
  </FullSection>

  <SubSection id="about" heading="About">
    <p class="mt-0 mb-6 text-gray-300">
      In 2021, my journey into web development began with a Kaggle Machine Learning challenge,
      sparking a deep interest in Python and data analysis. This quickly expanded into a fascination
      with the entire web development spectrum. I ventured into JavaScript/TypeScript and the NodeJS
      ecosystem, honing my skills in API development and front-end design. Embracing frameworks like
      React, Svelte, and Vue, I've developed a diverse and robust skill set, allowing me to craft
      comprehensive web solutions.
    </p>
    <p class="mt-0 mb-6 text-gray-300">
      This portfolio is a testament to my self-driven journey. It showcases a range of personal
      <a href="/" class="underline-link text-white"> projects </a>, each reflecting my dedication to
      creating functional and visually appealing digital experiences. Although I haven't yet
      ventured into a professional corporate setting, my work demonstrates my commitment to web
      development and eagerness to innovate.
    </p>
    <p class="mt-0 mb-6 text-gray-300">
      When not immersed in coding, I indulge in my love for TV shows and movies, exploring various
      genres for relaxation and inspiration. Live music and comedy also play a significant role in
      my life, offering fresh perspectives that fuel my creativity. These interests, while distinct
      from my professional pursuits, enrich my approach to web development, infusing it with unique
      insights and a well-rounded outlook.
    </p>
  </SubSection>

  <!-- Interactive Grid of Skills, animated by FLIP -->
  <SubSection id="projects" heading="Projects">
    <div class="skills-grid">
      {#each projects as project (project.id)}
        <button
          animate:flip={{ duration: 400 }}
          class={`skill-card text-amber-50 bg-white bg-opacity-[5%] rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-[10%] relative ${
            project.isExpanded ? 'justify-center p-4' : 'p-2.5'
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
              <div class="inline-flex rounded-md shadow-sm gap-4" role="group">
                <a
                  on:click|stopPropagation
                  href={project.repoUrl}
                  type="button"
                  class="hover:text-opacity-90 text-amber-300 scale-95 hover:scale-100 transition-transform ease-in-out"
                >
                  <Tooltip content="Repository">
                    <Icon type="github" />
                  </Tooltip>
                </a>
                <a
                  on:click|stopPropagation
                  href={project.liveDemo}
                  type="button"
                  class="hover:text-opacity-90 text-amber-300 scale-95 hover:scale-100 transition-transform ease-in-out"
                >
                  <Tooltip content="Demo">
                    <Icon type="deployed" />
                  </Tooltip>
                </a>
                <a
                  href={`/${project.slug}`}
                  type="button"
                  class="hover:text-opacity-90 text-amber-300 scale-95 hover:scale-100 transition-transform ease-in-out"
                >
                  <Tooltip content="Project Details">
                    <Icon type="more" />
                  </Tooltip>
                </a>
              </div>
            </div>
          {/if}
        </button>
      {/each}
    </div>
    <!-- Add Full Project List Link / Page  -->
    <!-- Add Full Project List Link / Page  -->
    <!-- Add Full Project List Link / Page  -->
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
