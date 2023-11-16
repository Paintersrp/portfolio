/* eslint-disable @typescript-eslint/no-explicit-any */
export const load = async ({ fetch }) => {
  const res = await fetch(`/api/posts`);
  const posts = await res.json();

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

  return {
    uniqueCategories: sortedUniqueCategories
  };
};
