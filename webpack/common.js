const path = require('path'),
    HtmlWebPackPlugin = require("html-webpack-plugin"),
    { VueLoaderPlugin } = require('vue-loader')

const FILESYSTEM_PATH = __dirname,
  BASEDIR = (name) => path.join(FILESYSTEM_PATH, name)


const configurations = {
    output: {
        publicPath: BASEDIR('static')
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    'sass-loader',
                ],
            },   
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                    loader: 'url-loader', //file-loader
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:8].[ext]'
                    }
                    }
                ],
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
          '@': path.resolve(__dirname, '../src'),
          vue: '@vue/runtime-dom',
        },
    },

    plugins: [
        /**
        * generates an HTML file for your application and automatically 
        * injects all your generated bundles into this file
        */
        new HtmlWebPackPlugin({
            template: BASEDIR('../src/index.html'),
            excludeChunks: [ 'server' ]
        }),
        new VueLoaderPlugin()
    ]
}
module.exports = configurations