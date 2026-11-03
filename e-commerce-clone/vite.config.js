import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
    globals: true,
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000'
      },
      '/images':{
        target:'http://localhost:3000'
      }
    }
  }
})
