import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/forlantisgrid/',
  publicDir: 'src/assets/public',
  server: {
    port: 3000,
    open: true
  }
})