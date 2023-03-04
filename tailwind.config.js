/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF8F00',
        'primary-variant' : '#FF6F00',
        'secondary' : '#FFCA28',
        'secondary-variant' : '#FFC107',
        'background' : '#212121',
        'dark' : '#000000',
        'light' : '#FAFAFA',
        'gray' : '#BDBDBD',
      },
      fontFamily: {
        'antonio' : ['Antonio', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
