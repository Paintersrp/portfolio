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
  <div
    class="text-center space-y-2 md:space-y-4 accent-color mb-5 w-full flex flex-col justify-center items-center"
  >
    <h1
      class="text-7xl md:text-8xl font-bold text-white leading-none shadow-text w-full text-center whitespace-nowrap text-in-expand mb-5"
    >
      Steven <br class="block lg:hidden" /> Painter
    </h1>
    <div
      class="w-full md:w-1/2 flex flex-row md:justify-evenly justify-center items-center md:space-x-8"
    >
      <p class="accent-color text-xl lg:text-2xl w-1/3 mb-5 text-in-blur">
        Fullstack <br /> Developer
      </p>
      <p class="accent-color text-xl lg:text-2xl w-1/3 mb-5 text-in-blur">
        Data <br /> Enthusiast
      </p>
      <p class="hidden md:block accent-color text-xl lg:text-2xl w-1/3 mb-5 text-in-blur">
        Tech <br /> Explorer
      </p>
    </div>
    <div class="container text-in-blur min-h-[50px]">
      <AnimatedText
        messages={messagesToAnimate}
        textClass="text-3xl md:text-4xl lg:text-5xl font-bold"
      />
    </div>
  </div>
</section>
