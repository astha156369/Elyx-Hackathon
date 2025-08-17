import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// minimal config
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
