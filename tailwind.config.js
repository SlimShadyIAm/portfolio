const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ["Roboto Mono", 'monospace']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "6rem",
        '2xl': "14rem"
      }
    },
    extend: {
      colors: {
        'transparent-grey-active': 'rgba(0,0,0,.08)!important',
        'transparent-grey': 'rgba(0,0,0,.12)!important',
        'slim-purple': '#7d68dd',
        'slim-blue': '#3273dc',
      },
    },
  },
  plugins: []
}