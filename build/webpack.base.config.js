const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV
const devMode = NODE_ENV !== 'production'
const utils = require('./utils.js')
const { setPath, setPublicPath } = utils

module.exports = {
  entry:{ 
    main: setPath('src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: setPublicPath(NODE_ENV),
    filename: devMode ? '[name].js' : utils.assetsPath('js/[name].js'),
    chunkFilename: devMode ? '[id].js' : utils.assetsPath('js/[name].[chunkhash].min.js')
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        include: utils.setPath('src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react',
                {
                  'plugins': [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-transform-runtime',
                    ['import', {'libraryName': 'antd', 'libraryDirectory': 'lib'}, 'ant']
                  ]
                }
              ]
            }
          },
          'ts-loader'
        ]
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
              {
                'plugins': [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-runtime',
                  ['import', {'libraryName': 'antd', 'libraryDirectory': 'lib'}, 'ant']
                ]
              }
            ]
          }
        }, 
      }, {
        test: /\.s?css$/,
        // include: setPath('src'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?minimize',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                })
              ]
            }
          },
          'sass-loader'
        ]
      }, {
        test: /\.less$/,
        // include: setPath('src'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?minimize',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                })
              ]
            }
          }, 
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            }
          }
        ]
      }, {
        test: /\.(png|jp?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // static/fonts/[name].[hash:7].[ext]
              name: utils.assetsPath('img/[name].[ext]'),
            }
          }
        ]
      }, {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // static/fonts/[name].[hash:7].[ext]
              name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
          }
        ]
      }]
  },
  resolve: {
    // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    // // 模块别名定义
    // alias: {
    //   '@': setPath('src')
    // }
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: setPath('src/template.html'), 
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? utils.assetsPath('static/css/[name].[hash].css')
        : 'static/css/[name].css',
      chunkFilename: devMode ? utils.assetsPath('static/css/[id].[hash].css')
        : 'static/css/[id].css',
    }),
    // new BundleAnalyzerPlugin()
  ]
}

