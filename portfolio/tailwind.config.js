/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        glass: 'var(--surface-glass)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--text-muted)',
        accent: 'var(--accent)',
        accent2: 'var(--accent-2)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}
