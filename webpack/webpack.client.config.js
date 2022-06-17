const path = require('path'),
    { merge } = require('webpack-merge'),
    webpack = require('webpack'), 
    common = require('./common.js')

    VueSSRClientPlugin = require('vue-server-renderer/client-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'
let config = {
    entry: {
        main: path.join(__dirname, 'src/entry-client.js')
    }
}

if (!isProduction) {
    config = merge(common, {
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'dev'),
            filename: '[name].bundle.js'
        },

        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader'
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
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
        },

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader
                    ]
                }
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[hash:8].css',
            })
        ]
    })
}
module.exports =  config