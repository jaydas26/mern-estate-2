import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        // Set secure to false only if your server runs on HTTP (not HTTPS)
        secure: false,
      },
    },
  },

  plugins: [react()],
})
