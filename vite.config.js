import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'lib/index.js'),
            name: 'vue2-ppvr',
            // the proper extensions will be added
            fileName: 'vue2-ppvr',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue', 'sass'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },

    plugins: [
        vue2(),
        vue2Jsx(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
