const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

const NxYamlConfiguration = require('@jswork/next-yaml-configuration');
const cwd = process.cwd();
const conf = new NxYamlConfiguration({ path: path.join(cwd, '.webpack.dll.yml') });
const config = conf.get('css');

module.exports = {
  mode: 'production',
  entry: config.entry,
  output: {
    path: path.resolve(cwd, config.path),
  },
  module: {
    rules: [
      // Extracts the compiled CSS from the SASS files defined in the entry
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            // Interprets CSS
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader', // 将 Sass 编译成 CSS
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    // Where the compiled SASS is saved to
    new MiniCssExtractPlugin({
      filename: '[name].[hash:6].dll.css',
      allChunks: true,
    }),
  ],
};
