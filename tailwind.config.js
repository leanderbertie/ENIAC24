/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 10px #ffffff',
      },
      keyframes: {
        moveDot: {
          '0%, 100%': { top: '10%', right: '10%' },
          '25%': { top: '10%', right: 'calc(100% - 35px)' },
          '50%': { top: 'calc(100% - 30px)', right: 'calc(100% - 35px)' },
          '75%': { top: 'calc(100% - 30px)', right: '10%' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        'moveDot': 'moveDot 6s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
