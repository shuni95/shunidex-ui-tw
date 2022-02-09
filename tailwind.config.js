module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    'animate-evolution',
  ],
  theme: {
    extend: {
      animation: {
        evolution: 'evolution 3s ease-in-out'
      },

      keyframes: {
        // wiggle: {
        //   '0%, 100%': { transform: 'rotate(-3deg)' },
        //   '50%': { transform: 'rotate(3deg)' },
        // }
        evolution: {
          '0%': {
            transform: 'scale(1)'
          },
          '10%': {
            transform: 'scale(1.2)'
          },
          '20%': {
            transform: 'scale(0.8)'
          },
          '30%': {
            transform: 'scale(1.2)'
          },
          '40%': {
            transform: 'scale(0.8)'
          },
          '50%': {
            transform: 'scale(1.2)'
          },
          '60%': {
            transform: 'scale(1.4)'
          },
          '70%': {
            transform: 'scale(0.8)',
            filter: 'blur(3px)',
            filter: 'grayscale(1)'
          },
          '80%': {
            transform: 'scale(0.4)',
          },
          '90%': {
            transform: 'scale(0.2)'
          },
          '100%': {
            filter: 'blur(0px)',
            filter: 'grayscale(0)'
          }
        }
      }
    },
  },
  plugins: [],
}
