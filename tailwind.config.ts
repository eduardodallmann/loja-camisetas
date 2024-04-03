import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  safelist: [
    'bg-red-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-black',
    'bg-white',
    'bg-pink-600',
    'border-gray-300',
    'border',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
