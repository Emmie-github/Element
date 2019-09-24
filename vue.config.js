// const path = require('path');

module.exports = {
  // 方式1
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
  // },
  // 方式2
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
