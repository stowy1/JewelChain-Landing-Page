import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0F',
        surface: '#161618',
        'surface-elevated': '#1C1C1F',
        gold: '#C6A85E',
        'gold-muted': '#A68B4B',
        'text-primary': '#F5F5F4',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
        border: '#27272A',
      },
    },
  },
  plugins: [],
}
export default config
