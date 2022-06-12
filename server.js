const createError = require('http-errors')
const fs = require('fs')
const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const router = express.Router()

const { createServer: createViteServer } = require('vite')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

async function createServer() {
  const server = express()

  // EXPRESS: VIEW TEMPLATE ENGINE
  server.set('views', path.join(__dirname, 'src/templates'))
  server.set('view engine', 'pug')

  server.use(logger('dev'))
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use(cookieParser())

  //SERVE STATIC FILES
  server.use(express.static(path.join(__dirname, 'public')))
  server.use(express.static(path.join(__dirname, 'src')))
  server.use(express.static(path.join(__dirname, '')))


  // EXPRESS: PAGE ROUTES 
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  })
  // use vite's connect instance as middleware
  server.use(vite.middlewares)

  server.use('/', async (req, res, next) => {
    const url = req.originalUrl
    try {
      // 1. Read index.html
      //res.sendFile(path + "index.html");

      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )
      template = await vite.transformIndexHtml(url, template)
  
    // 3. Load the server entry. vite.ssrLoadModule automatically transforms
        //    your ESM source code to be usable in Node.js! There is no bundling
        //    required, and provides efficient invalidation similar to HMR.
        const { render } = await vite.ssrLoadModule('/src/entry-server.js')
  
        // 4. render the app HTML. This assumes entry-server.js's exported `render`
        //    function calls appropriate framework SSR APIs,
        //    e.g. ReactDOMServer.renderToString()
        const appHtml = await render(url)
  
        // 5. Inject the app-rendered HTML into the template.
        const html = template.replace(`<!--ssr-outlet-->`, appHtml)
  
        // 6. Send the rendered HTML back.
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
      } catch (e) {
        // If an error is caught, let Vite fix the stracktrace so it maps back to
        // your actual source code.
        vite.ssrFixStacktrace(e)
        console.log('VITE ENDPOINT - ERROR RESPONSE')
        next(e)
      }
  })
  //server.use('/', indexRouter)
  server.use('/users', usersRouter)
  server.listen(3000)
}

createServer()


