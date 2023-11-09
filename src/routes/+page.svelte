<script lang="ts">
  import { AnimatedText, Content } from '$comp';

  const skills = [
    'TypeScript',
    'Python',
    'React',
    'Svelte',
    'Backend Systems',
    'Cloud Services',
    'Database Management (SQL & NoSQL)',
    'RESTful & GraphQL APIs',
    'Progressive Web Apps',
    'Machine Learning',
    'Data Engineering',
    'Data Visualization'
  ];
</script>

<Content yIn={-750} yOut={-750}>
  <header class="text-center space-y-4 accent-color">
    <h1 class="text-6xl font-bold text-white md:text-8xl leading-none shadow-text">
      Steven Painter
    </h1>
    <AnimatedText
      messages={skills}
      textClass="text-5xl font-bold"
      containerClass="w-full text-center"
    />
    <p class="accent-color text-xl md:text-2xl text-white font-light">
      Fullstack Developer | Backend Enthusiast | UI/UX Dabbler
    </p>
  </header>

  <section class="text-white text-center space-y-6">
    <p class="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cupiditate? Saepe quam
      aliquid et, in quaerat veritatis explicabo sunt voluptates, assumenda dignissimos adipisci
      non. Rem, nesciunt! Quod ratione quam aut.
    </p>
  </section>
</Content>
