import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/portfolio/', // replace with '/' if deploying to your-username.github.io
    plugins: [react()]
})
