export default {
    router: {
        base: '/',
        linkActiveClass: 'active'
    },
    components: [
        './src/components' //default level = 0
    ],
    buildModules: [ //Add @nuxtjs/router to the buildModules section
        ['@nuxtjs/router', {
            /* MODULE OPTIONS */
            path: './src/router',
            fileName: 'router.js'
        }]
    ],
    generate: {
        routes: [
            '/' //SPA mode
        ]
    }
}