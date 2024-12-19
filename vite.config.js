import ip from 'ip';
import path from 'path';
import fs from 'fs';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import Pages from 'vite-plugin-pages';
import Laravel from 'laravel-vite-plugin';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import Vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const version = fs.existsSync('.version') ? fs.readFileSync('.version', 'utf8').trim() : 'unknown';

    return defineConfig({
        define: {
            'process.env.VUE_APP_VERSION': JSON.stringify(version), // Inject the version as a global constant
        },
        build: {
            sourcemap: 'hidden',
            manifest: 'manifest.json',
            chunkSizeWarningLimit: 4000,
            rollupOptions: {
                output: {
                    entryFileNames: process.env?.VITE_APP_ID?.toLowerCase() || 'app' + '-[hash].js',
                    chunkFileNames: process.env?.VITE_APP_ID?.toLowerCase() || 'app' + '-[hash].js',
                    assetFileNames: process.env?.VITE_APP_ID?.toLowerCase() || 'app' + '-[hash].[ext]',
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        },
        vite: {
            optimizeDeps: {
                exclude: ['html2pdf']
            }
        },
        plugins: [
            Laravel({
                input: [
                    'resources/scss/app.scss',
                    'resources/css/app.css',
                    'resources/js/app.js'
                ],
                refresh: true,
            }),
            //removeConsole(),
            // https://github.com/antfu/unplugin-auto-import
            AutoImport({
                imports: [
                    'vue',
                    'vue-router',
                    'vue-i18n',
                    'pinia',
                    {
                        //'vue-quill-editor': ['quillEditor'],
                        'vue-simple-calendar': [
                            'CalendarView',
                            'CalendarViewHeader'
                        ],
                        'leaflet-geosearch': [
                            'GeoSearchControl',
                            'OpenStreetMapProvider'
                        ],
                        'vue-content-loader': [
                            'ContentLoader',
                            'FacebookLoader',
                            'CodeLoader',
                            'BulletListLoader',
                            'InstagramLoader',
                            'ListLoader',
                        ],
                        'vue3-apexcharts': [['default', 'VueApexCharts']],
                        'vue-json-csv': [['default', 'JsonCSV']],
                        'vue-json-excel3': [['default', 'JsonExcel']],
                        'vue-select': [['default', 'vSelect']],
                        'vue-sweetalert2': [['default', 'VueSweetalert2']],
                        'vue-tabler-icons': [['default', 'VueTablerIcons']],
                        'vue3-excel-editor': [['default', 'VueExcelEditor']],
                        'leaflet': [['default', 'L']],
                        '@chenfengyuan/vue-qrcode': [['default', 'VueQrcode']],
                    }
                    //'vue-i18n',
                    //'vue/macros',
                    //'@vueuse/head',
                    // '@vueuse/core',
                ],
                dirs: [
                    'resources/vue/store/**',
                    'resources/vue/state/**',
                    'modules/**/Vue/store/**',
                    'modules/**/Vue/state/**',
                ],
                vueTemplate: false,
            }),
            // https://github.com/antfu/unplugin-vue-components
            Components({
                dirs: [
                    'resources/vue/components',
                    'modules/**/Vue/components',
                ],
                extensions: ['vue'],
                deep: true,
                resolvers: [],
                dts: false,
                directoryAsNamespace: true,
                globalNamespaces: [],
                directives: true,
                importPathTransform: v => v,
                allowOverrides: false,
                include: [/\.vue$/, /\.vue\?vue/],
                exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/, /[\\/]\.blueprint[\\/]/],
            }),
            // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
            // Layouts({
            //     layoutsDirs: 'resources/vue/layouts',
            //     //defaultLayout: 'auth'
            // }),

            // https://github.com/hannoeru/vite-plugin-pages
            Pages({
                dirs: [
                    { dir: 'resources/vue/pages', baseRoute: '' },
                    { dir: 'modules/**/Vue/pages', baseRoute: '' },
                    { dir: './src/pages', baseRoute: '' },
                    { dir: './src/modules/**/pages', baseRoute: '' },
                ],
                extensions: ['vue'],
                extendRoute(route, parent) {
                    if (route.path === '/' || route.path === '/auths/login') {
                        // Index is unauthenticated.
                        return route
                    }

                    // Augment the route with meta that indicates that the route requires authentication.
                    return {
                        ...route,
                        meta: { auth: true },
                    }
                },
            }),
            Vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
            VueI18nPlugin({
                // compositionOnly: false,
                allowDynamic: true,
                defaultSFCLang: 'json',
                include: [
                    path.resolve(__dirname, './lang/*.json')
                ],
            }),
            sentryVitePlugin({
                org: process.env.VITE_SENTRY_ORG,
                project: process.env.VITE_SENTRY_PROJECT,
                authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
                telemetry: false,
            }),
        ],
        resolve: {
            alias: {
                '~/': `${path.resolve(__dirname, './resources/vue')}/`,
                '@/': `${path.resolve(__dirname, './node_modules')}/`,
                '#/': `${path.resolve(__dirname, '.')}/`,
            },
        },
        server: {
            host: process.env?.VITE_APP_DOMAIN ?? 'localhost',
            port: 3000,
            hmr: {
                host: ip.address()
            }
        },
        watcher: {
            exclude: [
                'storage/**',
                '.blueprint/**'
            ]
        }
    });
}
