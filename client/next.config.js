module.exports = {
  reactStrictMode: true,
  // /**
  //  * INFO: Just for assestment purposes...
  //  * Redirects to a more suitable route convention
  //  */
  async redirects() {
    return [
      {
        source: '/product',
        destination: '/products/1',
        permanent: false,
      },
    ];
  },
};
