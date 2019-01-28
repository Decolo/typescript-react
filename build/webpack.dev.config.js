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
      '/content': {
        target: 'https://www.medicalsee.com',
        changeOrigin: true
      },
      '/member': {
        target: 'https://www.medicalsee.com',
        changeOrigin: true
      }
    }
  },
  devtool: '#eval-source-map',
}

module.exports = merge.smart(baseConfig, optimizationConfig, config)