<script lang="ts">
  import {} from '$comp';
  import { flip } from 'svelte/animate';
  import { sineOut } from 'svelte/easing';

  import { generalSkills, projects } from '$lib/const';
  import { mediaQueryStore } from '$lib/stores';
  import { AnimatedText, Icon } from '$comp';

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

  const small = mediaQueryStore('(max-width: 600px)');

  let iconSize: IconSize;
  let _projects = projects;

  const toggleSkill = (toggledSkill: Project) => {
    _projects = _projects.map((project) => {
      return project.title === toggledSkill.title
        ? { ...project, isExpanded: !project.isExpanded }
        : project;
    });
  };

  $: iconSize = $small ? 'md' : 'lg';
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
  <section class="section background">
    <div class="section__title">Background</div>
    <div class="section__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sint ex, similique facere
      sequi accusamus assumenda tempore nulla dignissimos a facilis excepturi magni consequatur
      necessitatibus deleniti vero odio earum praesentium. Natus repellendus deserunt laborum
      dolores a unde ipsum neque nostrum voluptates sapiente, facilis in cum, provident veniam enim
      corporis similique!
      <br />
      <br />

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus veritatis optio odio
      eveniet vel, quia quod. Consectetur, maiores cumque? Animi provident officiis veniam in minus
      natus assumenda veritatis incidunt aliquid.
      <br />
      <br />

      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione et consectetur rem
      temporibus nulla?
    </div>
  </section>
  <section class="section background">
    <div class="section__title">Projects</div>
    <div class="section__content">
      <section id="skills" class="w-full text-white">
        <!-- Interactive Grid of Skills, animated by FLIP -->
        <div class="skills-grid">
          {#each _projects as project (project.id)}
            <button
              animate:flip={{ duration: 400, easing: sineOut }}
              class={`skill-card bg-white bg-opacity-20 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-30 relative ${
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
                <div class="skill-details faster-in-blur mt-3">
                  <a
                    on:click={(e) => {
                      e.stopPropagation();
                      console.log('test');
                    }}
                    href={project.repoUrl}
                    class="px-2 md:px-4 my-auto py-2 text-sm rounded-md bg-amber-300 bg-opacity-80 hover:bg-opacity-70 shadow-md text-white font-semibold"
                  >
                    GitHub
                  </a>
                  <a
                    on:click={(e) => {
                      e.stopPropagation();
                      console.log('test');
                    }}
                    href={project.liveDemo}
                    class="px-2 md:px-3 my-auto py-2 text-sm rounded-md bg-amber-300 bg-opacity-80 hover:bg-opacity-70 shadow-md text-white font-semibold"
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

  <section class="section background">
    <div class="section__title">Skills</div>
    <div class="section__content">
      <div class="skillz">
        <div class="skillz__category">
          <div class="skillz__category__label">Languages</div>
          <ul>
            <li class="skillz__category__item">JavaScript</li>
            <li class="skillz__category__item">TypeScript</li>
            <li class="skillz__category__item">Python</li>
            <li class="skillz__category__item">Rust</li>
            <li class="skillz__category__item">JavaScript</li>
          </ul>
        </div>
        <div class="skillz__category">
          <div class="skillz__category__label">Frameworks</div>
          <ul>
            <li class="skillz__category__item">React</li>
            <li class="skillz__category__item">Svelte</li>
            <li class="skillz__category__item">Vue</li>
            <li class="skillz__category__item">Django</li>
            <li class="skillz__category__item">Express / Koa</li>
            <li class="skillz__category__item">Flask</li>
            <li class="skillz__category__item">Wordpress</li>
          </ul>
        </div>
        <div class="skillz__category">
          <div class="skillz__category__label">Machine Learning</div>
          <ul>
            <li class="skillz__category__item">Regression</li>
            <li class="skillz__category__item">Forecasting</li>
            <li class="skillz__category__item" />
            <li class="skillz__category__item" />
            <li class="skillz__category__item" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  :global(body) {
    line-height: 1.5;
  }

  :global(main) {
    background: black !important;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
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

  .roadmap-list {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }

  .roadmap-list li {
    margin-bottom: 5px;
  }
</style>
