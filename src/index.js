import Vue from 'vue'
import { createRouter }  from './routes'

import App from './App.vue'

export function createdApp() {
    const router = createRouter()
  
    const app = new Vue({
      router,
      render: h => h(App)
    })
  
    return { app, router }
  }