export default {
    router: {
        base: '/',
        linkActiveClass: 'active'
    },
    css: [
        './assets/styles/_normalize.scss',
        './assets/styles/_variables.scss',
        './assets/styles/default.scss'
    ],
    buildModules: [ //Add @nuxtjs/router to the buildModules section
        ['@nuxtjs/router', {
            /* MODULE OPTIONS */
            path: './router',
            fileName: 'router.js'
        }]
    ],
    generate: {
        routes: [
            '/' //SPA mode
        ]
    }
}