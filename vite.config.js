import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // Adjust this to your actual entry point
    }
  },
  plugins: [react()],
  
})
