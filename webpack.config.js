const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const currentTask = process.env.npm_lifecycle_event;

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    addFeedback: './src/addFeedback.js',
    addDetail: './src/addDetail.js',
    roadmap: './src/roadmap.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: 3, targets: 'defaults' },
              ],
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      excludeChunks: ['addDetail', 'addFeedback', 'roadmap'],
    }),
    new HtmlWebpackPlugin({
      template: './src/feedback-detail.html',
      filename: './feedback-detail.html',
      excludeChunks: ['index', 'addFeedback', 'roadmap'],
    }),
    new HtmlWebpackPlugin({
      template: './src/feedback-edit.html',
      filename: './feedback-edit.html',
      xcludeChunks: ['index', 'addFeedback', 'roadmap', 'addDetail'],
    }),
    new HtmlWebpackPlugin({
      template: './src/feedback-new.html',
      filename: './feedback-new.html',
      excludeChunks: ['index', 'addDetail', 'roadmap'],
    }),
    new HtmlWebpackPlugin({
      template: './src/roadmap.html',
      filename: './roadmap.html',
      excludeChunks: ['index', 'addDetail', 'addFeedback'],
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'css',
    }),
  ],
};

if (currentTask === 'build') module.exports.mode = 'production';
