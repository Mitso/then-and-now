import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

import Home from ('./pages/Home.vue') 

Vue.use(Router)
Vue.use(VueMeta)


export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: () => Home
        }
    ],
  });
}