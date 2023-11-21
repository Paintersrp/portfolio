import { projects } from '$lib';

export const prerender = true;

export async function load({ params }) {
  const projectId: number = Number(params.id);
  const project = projects[projectId - 1];

  return {
    project
  };
}
