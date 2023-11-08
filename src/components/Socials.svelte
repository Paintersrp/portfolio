<script lang="ts">
  import Icon from './Icon.svelte';

  const socials: Socials = [
    { name: 'github', url: 'https://github.com/' },
    { name: 'linkedin', url: 'https://linkedin.com/' },
    { name: 'twitter', url: 'https://twitter.com/' },
    { name: 'email', url: 'paintersrp@gmail.com' }
  ];
</script>

<aside
  class="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center space-y-4 p-4 bg-opacity-20 bg-white rounded-l-lg z-50"
>
  {#each socials as social}
    <a href={social.url} class="" target="_blank" rel="noopener noreferrer" title={social.name}>
      <Icon
        size="lg"
        type={social.name}
        iconClass="accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
      />
    </a>
  {/each}
</aside>
