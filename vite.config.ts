import {defineConfig} from 'vite'

import {extname, relative, resolve} from 'path'
import {fileURLToPath} from 'node:url'
import {glob} from 'glob'

import dts from 'vite-plugin-dts'
// import {libInjectCss} from 'vite-plugin-lib-inject-css'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin(),
        dts({include: ['lib']}),
    ],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: "afwilliams-simple-react",
            /*fileName: "afwilliams-simple-react",*/
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', '@mui/material', '@emotion/react', '@emotion/styled'],
            input: Object.fromEntries(
                glob.sync('lib/**/*.{ts,tsx}').map(file => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    relative(
                        'lib',
                        file.slice(0, file.length - extname(file).length)
                    ),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
                globals: {
                    react: "React",
                },
            }
        }
    }
})
