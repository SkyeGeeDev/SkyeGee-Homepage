import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dblue: '#1F2937',
      white: '#F9FAF8',
      swhite: '#E5E7EB',
      blue: '#3882F6',
      hblue: '#2C68C4',
      gray: '#808080',
      dgray: '#707070',
      black: '#000000',
    },
    fontSize: {
      sm: '18px',
      base: '24px',
      lg: '36px',
      xl: '48px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        'permanent-marker': 'var(--font-permanent-marker)',
        'inter': 'var(--font-inter)'
      }
    },
  },
  plugins: [],
}
export default config
