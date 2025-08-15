import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/investment-calculator',
  server:{
    port: 3000,
    host: true // Allow access from mobile devices on same network
  }
})
