import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import { QuillEditor } from '@vueup/vue-quill';
import * as Sentry from '@sentry/vue';
import _ from 'lodash';
import App from './app.vue'
import debounce from "debounce";
import Pusher from 'pusher-js';
import Router from './router';
import messages from '@intlify/unplugin-vue-i18n/messages';
import "flyonui/flyonui";
import { themeChange } from 'theme-change'
import GlobalIcons from './helpers/tabler-icon';
themeChange();

window._ = _;
window.debounce = debounce;
window.Pusher = Pusher;

const i18n = createI18n({ locale: 'id', messages, missingWarn: false, fallbackWarn: false })
const pinia = createPinia();

const options = {
    confirmButtonColor: '#057701',
    cancelButtonColor: '#d33',
    didOpen: (modal) => {
        if (modal.classList.contains('swal2-toast')) {
            modal.style.marginTop = '50px'; // Adjust the margin as needed
        }
    }
};

const app = createApp({ extends: App, created() { } });
const isDev = JSON.parse(import.meta.env?.VITE_APP_DEBUG ?? false);

if (import.meta.env.VITE_SENTRY_DSN && !isDev) {
    Sentry.init({
        app,
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [
            new Sentry.BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(Router),
            }),
            // new Sentry.Replay(),
        ],
        // Domain Target
        tracePropagationTargets: [import.meta.env.VITE_APP_DOMAIN],
        // Performance Monitoring
        tracesSampleRate: import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE ?? 0.1,
        // Session Replay
        replaysSessionSampleRate: import.meta.env.VITE_SENTRY_REPLAYS_SESSION_SAMPLE_RATE ?? 0.1,
        replaysOnErrorSampleRate: import.meta.env.VITE_SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE ?? 0.1,
        //Ignore erorrs
        ignoreErrors: [
            /Error loading dynamically imported module/i,
            /Failed to fetch dynamically imported module/i,
            /Unable to preload CSS/i,
        ],
    });
    Sentry.setUser(null);
}

app.use(i18n)
    .use(pinia)
    .use(Router)
    .use(VueApexCharts)
    .use(VueTablerIcons)
    .use(VueSweetalert2, options)
    .use(VueExcelEditor)
    .use(GlobalIcons)
    .component('chart', VueApexCharts)
    .component('downloadCsv', JsonCSV)
    .component('downloadExcel', JsonExcel)
    .component('QuillEditor', QuillEditor)
    .component("v-select", vSelect)
    .component('ContentLoader', ContentLoader)
    .component('FacebookLoader', FacebookLoader)
    .component('CodeLoader', CodeLoader)
    .component('BulletListLoader', BulletListLoader)
    .component('InstagramLoader', InstagramLoader)
    .component('ListLoader', ListLoader)
    .component(VueQrcode.name, VueQrcode)
    .mount("#app");
