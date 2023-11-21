export const skills: { id: number; title: string; items: { text: string; icon?: IconType }[] }[] =
  [
    {
      id: 1,
      title: 'Languages',
      items: [
        { text: 'JavaScript', icon: 'javascript' },
        { text: 'TypeScript', icon: 'typescript' },
        { text: 'Python', icon: 'python' },
        { text: 'Rust', icon: 'rust' },
        { text: 'Java', icon: 'java' }
      ]
    },
    {
      id: 2,
      title: 'Frameworks',
      items: [
        { text: 'React', icon: 'react' },
        { text: 'Svelte', icon: 'svelte' },
        { text: 'Vue', icon: 'vue' },
        { text: 'Express', icon: 'express' },
        { text: 'Koa', icon: 'koa' },
        { text: 'Django', icon: 'django' },
        { text: 'Flask', icon: 'flask' },
        { text: 'Wordpress', icon: 'wordpress' }
      ]
    },
    {
      id: 3,
      title: 'Machine Learning',
      items: [
        { text: 'Regression', icon: 'regression' },
        { text: 'Forecasting', icon: 'forecasting' },
        { text: 'Deep Learning', icon: 'deeplearning' }
      ]
    }
  ];
