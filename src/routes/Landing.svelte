<script lang="ts">
  import { AnimatedText } from '$comp';

  export const messagesToAnimate = [
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
</script>

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
      <AnimatedText messages={messagesToAnimate} textClass="text-2xl md:text-5xl font-bold" />
    </div>
  </header>
</section>
