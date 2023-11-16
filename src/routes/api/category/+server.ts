import fetchPosts from '$lib/utils/fetchPosts';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
  const { posts } = await fetchPosts();
  const uniqueCategories: { [key: string]: { title: string; count: number } } = {};

  posts.forEach((post: Post) => {
    post.categories.forEach((category: string) => {
      if (Object.prototype.hasOwnProperty.call(uniqueCategories, category)) {
        uniqueCategories[category].count += 1;
      } else {
        uniqueCategories[category] = {
          title: category,
          count: 1
        };
      }
    });
  });

  const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => a.title > b.title);
  console.log(sortedUniqueCategories);

  return json(sortedUniqueCategories);
};
