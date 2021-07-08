const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const imageminSvgo = require('imagemin-svgo')
const { extendDefaultPlugins } = require('svgo')
const imageminPngquant = require('imagemin-pngquant')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        loader: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/')
        }
      ]
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js')
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true
        }),
        imageminPngquant(),
        imageminSvgo({
          plugins: extendDefaultPlugins([
            { name: 'removeViewBox', active: false }
          ])
        })
      ]
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50
          }
        }
      ],
      overrideExtension: true
    }),
    new CleanWebpackPlugin(),
    new WebpackPwaManifest({
      name: 'Marinasi App Lite',
      short_name: 'Marinasi Lite',
      description: 'Aplikasi Pemesanan Makanan Terbaik.',
      background_color: '#ffffff',
      crossorigin: 'anonymous',
      filename: 'manifest.json',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '.',
      inject: true,
      fingerprints: true,
      ios: false,
      publicPath: null,
      includeDirectory: true,
      icons: [
        {
          src: path.resolve('src/public/icons/icon-72x72.png'),
          size: '72x72',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-96x96.png'),
          size: '96x96',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-128x128.png'),
          size: '128x128',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-144x144.png'),
          size: '144x144',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-152x152.png'),
          size: '152x152',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-192x192.png'),
          size: '192x192',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-384x384.png'),
          size: '384x384',
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          size: '512x512',
          purpose: 'any maskable'
        }
      ]
    }),
    new BundleAnalyzerPlugin()
  ]
}
