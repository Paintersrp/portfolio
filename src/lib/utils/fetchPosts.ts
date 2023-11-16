/* eslint-disable @typescript-eslint/no-explicit-any */
// export const fetchPosts = async () => {
//   const allPostFiles = import.meta.glob('/src/lib/assets/posts/*.md');
//   const iterablePostFiles = Object.entries(allPostFiles);

//   const allPosts = await Promise.all(
//     iterablePostFiles.map(async ([path, resolver]) => {
//       const { metadata }: any = await resolver();
//       const slug = path!.split('/').pop().slice(0, -3);

//       return {
//         meta: metadata,
//         path: slug
//       };
//     })
//   );

//   return allPosts;
// };

export const fetchPosts = async ({ offset = 0, limit = 0, category = '' } = {}) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('/src/lib/assets/posts/*.md')).map(async ([path, resolver]) => {
      const { metadata }: any = await resolver();
      const slug = path.split('/').pop()!.slice(0, -3);
      console.log(slug);
      return { ...metadata, slug };
    })
  );

  let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (category) {
    sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }

  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit);
  }

  sortedPosts = sortedPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverWidth: post.coverWidth,
    coverHeight: post.coverHeight,
    date: post.date,
    categories: post.categories
  }));

  return {
    posts: sortedPosts
  };
};

export default fetchPosts;
