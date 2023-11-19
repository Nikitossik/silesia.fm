/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    files: [
      './node_modules/preline/dist/*.js',
      "./node_modules/flowbite/**/*.js",
      "./src/**/*.js",
      "./*.html"
    ]
  },
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1042px',
        xl: '1280px'
      },
    },
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
        float: 'float 1s ease-in-out infinite alternate',
        pulseScale: 'pulseScale 2s ease-in-out infinite'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            transform: 'scale(1.05)',
            opacity: 0.5
          },
          '50%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        pulseScale: {
          '0%, 100%': {
            transform: 'scale(1.2)',
          },
          '50%': {
            transform: 'scale(1)',
          }
        },
        marquee: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-150%)'
          }
        },
        float: {
          "0%": {
            transform: 'translateY(-5%)'
          },
          "100%": {
            transform: 'translateY(5%)'
          }
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}