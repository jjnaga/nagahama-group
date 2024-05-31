/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nagahama-blue': 'rgb(30, 64, 175)',
      },
      backgroundImage: {
        'nagahama-gradient':
          'linear-gradient(90deg, rgba(30, 64, 175, 0) 0%, rgba(30, 64, 175, 0.4) 100%)',
      },
    },
  },
  plugins: [],
};
