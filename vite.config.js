import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The portfolio is served at https://bakhoon.github.io/portfolio/
// The build goes into dist/portfolio, and scripts/root-redirect.js adds a
// dist/index.html that sends bakhoon.github.io to /portfolio/.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist/portfolio',
    emptyOutDir: true,
  },
})
