const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  return {
    entry: {
      'main': './public/main.ts',
    },
  
    output: {
      path: env === 'production' ? path.resolve(__dirname) : path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/'
    },
  
    devtool: 'inline-source-map',
  
    resolve: {
      extensions: [
        '.js', '.jsx', '.ts', '.tsx',
      ],
      alias: {
        "@indiv": path.resolve(__dirname, '../InDiv/packages'),
      },
    },
  
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  
    module: {
      rules: [{
        test: [
          /\.ts$/,/\.tsx$/,
        ],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                'dynamic-import-webpack',
              ],
            },
          },
          "awesome-typescript-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, },
          'css-loader'
        ],
      }, {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, },
          'css-loader',
          'less-loader'
        ],
      }],
    }
  };
};

