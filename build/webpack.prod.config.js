
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const optimizationConfig = require('./webpack.opt.config')

const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
  ]
}

module.exports = merge.smart(baseConfig, optimizationConfig, config)