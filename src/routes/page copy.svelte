<script lang="ts">
  import { inview } from 'svelte-inview';
  import { AnimatedText, Content } from '$comp';
  import { projects } from './projects/const';
  import { blur, fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';

  const skills = [
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

  let projectsData = projects.map((project) => ({ ...project, isVisible: false }));

  // Flips the marker position based on whether the index is even or odd
  function markerClass(index: number) {
    return index % 2 === 0 ? 'right-[-30px] lg:right-[-40px]' : 'left-[-30px] lg:left-[-40px]';
  }

  function handleProjectInView(event: CustomEvent<ObserverEventDetails>, index: number) {
    projectsData = projectsData.map((project, idx) => {
      // Check if index matches the triggered index and adjusts the isVisible state
      if (idx === index) {
        return { ...project, isVisible: event.detail.inView };
      }

      // Otherwise return as is
      return project;
    });
  }
</script>

<Content yIn={-750} yOut={-750}>
  <section
    id="landing"
    class="min-h-screen flex flex-col justify-center items-center space-y-4 w-full"
  >
    <header class="text-center space-y-2 md:space-y-4 accent-color mb-5">
      <h1
        class="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-none shadow-text w-full text-center whitespace-nowrap text-in-expand mb-5"
      >
        Steven Painter
      </h1>
      <div class="flex flex-row justify-evenly space-x-2 md:space-x-8">
        <p class="accent-color text-base md:text-xl lg:text-2xl w-1/3 mb-5 text-in-expand">
          Fullstack <br /> Developer
        </p>
        <p class="accent-color text-base md:text-xl lg:text-2xl w-1/3 mb-5 text-in-expand">
          Data <br /> Enthusiast
        </p>
        <p class="accent-color text-base md:text-xl lg:text-2xl w-1/3 mb-5 text-in-expand">
          Tech <br /> Explorer
        </p>
      </div>
      <div class="container text-in-blur min-h-[50px]">
        <AnimatedText messages={skills} textClass="text-2xl md:text-5xl font-bold" />
      </div>
    </header>

    <section class="text-white text-center">
      <p
        class="text-xs font-medium md:font-normal md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto text-in-blur"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cupiditate? Saepe quam
        aliquid et, in quaerat veritatis explicabo sunt voluptates, assumenda dignissimos adipisci
        non. Rem, nesciunt! Quod ratione quam aut.
      </p>
    </section>
  </section>

  <About />

  <Projects />

  <!-- <section id="projects" class="container mx-auto px-4 py-10">
    <div class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
      <p class="text-lg text-white">
        Here's a selection of some recent work. For more details, click on each project.
      </p>
    </div>
    <div class="relative">
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-cyan-100 h-full hidden lg:block"
      />

      {#each projectsData as project, index (index)}
        <div
          use:inview={{ threshold: 0.75, unobserveOnEnter: true }}
          on:inview_change={(event) => handleProjectInView(event, index)}
          class="w-full"
        >
          <div
            class:left-in={project.isVisible && index % 2 === 0}
            class:left-out={!project.isVisible && index % 2 === 0}
            class:right-in={project.isVisible && index % 2 === 1}
            class:right-out={!project.isVisible && index % 2 === 1}
            class={`timeline-item rounded-lg shadow-lg ${index % 2 === 0 ? 'left' : 'right'} `}
          >
            <div
              class={`absolute top-0 w-20 h-10 bg-cyan-700 text-white flex items-center justify-center text-xs rounded-lg font-bold ${markerClass(
                index
              )}`}
              style="transform: translateY(-50%);"
            >
              <time>{project.date}</time>
            </div>
            <div
              class="content bg-white bg-opacity-20 text-white shadow-lg rounded-lg p-4 transform transition duration-500"
            >
              <div class="flex justify-center mb-4">
                <img
                  class="w-3/4 h-32 md:h-64 object-cover rounded shadow mx-auto"
                  src={project.imgUrl}
                  alt={project.title}
                />
              </div>
              <h3 class="text-lg font-bold mb-3">{project.title}</h3>
              <p class="mb-4">{project.description}</p>

              <div class="flex justify-evenly w-full gap-4">
                <div class="tech-features mb-4">
                  <h4 class="text-md font-semibold text-center mb-1">Features</h4>
                  <ul class="list-disc list-inside">
                    {#each project.features as feature}
                      <li>{feature}</li>
                    {/each}
                  </ul>
                </div>
                <div class="tech-features mb-4">
                  <h4 class="text-md font-semibold text-center mb-1">Technologies</h4>
                  <ul class="list-disc list-inside">
                    {#each project.technologies as tech}
                      <li>{tech}</li>
                    {/each}
                  </ul>
                </div>
              </div>
              <div class="flex justify-between">
                <a
                  href={project.repoUrl}
                  class="px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-75 hover:bg-cyan-900 hover:bg-opacity-75 shadow-md"
                  >GitHub</a
                >
                <a
                  href={project.liveDemo}
                  class="px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-75 hover:bg-cyan-900 hover:bg-opacity-75 shadow-md"
                  >Live Demo</a
                >
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section> -->
</Content>

<style>
  .timeline {
    position: relative;
    padding: 0;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 80px;
    width: calc(50% - 20px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &.left {
      left: calc(0% - 35px);
    }

    &.right {
      left: calc(50% + 55px);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .content {
    background-color: rgba(255, 255, 255, 0.15);
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 25px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  @media (max-width: 768px) {
    .timeline-item {
      width: 100%;
      left: 0 !important;
    }

    .timeline:before {
      left: 20px;
    }
  }
</style>
