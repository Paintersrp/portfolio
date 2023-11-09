/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchPosts = async () => {
  const allPostFiles = import.meta.glob('/src/lib/assets/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  console.log(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata }: any = await resolver();
      const slug = path!.split('/').pop().slice(0, -3);

      return {
        meta: metadata,
        path: slug
      };
    })
  );

  return allPosts;
};
