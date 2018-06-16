const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (env) {
  const production = process.env.NODE_ENV === 'production'
  return {
    devtool: production ? 'source-maps' : 'source-maps',
    entry: './js/app.js',
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    output: production
    ? {
      path: path.resolve(__dirname, '../priv/static'),
      filename: 'js/app.js',
      publicPath: '/'
    }
    : {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/app.js',
      publicPath: 'http://localhost:8080/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
        }
      ]
    },
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'js')],
      extensions: ['.js']
    },
    plugins: [
      new ExtractTextPlugin({filename: 'css/style.css'})
    ]
  }
}
