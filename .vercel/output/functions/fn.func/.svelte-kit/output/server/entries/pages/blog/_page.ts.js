const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const posts = await response.json();
  const categoryResponse = await fetch("/api/category");
  const categories = await categoryResponse.json();
  return {
    posts,
    categories
  };
};
export {
  load
};
