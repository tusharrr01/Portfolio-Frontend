/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        foreground: '#f8fafc',
        primary: '#3b82f6',
        'primary-dark': '#1e40af',
        accent: '#06b6d4',
        'accent-dark': '#0891b2',
        card: '#1e293b',
        'card-hover': '#334155',
        border: '#334155',
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
