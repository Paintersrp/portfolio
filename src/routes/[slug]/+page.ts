import { projects } from '$lib';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const projectSlug = params.slug;
  const project = projects.find((p) => p.slug === projectSlug);


  if (!project) {
    throw error(404, { message: 'Project not found' });
  }

  return { project };
}
