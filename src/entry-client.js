/* 
    Vue entry app + Hot module reload 
*/

import { createdApp } from './'

const { app, router } = createdApp()


router.onReady(() => {
    if (window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__)
    }

    app.$mount('#app')
})

// if (module.hot) {
//     const api = require('vue-hot-reload-api');
//     const Vue = require('vue');
  
//     api.install(Vue);
//     if (!api.compatible) {
//       throw new Error(
//         'vue-hot-reload-api is not compatible with the version of Vue you are using.',
//       );
//     }
  
//     module.hot.accept();
//   }