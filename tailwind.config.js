/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './app.vue',
      './error.vue',
      './assets/**/*.{css,scss}',
      './components/**/*.{vue,ts}',
      './composables/**/*.ts',
      './layouts/**/*.vue',
      './pages/**/*.vue',
   ],
   darkMode: 'media',
   theme: {
      extend: {
         colors: {
            accent: '#4f7df3',
            'accent-hover': '#3a65d6',
         },
         fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
         },
      },
   },
   plugins: [],
};
