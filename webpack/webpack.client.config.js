const path = require('path'),
    webpack = require('webpack'),
    { merge } = require('webpack-merge'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    { VueSSRClientPlugin } = require('./lib/client.plugin'),
    common = require('./common.js')
   
const IS_PRODUCTION = process.env.NODE_ENV === 'development'

let config = {
    entry: {
        main: [
            'webpack-hot-middleware/client',
            path.join(__dirname, 'src/entry-client.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}

if (!IS_PRODUCTION) {
    config = merge(common, {
        mode: 'development',
        
        output: {
            filename: '[name].bundle.js'
        },

        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                }
            ]
        },

        plugins: [
            new VueSSRClientPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
            })
        ]
    })
} else {
    config = merge(common, {
        mode: 'production',
        output: {
            filename: '[name].[contenthash].js',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            })
        ]
    })
}
module.exports =  config