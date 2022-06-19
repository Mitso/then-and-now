import { createApp } from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import Home from '../pages/Home.vue'
//const Home = { template: '<div>Home</div>' }

Vue.use(VueRouter)
Vue.use(VueMeta)


export function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: () => Home
        }
    ],
  });
}