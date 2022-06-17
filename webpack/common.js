const path = require('path'),
    HtmlWebPackPlugin = require("html-webpack-plugin"),
    { VueLoaderPlugin } = require('vue-loader')

const FILESYSTEM_PATH = __dirname,
  BASEDIR = (name) => path.join(FILESYSTEM_PATH, name)
const configurations = {
    output: {
        publicPath: BASEDIR('public')
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    name: 'images/[name].[hash:8].[ext]',
                  },
                },
            },
            {
                test: /\.css$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                loader: "babel-loader"
                },
                exclude: '/node_modules/'
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [{loader: "html-loader"}]
            }
        ]
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    plugins: [
        /**
        * generates an HTML file for your application and automatically 
        * injects all your generated bundles into this file
        */
        new HtmlWebPackPlugin({
            template: BASEDIR('src/index.html'),
            excludeChunks: [ 'server' ]
        }),
        new VueLoaderPlugin()
    ]
}
module.exports = configurations