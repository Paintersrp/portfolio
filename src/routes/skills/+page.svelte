<script lang="ts">
  import { flip } from 'svelte/animate';
  import { sineOut } from 'svelte/easing';

  import { _projects } from '$lib/const';
  import { AnimatedText } from '$comp';
  import Icon from '$comp/Icon.svelte';

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

  const skills: { id: number; title: string; items: { text: string; icon?: IconType }[] }[] = [
    {
      id: 1,
      title: 'Languages',
      items: [
        { text: 'JavaScript', icon: 'javascript' },
        { text: 'TypeScript', icon: 'typescript' },
        { text: 'Python', icon: 'python' },
        { text: 'Rust', icon: 'rust' },
        { text: 'Java', icon: 'java' }
      ]
    },
    {
      id: 2,
      title: 'Frameworks',
      items: [
        { text: 'React', icon: 'react' },
        { text: 'Svelte', icon: 'svelte' },
        { text: 'Vue', icon: 'vue' },
        { text: 'Express', icon: 'express' },
        { text: 'Koa', icon: 'koa' },
        { text: 'Django', icon: 'django' },
        { text: 'Flask', icon: 'flask' },
        { text: 'Wordpress', icon: 'wordpress' }
      ]
    },
    {
      id: 3,
      title: 'Machine Learning',
      items: [
        { text: 'Regression', icon: 'regression' },
        { text: 'Forecasting', icon: 'forecasting' },
        { text: 'Deep Learning', icon: 'deeplearning' }
      ]
    }
  ];

  let projects = _projects;

  const toggleSkill = (toggledSkill: Project) => {
    projects = projects.map((project) => {
      return project.title === toggledSkill.title
        ? { ...project, isExpanded: !project.isExpanded }
        : project;
    });
  };
</script>

<div class="w-full">
  <header class="intro text-in-blur">
    <h2 class="intro__tagline">
      I'm <span class="name">Ryan Painter</span>, Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Necessitatibus eos dolores modi quisquam voluptatum eum magni quod nostrum obcaecati
      blanditiis.
    </h2>
    <div class="container text-in-blur min-h-[70px]">
      <AnimatedText
        messages={messagesToAnimate}
        textClass="intro__tagline !font-bold accent-color"
      />
    </div>
    <h3 class="intro__contact">
      Contact me at:
      <a href="matilto:paintersrp@gmail.com" class="highlight-link">paintersrp@gmail.com</a>
    </h3>
  </header>
</div>

<div class="w-full text-amber-300">
  <section
    class="w-full block justify-center text-white px-9 py-12 2xl:px-44 xl:px-24 xl:py-24 lg:py-12 lg:px-12 md:flex"
  >
    <div
      class="flex-shrink-0 uppercase text-left md:text-right w-auto md:w-[150px] lg:w-[200px] xl:w-[200px] xl:mr-[70px] mr-[50px] font-bold tracking-widest accent-color"
    >
      Background
    </div>
    <div
      class="font-light text-base max-w-[650px] w-full pt-7 sm:pt-7 md:pt-0 pl-7 sm:pl-7 md:pl-12 lg:pl-0"
    >
      <p class="mt-0 mb-6 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sint ex, similique facere
        sequi accusamus assumenda tempore nulla dignissimos a facilis excepturi magni consequatur
        necessitatibus deleniti vero odio earum praesentium. Natus repellendus deserunt laborum
        dolores a unde ipsum neque nostrum voluptates sapiente, facilis in cum, provident veniam
        enim corporis similique!
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
    </div>
  </section>
  <section
    class="w-full block justify-center text-white px-9 py-12 2xl:px-44 xl:px-24 xl:py-24 lg:py-12 lg:px-12 md:flex"
  >
    <div
      class="flex-shrink-0 uppercase text-left md:text-right w-auto md:w-[150px] lg:w-[200px] xl:w-[200px] xl:mr-[70px] mr-[50px] font-bold tracking-widest accent-color"
    >
      Projects
    </div>
    <div
      class="font-light text-base max-w-[650px] w-full pt-7 sm:pt-7 md:pt-0 pl-7 sm:pl-7 md:pl-12 lg:pl-0"
    >
      <section id="skills" class="w-full text-white">
        <!-- Interactive Grid of Skills, animated by FLIP -->
        <div class="skills-grid">
          {#each projects as project (project.id)}
            <button
              animate:flip={{ duration: 400, easing: sineOut }}
              class={`skill-card text-amber-50 bg-white bg-opacity-[5%] rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-[10%] relative ${
                project.isExpanded ? 'justify-center p-6' : 'p-4'
              }`}
              class:expanded={project.isExpanded}
              on:click={() => toggleSkill(project)}
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
              <span class={`font-semibold ${project.isExpanded ? 'text-xl' : ' text-sm'}`}
                >{project.title}</span
              >
              {#if project.isExpanded}
                <div class="faster-in-blur mt-3 gap-4 !flex">
                  <a
                    on:click={(e) => {
                      e.stopPropagation();
                      console.log('test');
                    }}
                    href={project.repoUrl}
                    class="px-2 md:px-4 my-auto py-2 text-sm rounded-md bg-amber-300 bg-opacity-90 hover:bg-opacity-70 shadow-md text-white font-extrabold"
                  >
                    GitHub
                  </a>
                  <a
                    on:click={(e) => {
                      e.stopPropagation();
                      console.log('test');
                    }}
                    href={project.liveDemo}
                    class="px-2 md:px-4 my-auto py-2 text-sm rounded-md bg-amber-300 bg-opacity-90 hover:bg-opacity-70 shadow-md text-white font-extrabold"
                  >
                    Live Demo
                  </a>
                </div>
              {/if}
            </button>
          {/each}
        </div>
      </section>
    </div>
  </section>

  <section
    class="w-full block justify-center text-white px-9 py-12 2xl:px-44 xl:px-24 xl:py-24 lg:py-12 lg:px-12 md:flex"
  >
    <div
      class="flex-shrink-0 uppercase text-left md:text-right w-auto md:w-[150px] lg:w-[200px] xl:w-[200px] xl:mr-[70px] mr-[50px] font-bold tracking-widest accent-color"
    >
      Skills
    </div>
    <div
      class="font-light text-base max-w-[650px] w-full pt-7 sm:pt-7 md:pt-0 pl-7 sm:pl-7 md:pl-12 lg:pl-0"
    >
      <div class="flex justify-between flex-wrap md:flex-nowrap">
        {#each skills as skillset, index (index)}
          <div class="mb-6 md:w-[47%]">
            <div class="text-white font-extrabold uppercase">{skillset.title}</div>
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
    </div>
  </section>
</div>

<footer
  class="block md:flex md:justify-between md:items-center py-12 px-7 md:px-20 bg-opacity-[1.5%] bg-white"
>
  <div class="font-bold w-auto text-center mb-6 md:w-[200px] md:text-left md:mb-0 text-gray-200">
    <div>
      <span>© Copyright 2023</span>
    </div>
    <div>
      <span
        >Made by <a href="/" class="underline-link accent-color !font-extrabold">Ryan Painter</a
        ></span
      >
    </div>
  </div>
  <div class="flex justify-center">
    <a
      href="/"
      class="uppercase font-bold mx-3 lg:mx-4"
      target="_blank"
      rel="noopener noreferrer"
      title="Email"
    >
      <Icon
        size="md"
        type="email"
        iconClass="accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
      />
    </a>
    <a
      href="/"
      class="uppercase font-bold mx-3 lg:mx-4"
      target="_blank"
      rel="noopener noreferrer"
      title="Email"
    >
      <Icon
        size="md"
        type="twitter"
        iconClass="accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
      />
    </a>
    <a
      href="/"
      class="uppercase font-bold mx-3 lg:mx-4"
      target="_blank"
      rel="noopener noreferrer"
      title="Email"
    >
      <Icon
        size="md"
        type="github"
        iconClass="accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
      />
    </a>
    <a
      href="/"
      class="uppercase font-bold mx-3 lg:mx-4"
      target="_blank"
      rel="noopener noreferrer"
      title="Email"
    >
      <Icon
        size="md"
        type="linkedin"
        iconClass="accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
      />
    </a>
  </div>
</footer>

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

  .underline-link {
    position: relative;
    display: inline-block;
    font-weight: bold;
  }

  .underline-link:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--accent);
    content: '';
    opacity: 0;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(-5px);
  }

  .underline-link:focus:after,
  .underline-link:hover:after {
    height: 2px;
    border-radius: 3px;
    opacity: 1;
    transform: translateY(-2px);
  }
</style>
