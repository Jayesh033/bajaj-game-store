import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// LMS API base URLs per build mode
const LMS_URLS = {
    production: 'https://sales.bajajlife.com/BalicLmsUtil',
    preprod: 'https://bajajuat2.bajajlife.com/BalicLmsUtil',
    uat: 'https://bjuat.bajajlife.com/BalicLmsUtil',
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    base: './',
    plugins: [react(), tailwindcss()],
    define: {
        __LMS_BASE_URL__: JSON.stringify(LMS_URLS[mode] || LMS_URLS.uat),
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
                format: 'es'
            }
        }
    },
    server: {
        port: 5015
    }
}))
