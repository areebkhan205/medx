/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.985 0.002 250)',
        foreground: 'oklch(0.13 0.02 260)',

        card: {
          DEFAULT: 'oklch(1 0 0)',
          foreground: 'oklch(0.13 0.02 260)',
        },

        primary: {
          DEFAULT: 'oklch(0.52 0.18 260)',
          foreground: 'oklch(0.99 0 0)',
        },

        secondary: {
          DEFAULT: 'oklch(0.96 0.005 250)',
          foreground: 'oklch(0.13 0.02 260)',
        },

        muted: {
          DEFAULT: 'oklch(0.95 0.005 250)',
          foreground: 'oklch(0.5 0.02 260)',
        },

        accent: {
          DEFAULT: 'oklch(0.96 0.005 250)',
          foreground: 'oklch(0.13 0.02 260)',
        },

        destructive: {
          DEFAULT: 'oklch(0.577 0.245 27.325)',
          foreground: 'oklch(0.577 0.245 27.325)',
        },

        border: 'oklch(0.91 0.005 250)',
        input: 'oklch(0.91 0.005 250)',
        ring: 'oklch(0.52 0.18 260)',

        'surface-dark': {
          DEFAULT: 'oklch(0.16 0.02 260)',
          foreground: 'oklch(0.99 0 0)',
        },
      },

      borderRadius: {
        lg: '0.75rem',
        md: 'calc(0.75rem - 2px)',
        sm: 'calc(0.75rem - 4px)',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}