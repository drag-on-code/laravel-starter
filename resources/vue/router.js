import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from '~pages';

if (typeof window !== 'undefined') {
    /**
     * @type {import('flyonui/flyonui').IStaticMethods}
     */
    window.HSStaticMethods = window.HSStaticMethods || {};
}

const Router = createRouter({
    history: createWebHistory(),
    routes: generatedRoutes,  // config routes
    //linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    left: 0,
                    top: 0,
                    behavior: 'smooth'
                })
            }, 100)
        })
    },
});

Router.afterEach((to, from, failure) => {
    if (!failure) {
        setTimeout(() => {
            if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
                window.HSStaticMethods.autoInit();
            }
        }, 100);
    }
});

Router.onError((error, to) => {
    if (error.message.includes('Failed to fetch dynamically imported module') || error.message.includes("Importing a module script failed")) {
        setTimeout(() => {
            window.location.reload(true);
        }, 2000);
    }
})

export default Router;
