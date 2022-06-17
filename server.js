const path = require('path'),
  fs = require('fs'),
  express = require('express'),
  { createBundleRenderer } = require('vue-server-renderer')
  
//FILE PATHS
const FILESYSTEM_PATH = __dirname,
  BASEDIR = (name) => path.join(FILESYSTEM_PATH, name)

//WEBPACK + VUE SSR
const template = fs.readFileSync(
  BASEDIR('src/index.html'),
  'utf-8',
),
serverBundle = require('./dist/vue-ssr-server-bundle.json'),
clientManifest = require('./dist/vue-ssr-client-manifest.json')


const app = express()

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
  inject: false,
})

app.use(express.static(BASEDIR('static')))
app.use('/dist', express.static(BASEDIR('dist')))

app.get('*', function(req, res, next) {
  const context = { url: req.url }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (+err.message === 404) {
        res.status(404).end('Page not found');
      } else {
        console.log(err);
        res.status(500).end('Internal Server Error');
      }
    }

    res.end(html)
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`Started express server at https://localhost:${port}`)
})


 