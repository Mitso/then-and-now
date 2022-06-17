const { merge } = require('webpack-merge'),
    nodeExternals = require('webpack-node-externals'),
    VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const isProduction = process.env.NODE_ENV === 'production'
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

if (!isProduction) {
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