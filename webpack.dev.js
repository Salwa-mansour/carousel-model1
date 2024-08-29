const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = module.exports = merge(common, {

  mode: 'development',

  devtool:'source-map',
  devServer:{
      static:{
     directory:path.resolve(__dirname,'dist')
    },
    watchFiles: ['src/**/*.php', 'src/**/*'],
    port:3000,
    open:false,
    hot:true,
    compress:true,
    historyApiFallback:true,
  },

});
