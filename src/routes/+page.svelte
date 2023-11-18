<script lang="ts">
  import { Content } from '$comp';
  import { scrollToSection } from '$lib/utils';
  import { ChevronArrow } from '$comp';

  import Projects from './Projects.svelte';
  import Skills from './Skills.svelte';
  import About from './About.svelte';
  import Landing from './Landing.svelte';

  let aboutInView = false;

  function handleAboutInView(event: CustomEvent<ObserverEventDetails>) {
    aboutInView = event.detail.inView;
  }
</script>

<Content yIn={-750} yOut={-750}>
  <Landing />

  <!-- Indicates more content beyond landing -->
  <button
    class:hidden={aboutInView}
    class="animate-bounce absolute bottom-5 transform -translate-x-1/2 text-white hover:accent-color"
    on:click={() => scrollToSection('about')}
  >
    <ChevronArrow />
  </button>

  <About {handleAboutInView} />
  <Skills />
  <Projects />

  <!-- Scroll to Top Button -->
  <button
    class="animate-bounce transform text-white hover:accent-color"
    on:click={() => scrollToSection('landing')}
  >
    <ChevronArrow point="up" />
  </button>
</Content>
