import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      xxs: '400px',
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: []
};
