// vite.config.js
import {
    resolve
} from 'path'
import {
    defineConfig
} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                konto: resolve(__dirname, 'konto.html'),
                podcastExample: resolve(__dirname, 'podcast-example.html'),
                podcasts: resolve(__dirname, 'podcasts.html'),
                schedule: resolve(__dirname, 'schedule.html'),
                showExample: resolve(__dirname, 'show-example.html'),
                shows: resolve(__dirname, 'shows.html'),
            }
        }
    },
    base: '/silesia.fm/'
})