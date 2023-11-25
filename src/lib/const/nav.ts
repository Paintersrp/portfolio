import { projects } from './projects';

export const navItems: NavigationItems = [
  {
    title: 'Home',
    route: '/'
  },
  {
    title: 'Projects',
    route: undefined,
    children: projects.map((project) => ({
      title: project.title,
      route: `/${project.slug}`
    }))
  }
];
