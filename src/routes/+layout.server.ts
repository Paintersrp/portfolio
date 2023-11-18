export const config = {
  runtime: 'edge'
};

export const load = ({ url }) => {
  return {
    url: url.pathname
  };
};
