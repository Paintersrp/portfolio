// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  type Project = {
    id: number;
    title: string;
    description: string;
    details: string;
    features: string[];
    technologies: string[];
    imgUrl: string;
    repoUrl: string;
    liveDemo: string;
  };

  type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type IconType = 'github' | 'twitter' | 'linkedin' | 'email' | 'down' | 'up';

  interface Social {
    name: IconType;
    url: string;
  }

  type Socials = Social[];
}

export {};
