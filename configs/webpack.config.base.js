/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies as externals } from '../app/package.json';

export default {
  externals: [...Object.keys(externals || {})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  stats: {
    warnings: false,
  },
  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
    alias: {
      'clone-deep': path.join(__dirname, '../node_modules/clone-deep'),
    },
  },

  optimization: {
    namedModules: true,
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES: true,
    }),
  ],
};
