module.exports = {
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        progress: 'progress 2s ease-in-out'
      }
    }
  }
}
