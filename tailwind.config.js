/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#111827',
        'text-color':'#FFFFFF',
        'hover-color':'#0893C1',
        'logo-color':'#0891B2',
        'gray-color':'#4B5563',
        'skill-background':'#1F2937'
      },
      fontFamily:{
        'body':['Merriweather',' serif'],
      },
    },
  },
  plugins: [
  ],
}

