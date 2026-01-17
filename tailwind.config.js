/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-one': '#ff4c60',
        'primary-one-light': 'rgba(255, 76, 96, .2)',
        'primary-one-light-two': '#f7e8e1',
        'primary-two': '#548f6f',
        'linear-one': '#917090',
        'linear-two': '#de8b76',
        'primary-four': '#d99374',
        'text-primary': '#101010',
        'text-secondary': 'hsla(0, 0%, 6%, .5)',
        'text-secondary2': 'hsla(0, 0%, 6%, .7)',
        'border-color': '#eee',
        'border-color2': 'hsla(0, 0%, 6%, .2)',
        'border-color3': '#e7e7e7',
        'border-color4': 'rgba(84, 143, 111, 0.2)',
        'border-secondary': '#969696',
        'bg-one': '#f2f2de',
        'bg-two': '#fff6ef',
        'bg-three': 'ivory',
        'bg-four': '#ddd',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

