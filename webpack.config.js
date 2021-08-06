require('dotenv/config');
const path = require('path');
const webpack = require('webpack');

const clientPath = path.join(__dirname, 'client');
const serverPublicPath = path.join(__dirname, 'server/public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: clientPath,
  output: {
    path: serverPublicPath
  },
  plugins: [
    new webpack.EnvironmentPlugin(['GOOGLE_MAPS_API_KEY'])
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: clientPath,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: process.env.DEV_SERVER_PORT,
    publicPath: '/',
    contentBase: serverPublicPath,
    watchContentBase: true,
    stats: 'minimal',
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    }
  },
  performance: {
    hints: false
  }
};
