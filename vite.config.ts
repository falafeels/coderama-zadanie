import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      plugins: ["@emotion/babel-plugin"],
    },
  })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          Search: [resolve(__dirname, 'src/routes/movie-search')],
          Detail: [resolve(__dirname, 'src/routes/detail')],
          Favorites: [resolve(__dirname, 'src/routes/favourites')]
        }
      },
    },
  },
})
