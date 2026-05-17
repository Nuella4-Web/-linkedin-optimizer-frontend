import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A66C2',
          50: '#E7F0FA',
          100: '#C8DDEF',
          200: '#91BBE0',
          300: '#5A99D0',
          400: '#2377C1',
          500: '#0A66C2',
          600: '#0855A0',
          700: '#06437E',
          800: '#04315C',
          900: '#004182',
        },
        accent: '#057642',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

export default config
