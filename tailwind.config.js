/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#299D91"
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}

