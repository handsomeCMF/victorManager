export default {
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:6666/',
      changeOrigin: true,
    },
  },
};
