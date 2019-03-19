const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const optimizationConfig = require('./webpack.opt.config')
const utils = require('./utils.js')

const config = {
  devServer: {
    host: '127.0.0.1', 
    port: '8088',
    contentBase: utils.setPath('dist'),
    noInfo: false,
    inline: true,
    hot: true,
    proxy: {
      '/datamanage': {
        target: 'http://10.100.64.64:8888',
        changeOrigin: true
      },
      '/mock': {
        target: 'htpp://127.0.0.1:3000',
        changeOrigin: true
      }
    }
  },
  devtool: '#eval-source-map',
}

module.exports = merge.smart(baseConfig, optimizationConfig, config)