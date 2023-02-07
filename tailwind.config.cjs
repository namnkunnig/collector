/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        collector: '#582f87',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
