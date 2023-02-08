/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: '#582f87',
        green: '#1ec887',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
