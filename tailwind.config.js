/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: { '0': '15px' },
      },
      // colors:{
      //   'color-bg':'background-image: linear-gradient(to right, #583987, #453477, #342f67, #262955, #1b2244, #1a2345, #182446, #172547, #1b2f5b, #1f3970, #244386, #284e9c);'
      // }
    },
  },
  plugins: [],
}