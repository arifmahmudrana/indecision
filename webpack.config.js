const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: [
      '@babel/polyfill',
      './src/app.js'
    ],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
