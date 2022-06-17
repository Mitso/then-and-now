import { createApp } from 'vue'
import { sync } from 'vuex-router-sync'
import { createRouter } from './router'

import App from './App.vue'


export function createdApp() {
    const router = createRouter()
  
    sync(router)

    const app = createApp({
      router,
      render: h => h(App)
    })
  
    return { app, router }
  }