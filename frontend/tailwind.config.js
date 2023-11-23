/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contents/components/**/*.{js,ts,jsx,tsx}",
    "./contents/layout/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#dee2e6",
        black: "#000",
        white: "#fff"
      },
      boxShadow: {
        'box1': '1px 2px 6px rgba(0, 0, 0, 0.4)',
        'box2': '0px 1px 4px 1px rgba(0, 0, 0, 0.15)',
        'box3': '1px 3px 4px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}