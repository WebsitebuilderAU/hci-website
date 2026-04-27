import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        endOfLease: resolve(__dirname, 'end-of-lease-cleaning-canberra/index.html'),
        commercial: resolve(__dirname, 'commercial-cleaning-canberra/index.html'),
        domestic: resolve(__dirname, 'domestic-cleaning-canberra/index.html'),
        windows: resolve(__dirname, 'window-cleaning-canberra/index.html'),
      },
    },
  },
})
