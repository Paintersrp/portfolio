<script lang="ts">
  import { flip } from 'svelte/animate';
  import { sineOut } from 'svelte/easing';
  import { blur } from 'svelte/transition';

  import { backendSkills, frontendSkills, generalSkills } from '$lib/const';
  import { Icon } from '$comp';

  let combinedSkills = [...frontendSkills, ...backendSkills, ...generalSkills];

  const toggleSkill = (toggledSkill: Skill) => {
    combinedSkills = combinedSkills.map((skill) => {
      return skill.text === toggledSkill.text ? { ...skill, isExpanded: !skill.isExpanded } : skill;
    });
  };
</script>

<section id="skills" class="w-screen pt-16 px-16 text-white py-10">
  <!-- Heading -->
  <div class="text-center mb-12">
    <h2 class="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
    <p class="text-xl font-light accent-color">Click on a skill to see more details</p>
  </div>

  <!-- Interactive Grid of Skills, animated by FLIP -->
  <div class="skills-grid">
    {#each combinedSkills as skill (skill.text)}
      <button
        animate:flip={{ duration: 300, easing: sineOut }}
        class="skill-card bg-white bg-opacity-20 p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-30 relative"
        class:expanded={skill.isExpanded}
        on:click={() => toggleSkill(skill)}
      >
        <Icon
          size={skill.isExpanded ? '3xl' : 'xl'}
          type={skill.icon}
          iconClass="accent-color mb-3"
        />
        <span class={`font-semibold ${skill.isExpanded ? 'text-xl' : ' text-sm'}`}
          >{skill.text}</span
        >
        {#if skill.isExpanded}
          <div transition:blur={{ delay: 0 }} class="skill-details m-auto">
            <p class="text-sm">{skill.description}</p>
          </div>
        {/if}
      </button>
    {/each}
  </div>
</section>

<style>
  .skills-grid {
    --_space: 1rem;
    padding: 0 var(--_space) var(--_space);
    display: grid;
    gap: var(--_space);
    grid-template-columns: repeat(auto-fill, minmax(14.28%, 1fr));
    grid-auto-rows: minmax(100px, auto);
  }

  .skill-card {
    position: relative;
  }

  .expanded {
    grid-column: span 2;
    grid-row: span 2;
  }

  .skill-details {
    display: none;
  }

  .expanded .skill-details {
    display: block;
  }
</style>
