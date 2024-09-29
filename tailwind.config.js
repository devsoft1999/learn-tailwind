module.exports = {
  mode: 'jit',  // เปิดใช้งาน JIT Mode
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },
  plugins: [],
}

