/* eslint-disable @typescript-eslint/no-explicit-any */
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    const post = await import(`../../../lib/assets/posts/${params.slug}.md`);

    console.log(post.default);

    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.slug }
    };
  } catch (err: any) {
    throw error(404, err);
  }
};
