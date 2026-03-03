import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// LMS API base URLs per build mode
const LMS_URLS = {
    production: 'https://sales.bajajlife.com/BalicLmsUtil',
    preprod: 'https://bajajuat2.bajajlife.com/BalicLmsUtil',
    uat: 'https://bjuat.bajajlife.com/BalicLmsUtil',
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    // use relative paths so assets are resolved relative to index.html
    base: './',
    plugins: [react()],
    define: {
        __LMS_BASE_URL__: JSON.stringify(LMS_URLS[mode] || LMS_URLS.uat),
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                name: 'LifeGoalsGame',
                exports: 'named',
                format: 'es'
            }
        }
    },
    server: {
        port: 5002 // Development port
    }
}))
