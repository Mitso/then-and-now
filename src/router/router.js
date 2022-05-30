import Vue from 'vue'
import Router from 'vue-router'

import App from '../pages/default'
import AboutUs from '../pages/about-us'
import Signup from '../pages/signup'
import Profile from '../pages/user'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: App
            },
            {
                path: '/about-us',
                component: AboutUs
            },
            {
                path: '/signup',
                component: Signup
            },
            {
                path: '/profile',
                component: Profile
            }
        ]
    })
}