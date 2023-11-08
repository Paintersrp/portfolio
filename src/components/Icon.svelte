<script lang="ts">
  import { DownIcon, EmailIcon, LinkedinIcon, GithubIcon, TwitterIcon, UpIcon } from './icons';

  export let iconClass: string = '';
  export let size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md';
  export let type: 'github' | 'twitter' | 'linkedin' | 'email' | 'down' | 'up';

  const sizeMap = {
    xxs: '1rem',
    xs: '1.25rem',
    sm: '1.5rem',
    md: '1.75rem',
    lg: '2rem',
    xl: '2.25rem',
    xxl: '2.5rem'
  };

  const iconMap = {
    github: GithubIcon,
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    email: EmailIcon,
    down: DownIcon,
    up: UpIcon
  };

  $: iconSize = sizeMap[size];
  $: icon = iconMap[type];
</script>

<figure class={`${iconClass}`}>
  <svelte:component this={icon} {iconSize} />
</figure>
