<script lang="ts">
  import * as Icons from './icons';

  export let iconClass: string = '';
  export let size: '4xl' | '3xl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' = 'md';

  export let type: IconType;

  const sizeMap = {
    xxs: '1rem',
    xs: '1.25rem',
    sm: '1.5rem',
    md: '1.75rem',
    lg: '2rem',
    xl: '2.25rem',
    xxl: '2.5rem',
    '3xl': '2.75rem',
    '4xl': '3rem'
  };

  const iconMap = {
    analysis: Icons.AnalysisIcon,
    babel: Icons.BabelIcon,
    code: Icons.CodeIcon,
    css: Icons.CssIcon,
    database: Icons.DatabaseIcon,
    django: Icons.DjangoIcon,
    docker: Icons.DockerIcon,
    engineer: Icons.EngineerIcon,
    express: Icons.ExpressIcon,
    flask: Icons.FlaskIcon,
    github: Icons.GithubIcon,
    html: Icons.HtmlIcon,
    twitter: Icons.TwitterIcon,
    javascript: Icons.JavascriptIcon,
    koa: Icons.KoaIcon,
    landscape: Icons.LandscapeIcon,
    linkedin: Icons.LinkedinIcon,
    node: Icons.NodeIcon,
    python: Icons.PythonIcon,
    react: Icons.ReactIcon,
    right: Icons.RightIcon,
    sass: Icons.SassIcon,
    svelte: Icons.SvelteIcon,
    email: Icons.EmailIcon,
    down: Icons.DownIcon,
    up: Icons.UpIcon,
    vue: Icons.VueIcon,
    webpack: Icons.WebpackIcon,
    typescript: Icons.TypescriptIcon,
    rust: Icons.RustIcon,
    java: Icons.JavaIcon,
    wordpress: Icons.WordpressIcon,
    deeplearning: Icons.DeepLearningIcon,
    regression: Icons.RegressionIcon,
    forecasting: Icons.ForecastingIcon,
    instagram: Icons.InstagramIcon
  };

  $: iconSize = sizeMap[size];
  $: icon = iconMap[type];
</script>

<figure class={`${iconClass}`}>
  <svelte:component this={icon} {iconSize} />
</figure>
