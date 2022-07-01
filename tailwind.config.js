/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '1px',
      },
      fontFamily:{
        myFont:['Ubuntu','sans-serif'],
        flobster:['Lobster', 'cursive'],
        lobtwo:['Lobster Two', 'cursive']
        
      },
      backgroundImage: {
        'hero-pattern': "url('/img/food.jpg')",
        
      }
    },
  },
  plugins: [],
}
