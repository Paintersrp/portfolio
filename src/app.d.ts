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

  type Skill = {
    text: string;
    icon: IconType;
    progress: string;
    isExpanded: boolean;
    description: string;
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
    | 'webpack';

  interface Social {
    name: IconType;
    url: string;
  }

  type Socials = Social[];

  interface NavigationItem {
    title: string;
    route: string;
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