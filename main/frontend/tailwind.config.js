/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          gold: '#C8A951',
          'gold-light': '#E8D4A3',
          'gold-dark': '#A68B3E',
          ochre: '#D4A843',
          'lacquer-red': '#C41E3A',
          'lacquer-red-dark': '#9B172E',
          indigo: '#1B2A4A',
          'indigo-light': '#2D4A6B',
          'bamboo-green': '#4A7C2B',
          'bamboo-green-light': '#6BA53D',
          'rice-paper': '#F5F0E1',
          'rice-paper-dark': '#E8E0CC',
          bronze: '#CD7F32',
          'bronze-light': '#D4A574',
        },
      },
      fontFamily: {
        heading: ['Noto Serif Vietnamese', 'Noto Serif', 'Georgia', 'serif'],
        body: ['Be Vietnam Pro', 'Inter', '-apple-system', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(27, 42, 74, 0.05)',
        md: '0 4px 12px rgba(27, 42, 74, 0.08)',
        lg: '0 8px 24px rgba(27, 42, 74, 0.12)',
        gold: '0 4px 20px rgba(200, 169, 81, 0.3)',
      },
      animation: {
        'waveform': 'waveform 1s ease-in-out infinite',
      },
      keyframes: {
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}