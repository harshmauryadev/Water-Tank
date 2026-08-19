import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#0EA5E9',       // Ocean Blue
        secondary: '#0284C7',     // Deep Aqua
        accent: '#14B8A6',        // Teal
        background: '#F8FAFC',    // Soft White
        card: '#FFFFFF',          // White
        mainText: '#0F172A',      // Deep Navy
        secondaryText: '#64748B', // Slate

        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0EA5E9', // Ocean Blue (Primary)
          600: '#0284C7', // Deep Aqua (Secondary)
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        oceanBlue: '#0EA5E9',
        deepAqua: '#0284C7',
        tealAccent: '#14B8A6',
        accentTeal: '#14B8A6',
        softBg: '#F8FAFC',
        softWhite: '#F8FAFC',
        cardWhite: '#FFFFFF',
        deepNavy: '#0F172A',
        slateSub: '#64748B',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft-glow': '0 20px 40px -15px rgba(37, 99, 235, 0.15)',
        'soft-xl': '0 25px 50px -12px rgba(15, 23, 42, 0.08)',
        'soft-card': '0 10px 30px -5px rgba(37, 99, 235, 0.05), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
      },
      keyframes: {
        waveAnimation: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'wave-bg': 'waveAnimation 12s linear infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
