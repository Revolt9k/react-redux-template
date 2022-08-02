/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const dotenv = require("dotenv");
const Dotenv = require("dotenv-webpack");
// enable this for analyze
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV !== "production";
const envConfig = dotenv.config().parsed;

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  devtool: "source-map",
  target: "web",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/components/"),
      store: path.resolve(__dirname, "src/store/"),
      scene: path.resolve(__dirname, "src/scene/"),
      image: path.resolve(__dirname, "src/image/")
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /fonts[\\/].*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve("ts-loader")
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { sourceMap: true } }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                // auto flag allows use readable classnames with HMR
                auto: true,
                localIdentName: isDev ? "[path]_[name]_[local]" : "[contenthash]"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(webp)$/i,
        use: ["file-loader", "webp-loader"]
      }
    ]
  },
  devServer: {
    static: "./public",
    port: envConfig?.PORT ?? 3000,
    host: envConfig?.HOST ?? "localhost",
    historyApiFallback: true,
    compress: true,
    allowedHosts: "all",
    client: {
      overlay: false
    }
  },
  output: {
    filename: "[name]-[contenthash].js",
    chunkFilename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/"
  },
  optimization: {
    minimize: false,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        extractComments: true
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: "async",
      minSize: 200000,
      minRemainingSize: 0,
      maxSize: 400000,
      minChunks: 2,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 5,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: "./src/image/fav.png"
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser"
    }),
    new Dotenv()
    // enable this for analyze
    // new BundleAnalyzerPlugin(),
  ].filter(Boolean)
};
