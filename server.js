const path = require('path'),
  fs = require('fs'),
  dotenv = require("dotenv"),
  express = require('express'),
  webpack = require('webpack'),
  { createBundleRenderer } = require('vue-bundle-renderer')
  
//FILE PATHS
const PORT = 3000,
  FILESYSTEM_PATH = __dirname,
  BASEDIR = (name) => path.join(FILESYSTEM_PATH, name),
  IS_PRODUCTION = process.env.NODE_ENV === 'production'

const app = express()

dotenv.config()

app.use(express.static(BASEDIR('static')))
app.use('/dist', express.static(BASEDIR('dist')))

//WEBPACK + VUE SSR
const template = fs.readFileSync(
  BASEDIR('src/index.html'),
  'utf-8',
)

let renderer, readyPromise;
const  clientConfig = require('./webpack/webpack.client.config'),
  clientManifest = require('./dist/vue-ssr-client-manifest.json'),
  clientCompiler = webpack(clientConfig), 
  serverConfig = require('./webpack/webpack.server.config')
  serverBundle = require('./dist/vue-ssr-server-bundle.json'),
  serverCompiler = webpack(serverConfig)

// SETUP WEBPACK DEV MIDDLEWARE
app.use(require('webpack-dev-middleware')(clientCompiler, {
  publicPath: clientConfig.output.publicPath,
  serverSideRender: true,
  logLevel: 'silent'
}))

// SETUP WEBPACK HOT MIDDLEWARE
app.use(require('webpack-hot-middleware')(clientCompiler, { heartbeat: 5000 }))
global.console.log('Building SSR bundle...')

serverCompiler.watch({}, (error, stats) => {
  if (error) throw error
  if (stats.hasErrors()) {
    console.error(stats.compilation.errors);
    throw new Error(stats.compilation.errors);
  }

  if (!IS_PRODUCTION) {
    renderer = createBundleRenderer(serverBundle, 
      Object.assign(options, {
        runInNewContext: false,
        vueServerRenderer: require('@vue/server-renderer'),
        basedir: path(clientConfig.output.publicPath),
        publicPath: clientConfig.output.publicPath,
        clientManifest,
        inject: false
      })
    )
  } 
  else {
    renderer = createBundleRenderer(serverBundle, {
      runInNewContext: false,
      vueServerRenderer: require('@vue/server-renderer'),
      basedir: path(clientConfig.output.publicPath),
      publicPath: clientConfig.output.publicPath
    })
  }
})

app.get('*', async (req, res, next) => {
  const context = { 
    url: req.url, //req.params['0'] || '/'
    state: {
      title: 'Vue SSR Setup',
      users: []
    }
  }

  let html;

  try {
    html = await renderer.renderToString(context)
  } catch (err) {
    if (err === 404) 
      return res.status(404).end('Page not found')
    
    console.log(err)
    return res.status(500).end('Internal Server Error')
  }

  res.end(html)
})


app.listen(PORT, () => {
  console.log(`Started express server at https://localhost:${PORT}, ${process.env.NODE_ENV}`)
})