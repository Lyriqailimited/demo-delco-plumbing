import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#495DA2',
        accent: '#BFA072',
      },
    },
  },
  plugins: [],
}
export default config
