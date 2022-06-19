const { merge } = require('webpack-merge'),
    nodeExternals = require('webpack-node-externals'),
    { VueSSRServerPlugin } = require('./lib/server.plugin'),
    common = require('./common.js')

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

let config = {
    entry: {
        main: path.join(__dirname, 'src/entry-server.js')
    },
    externals: nodeExternals({
        whitelist: /\.css$/,
    }),
    plugins: [
        new VueSSRServerPlugin()
    ]
}

if (!IS_PRODUCTION) {
    config = merge(common, {
        mode: 'development',
       
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
} else {
    config = merge(common, {
        mode: 'production',
    })
}
module.exports =  config