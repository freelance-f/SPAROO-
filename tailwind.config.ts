import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#39D353',
        'bg-black': '#080808',
        'bg-card': '#111111',
        'text-primary': '#F0EDE8',
        'text-secondary': '#A0A0A0',
        'highlight': '#E8F55A',
        neon: '#39D353', // Mapping neon to accent for backward compatibility
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'bleRing': 'bleRing 2s ease-out infinite',
        'lightStreak': 'lightStreak 4s ease-in-out infinite',
        'orbit': 'orbit 6s linear infinite',
        'lineFlow': 'lineFlow 2s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'scan': 'scan 2.5s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #39D353 0%, #2eb045 100%)',
      },
      boxShadow: {
        'neon': '0 0 30px rgba(0,255,136,0.4)',
        'neon-lg': '0 0 60px rgba(0,255,136,0.25), 0 20px 60px rgba(0,0,0,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
