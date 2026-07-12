import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/forlantisgrid/forlantisgrid',
  server: {
    port: 3000,
    open: true
  }
})
