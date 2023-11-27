/* eslint-disable @typescript-eslint/no-explicit-any */
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  type RoadmapItem = {
    version: string;
    description: string;
    status: string;
    releaseDate: string;
    progress: number;
    isExpanded: boolean;
    developmentJourney: string;
    featureFocus: string[];
    technicalChallenges: string;
    skillsLearned: string;
  };

  type Project = {
    id: number;
    slug: string;
    date: string;
    title: string;
    description: string;
    details: string;
    concepts: string[];
    stack: string[];
    libraries: string[];
    roadmap: RoadmapItem[];
    imgUrl: string;
    repoUrl: string;
    repoName: string;
    isExpanded: boolean;
    liveDemo: string;
  };

  type Skill = {
    text: string;
    icon: IconType;
    isExpanded: boolean;
    roadmap: { date: string; milestone: string }[];
  };

  type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type IconType =
    | 'analysis'
    | 'babel'
    | 'code'
    | 'css'
    | 'database'
    | 'django'
    | 'docker'
    | 'down'
    | 'email'
    | 'engineer'
    | 'express'
    | 'flask'
    | 'github'
    | 'html'
    | 'javascript'
    | 'koa'
    | 'landscape'
    | 'linkedin'
    | 'node'
    | 'python'
    | 'react'
    | 'right'
    | 'sass'
    | 'svelte'
    | 'twitter'
    | 'up'
    | 'vue'
    | 'webpack'
    | 'typescript'
    | 'rust'
    | 'java'
    | 'wordpress'
    | 'regression'
    | 'forecasting'
    | 'deeplearning'
    | 'instagram'
    | 'expand'
    | 'collapse'
    | 'deployed'
    | 'link'
    | 'info'
    | 'more';

  interface Social {
    name: IconType;
    url: string;
    tooltip: string;
  }

  type Socials = Social[];

  interface NavigationItem {
    title: string;
    route: string | undefined;
    children?: NavigationItem[];
  }

  type NavigationItems = NavigationItem[];

  interface Metadata {
    title: string;
    date: Date;
  }

  interface Post {
    title: string;
    excerpt: string;
    date: Date;
    updated: Date;
    coverImage: string;
    coverWidth: number;
    coverHeight: number;
    categories: string[];
    PostContent: any;
  }

  declare namespace svelteHTML {
    interface HTMLAttributes {
      'on:intersecting'?: (event: CustomEvent<IntersectionObserverEntry>) => any;
      'on:mutate'?: (event: CustomEvent<MutationRecord[]>) => any;
    }
  }

  IntersectingEventTarget = EventTarget & { classList: string };
}

export {};
