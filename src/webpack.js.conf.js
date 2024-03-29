const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NxYamlConfiguration = require('@jswork/next-yaml-configuration');
const cwd = process.cwd();
const conf = new NxYamlConfiguration({ path: path.join(cwd, '.webpack.dll.yml') });
const config = conf.get('js');

module.exports = {
  mode: 'production',
  entry: config.entry,
  output: {
    path: path.join(cwd, config.path),
    filename: '[name].[hash:6].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]',
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(cwd, config.path, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
    }),
  ],
};
