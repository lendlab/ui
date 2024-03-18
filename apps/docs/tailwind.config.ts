import type { Config } from 'tailwindcss'

const ui = require('@lendlab/ui/tailwind')

const config: Config = {
  content: [
    ...ui.content.concat([
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}'
    ]),
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {},
  plugins: []
}
export default config
