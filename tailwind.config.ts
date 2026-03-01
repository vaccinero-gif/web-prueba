import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          600: '#004f8a',
          700: '#003b68'
        }
      }
    }
  },
  plugins: []
};

export default config;
