module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        xs: "2rem",
        sm: "2rem",
        md: "10rem",
        lg: "2rem",
        xl: "8rem"
      }
    },
    extend: {
      colors: {
        'transparent-grey-active': 'rgba(0,0,0,.08)!important',
        'transparent-grey': 'rgba(0,0,0,.12)!important',
        'slim-purple': '#7d68dd',
      },
    },
  },
  plugins: []
}